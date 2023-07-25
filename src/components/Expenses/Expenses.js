import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import Card from "../UI/Card"
function Expenses(props){
    console.log(props.items)
    return(
        <Card className="expenses">
            {props.items.map((item,index)=>{
                return(<ExpenseItem key={index} title={item.title} price={item.price} date={item.date}></ExpenseItem>)
            })}
        </Card>
    )
}
export default Expenses