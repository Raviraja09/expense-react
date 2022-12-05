import ExpenseItem from "./ExpenseItem";

const expenses=(props)=>
{
  const [filteredyear,setFilteredyear]=usestae('2020');
  const filterchangeHandler=selectyear=>{
    setFilteredyear(selectyear);
  }
return(
  <div>
    <card classname='expense'>
      <expensesFilter selected={Filteredyear} onchangeFilter={filterchangeHandler}/>
      {props.items.map(expense=><ExpenseItem>
         title={expense.title} 
         amount={expense.amount}
         </ExpenseItem>
      
      )}
      
      </card>
      </div>
);
     };
     
