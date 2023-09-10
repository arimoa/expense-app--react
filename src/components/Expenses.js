import React from "react";
import ExpenseCard from "./ExpenseCard";
import "./Expenses.css";

function Expenses(props) {
  function removeHandler(item) {
    props.onDelete(item);
  }
  return (
    <div className="expenses-container">
      {props.information.length === 0 && <p>There is no Expense!</p>}
      {props.information.map((expense) => (
        <ExpenseCard key={expense.id} data={expense} onRemove={removeHandler} />
      ))}
    </div>
  );
}

export default Expenses;
