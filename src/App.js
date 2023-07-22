import Expenses from "./components/Expenses/Expenses"
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
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
