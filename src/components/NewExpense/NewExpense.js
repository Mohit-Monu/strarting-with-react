import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  let defaultForm = (
    <div className="new-expense__controls">
      <div className="new-expense__actions">
        <button onClick={showFormHandler}>Add Expense</button>
      </div>
    </div>
  );
  const [entereddefaultForm, setDefaultForm] = useState(defaultForm);
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }
  function showFormHandler() {
    setDefaultForm(
      
        <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler}></ExpenseForm>
    );
  }
  return <div className="new-expense">{entereddefaultForm}</div>;
}
export default NewExpense;
