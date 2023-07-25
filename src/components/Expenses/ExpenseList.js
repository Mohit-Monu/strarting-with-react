import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  } else if (props.item.length === 1) {
    return (
      <div>
        {props.item.map((item, index) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          price={item.price}
          date={item.date}
        />
        ))}
        <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>
      </div>
    );
  } else {
    return props.item.map((item, index) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        price={item.price}
        date={item.date}
      />
    ));
  }
}

export default ExpenseList;
