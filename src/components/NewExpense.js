import React, { useState } from "react";
import "./NewExpense.css";

function NewExpense(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  let newExpense;
  function titleHandler(e) {
    setTitle((prev) => e.target.value);
  }
  function priceHandler(e) {
    setPrice((prev) => e.target.value);
  }
  function dateHandler(e) {
    setDate((prev) => e.target.value);
  }
  function formHandler(e) {
    e.preventDefault();
    if (title.trim() === "" || date === "" || price === "") {
      setDate("");
      setPrice("");
      setTitle("");
      alert("All input fields should be filled");
    } else {
      newExpense = {
        id: Math.random(),
        title: title,
        price: price,
        date: date,
      };
      props.onNewExpense(newExpense);
      setDate("");
      setPrice("");
      setTitle("");
    }
  }
  return (
    <div className="newExpense-container">
      <form onSubmit={formHandler}>
        <div className="input-container">
          <label>Enter the Title</label>
          <input type="text" value={title} onChange={titleHandler}></input>
        </div>
        <div className="input-container">
          <label>Select the Date</label>
          <input type="date" value={date} onChange={dateHandler}></input>
        </div>
        <div className="input-container">
          <label>Enter the price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={price}
            placeholder="$"
            onChange={priceHandler}
          ></input>
        </div>

        <button className="form-btn" type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default NewExpense;
