import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      {props.items
      .filter(item => item.date.getFullYear() == filteredYear)
      .map(item => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          price={item.price}
          date={item.date}
        />
      ))}
    </Card>
  );
}
export default Expenses;
