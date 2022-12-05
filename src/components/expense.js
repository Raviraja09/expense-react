import ExpenseItem from "./ExpenseItem";

const expenses=(props)=>
{
  const [filteredyear,setFilteredyear]=usestae('2020');
  const filterchangeHandler=selectyear=>{
    setFilteredyear(selectyear);
  }
  const Filteredexpenses=props.items.filter(expense=>{
    return expense.date.getfullyear().toString()===filteredyear;
  })
return(
  <div>
    <card classname='expense'>
      <expensesFilter selected={Filteredyear} 
      onchangeFilter={filterchangeHandler}/>
      {Filteredexpenses.map(expense=><ExpenseItem>
        key={expense.id}
         title={expense.title} 
         amount={expense.amount}
         date={expense.date}
         </ExpenseItem>
      
      )}
      
      </card>
      </div>
);
     };
     
