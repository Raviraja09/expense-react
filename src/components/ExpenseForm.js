import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm=()=>
{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredamount,setEnteredamount]=useState('');
    const [entereddate,setEntereddate]=useState('');
    const titleChangeHandler=(event)=>
    {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler=(event)=>
    {
        setEnteredamount(event.target.value);
    };
    const dateChangeHandler=(event)=>
    {
        setEntereddate(event.target.value);
    };
    return(
    
    <form>
        <div className='new-expense__controls'>
        <label>title </label>
        <input type='text' onchange={titleChangeHandler}/>
    </div>
    <div className='new-expense__controls'>
        <label>amount</label>
        <input type='number' min="0.001" step="0.01"/>
        </div>
        <div className='new-expense__controls'>
        <label>date</label>
        <input type='date' min="29-01-2000" max="04-12-2022"/>
        </div>
        <div>
            <div className='new-expense__actions'>
                <button type="submit">Add expense</button>
            </div>
        </div>
    </form>
    );
}
export default ExpenseForm