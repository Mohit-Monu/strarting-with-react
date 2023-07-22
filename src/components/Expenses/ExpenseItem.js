// import react from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";
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
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails title={props.title} price={props.title}></ExpenseDetails>
    </Card>
  );
}
export default ExpenseItem;
