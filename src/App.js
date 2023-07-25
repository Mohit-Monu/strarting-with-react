import { useState } from "react";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from"./components/NewExpense/NewExpense"
function App() {
  var expenses=[
    {
      title:"Food",
      price:500,
      date:new Date(2023,7,21)
    },
    {
      title:"House",
      price:50000,
      date:new Date(2023,7,21)
    },{
      title:"Car",
      price:5000,
      date:new Date(2023,7,21)
    },{
      title:"Bike",
      price:500000,
      date:new Date(2023,7,21)
    },
  ]
  const [enteredExpense,setEnteredExpense] =useState(expenses)
  function addExpenseHandler(expense){
    console.log("udyg")
    console.log(expense)
    setEnteredExpense([...expenses,expense])
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} ></NewExpense>
      <Expenses items={enteredExpense}></Expenses>
    </div>
  );
}

export default App;
