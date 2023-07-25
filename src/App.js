import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  var expenses = [
    {
      id:"1230",
      title: "Food",
      price: 500,
      date: new Date(2023, 7, 21),
    },
    {
      id:"120",
      title: "House",
      price: 50000,
      date: new Date(2023, 6, 21),
    },
    {
      id:"130",
      title: "Car",
      price: 5000,
      date: new Date(2023, 7, 21),
    },
    {
      id:"230",
      title: "Bike",
      price: 500000,
      date: new Date(2022, 7, 21),
    },
  ];
  const [enteredExpense, setEnteredExpense] = useState(expenses);
  function addExpenseHandler(expense) {
    setEnteredExpense((prevExpenses) => {
      console.log([expense, ...prevExpenses]);
      return ([expense, ...prevExpenses])
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={enteredExpense}></Expenses>
    </div>
  );
}

export default App;
