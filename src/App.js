import { useState } from "react";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";

function App() {
  let first_data = [
    { id: 1, title: "Milk", price: "20.2", date: new Date() },
    { id: 2, title: "Water", price: "10.2", date: new Date() },
  ];
  const [expenses, setExpenses] = useState(first_data);

  function newExpenseHandler(enteredExpense) {
    setExpenses((prev) => [enteredExpense, ...prev]);
  }
  function deleteHandler(item) {
    setExpenses((prev) => prev.filter((num) => num !== item));
  }

  return (
    <>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses information={expenses} onDelete={deleteHandler} />
    </>
  );
}

export default App;
