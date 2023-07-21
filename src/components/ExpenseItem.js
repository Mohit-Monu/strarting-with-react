import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div>
      <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetails title={props.title} price={props.title}></ExpenseDetails>
      </div>
    </div>
  );
}
export default ExpenseItem;
