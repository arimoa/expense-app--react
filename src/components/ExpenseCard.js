import React from "react";
import NewExpenseDate from "./NewExpenseDate";
import "./ExpenseCard.css";

function ExpenseCard(props) {
  function buttonDeleteHandler() {
    props.onRemove(props.data);
  }
  return (
    <div className="expense-container">
      <div className="expense-details">
        <NewExpenseDate date={props.data.date} />
        <div className="expense-title">{props.data.title}</div>
        <div className="expense-price">{props.data.price}$</div>
      </div>
      <button type="button" onClick={buttonDeleteHandler}>
        Delete
      </button>
    </div>
  );
}

export default ExpenseCard;
