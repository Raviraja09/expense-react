import './ExpenseItem.css';
function ExpenseItem(props)
{
    
    return(
        
            <div className='expense-item'>
            <div>{props.Date.toISOSstring()}jan 09</div>
            <div className='expense-item__description'>
                <div>
            <h2>{props.ttle}</h2>
            <div className='expense.item__amount'>{props.amount}</div>
            </div>
            
            
        </div>
        </div>
    );
}
export default ExpenseItem;