import React from "react";
import "./NewExpenseDate.css";

function NewExpenseDate(props) {
  let newDate = new Date(props.date);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="expense-date">
      <p>{months[newDate.getMonth()]}</p>
      <p>{newDate.getFullYear()}</p>
      <p>{newDate.getDate()}</p>
    </div>
  );
}

export default NewExpenseDate;
