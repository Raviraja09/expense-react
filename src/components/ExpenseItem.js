import './ExpenseItem.css';
import './ExpenseDate.js';
function ExpenseItem(props)
{
    
    return(
        
            <div className='expense-item'>
                <Expensedate date={props.date} />
            <div className='expense-item__description'>
                <div>
            <h2>{props.title}</h2>
            <div className='expense.item__amount'>{props.amount}</div>
            </div>
            
            
        </div>
        </div>
    );
}
export default ExpenseItem;