import ExpenseItem from "./components/ExpenseItem"
function App() {
  const expenses=[
    {
      title:"Food",
      price:500,
      date:new Date(2023,7,21)
    },
    {
      title:"House",
      price:50000,
      date:new Date(2023,7,21)
    },{
      title:"Car",
      price:5000,
      date:new Date(2023,7,21)
    },{
      title:"Bike",
      price:500000,
      date:new Date(2023,7,21)
    },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} price={expenses[0].price} date={expenses[0].date} ></ExpenseItem>
      <ExpenseItem title={expenses[1].title} price={expenses[1].price} date={expenses[1].date} ></ExpenseItem>
      <ExpenseItem title={expenses[2].title} price={expenses[2].price} date={expenses[2].date} ></ExpenseItem>
      <ExpenseItem title={expenses[3].title} price={expenses[3].price} date={expenses[3].date} ></ExpenseItem>
    </div>
  );
}

export default App;
