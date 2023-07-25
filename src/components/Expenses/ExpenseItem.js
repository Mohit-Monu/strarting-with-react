// import react from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";
const ExpenseItem=(props)=> {
  // return react.createElement(
  //   "div",
  //   { className: "expense-item" },
  //   react.createElement(ExpenseDate, { date: props.date }),
  //   react.createElement(
  //     "div",
  //     {},
  //     react.createElement("h1", {}, "Expense 1"),
  //     react.createElement("h1", {}, "Expense 1")
  //   )
  // );
  const [title,setTitle]=useState(props.title)
  const [price,setPrice]=useState(props.price)

  function edittitleHandler(){
    setTitle("Updated")
  }
  function editPriceHandler(){
    setPrice(100)
  }
  function deleteHandler(){
    console.log("Delete!!")
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails title={title} price={price}></ExpenseDetails>
      <button onClick={edittitleHandler} >Change Title</button>
      <button onClick={editPriceHandler} >Change Price</button>

      <button onClick={deleteHandler} >Delete</button>
    </Card>
  );
}
export default ExpenseItem;
