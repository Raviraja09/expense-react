
import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm=()=>
{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredamount,setEnteredamount]=useState('');
    const [entereddate,setEntereddate]=useState('');
    const titleChangeHandler=(event)=>
    {
        setUserInput()=(prevstate)=>{
        return{
            ...prevstate,enteredTitle:event.target.value
        }
    }
        setUserInput()=(prevstate)=>
        {
        return{
            ...prevstate,enteredamount:event.target.value
        } 
    }
        setUserInput()=(prevstate)=>
        {
        return{
            ...prevstate,entereddate:event.target.value
        }
    }
        
   }
   const submithandler=(event)=>{ 
    event.preventdefault();
   }
   const expensedata={
    title:enteredTitle,
    amount:enteredamount,
    date:new Date(entereddate)
   };
   console.log(expensedata);

   }
   
    return(
    
    <form onSubmit={submithandler}>

        <div className='new-expense__controls'>
        <label>title</label>
        <input type='text' 
        value='enteredtitle'
        onchange={titleChangeHandler}/>
    </div>
    <div className='new-expense__controls'>
        <label>amount</label>
        <input type='number'
         value='enteredamount'
         min="0.001" 
         step="0.01"/>
        </div>
        <div className='new-expense__controls'>
        <label>date</label>
        <input type='date'
         min="29-01-2000" 
         max="04-12-2022"
         value='entereddate'/>
        </div>
        <div>
            <div className='new-expense__actions'>
                <button type="submit">Add expense</button>
            </div>
        </div>
    </form>
    );

export default ExpenseForm