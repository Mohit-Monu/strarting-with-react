import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpenseFilter"
import { useState } from "react"

function Expenses(props){
    const [filteredYear,setFilteredYear]=useState('2020')
    function filterChangeHandler(selectedYear){
        setFilteredYear(selectedYear)
    }
    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            {props.items.map((item,index)=>{
                return(<ExpenseItem key={index} title={item.title} price={item.price} date={item.date}></ExpenseItem>)
            })}
        </Card>
    )
}
export default Expenses