import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./Card"
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (

      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetails title={props.title} price={props.title}></ExpenseDetails>
      </Card>
  );
}
export default ExpenseItem;
