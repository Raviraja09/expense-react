import './ExpenseItem.css';
import './ExpenseDate.js';
import './card.js';
function ExpenseItem(props)
{
    
    return(
        
            <card className='expense-item'>
                <Expensedate date={props.date} />
            <div className='expense-item__description'>
                <div>
            <h2>{props.title}</h2>
            <div className='expense.item__amount'>{props.amount}</div>
            </div>
            
            
        </div>
        </card>
        

    );
}
export default ExpenseItem;