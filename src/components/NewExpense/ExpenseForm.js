import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //to use multi state
  const [enteredTitle,setEnteredTitle]= useState("")
  const [enteredAmount,setEnteredAmount]= useState("")
  const [enteredDate,setEnteredDate]= useState("")

  //to use single state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  function titleChangeHandler(event) {
    //to use multi state
    setEnteredTitle(event.target.value);

    //to use single state
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value
    // })

    //more good approach
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  }
  function amountChangeHandler(event) {
    //to use multi state
    setEnteredAmount(event.target.value);

    //to use single state
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // })

    //more good approach
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  }
  function dateChangeHandler(event) {
    //to use multi state
    setEnteredDate(event.target.value);

    //to use single state
    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value
    // })

    //more good approach
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  }
  function submitHandler(event){
    event.preventDefault();
    const expenseData={
      title: enteredTitle,
      price: enteredAmount,
      date:new Date(enteredDate)
    }
    props.onSaveExpenseDate(expenseData)
    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
  }
  return (
    <form onSubmit={submitHandler} >
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label> Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
        </div>
        <div className="new-expense__controls">
          <label> Amount</label>
          <input
            type="number"
            min="1"
            step="0.5"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__controls">
          <label> Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
