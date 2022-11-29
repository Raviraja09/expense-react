import './ExpenseDate.css'
function ExpenseItem(props)
{
    const month=props.Date.toLocalestring('en-US',{ month:'long'});
    const day=props.Date.toLocalestring('en-US',{ day: '2-digit'});
    const year=props.Date.getfullyear()
    return (
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{day}</div>
           
           
           
            </div>
    )    
}
export default ExpenseDate;