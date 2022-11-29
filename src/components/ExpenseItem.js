import './ExpenseItem.css';
import './ExpenseDate.js';
import './card.js';
function ExpenseItem(props)
{
    function ClickHandler()
    {
        console.log("clicked!");
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