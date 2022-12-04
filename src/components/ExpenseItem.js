import React,{ usestate} from 'react';
import './ExpenseItem.css';
import './ExpenseDate.js';
import './card.js';
function ExpenseItem(props)
{
   const[title,setTitle]=usestate(props.title);
   const ClickHandler=()=>
   {
    setTitle('updated');
    console.log('title');
   }
    
    return(
            <card className='expense-item'>
                <Expensedate date={props.date} />
            <div className='expense-item__description'>
                <div>
            <h2>{props.title}</h2>
            <div className='expense.item__amount'>{props.amount}</div>
            </div>
            <button onclick={ClickHandler}>change title</button>
            
            
        </div>
        </card>
        

    );
}
export default ExpenseItem;