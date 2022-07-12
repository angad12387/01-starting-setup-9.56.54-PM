import React,{useState} from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) =>
{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    // const [userInput,setUserInterval]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });
    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
        // setUserInterval({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // });
        // setUserInterval((prevState)=>{
        //     return {...prevState,enteredTitle: event.target.val}
        // });
    };
    const amountChangeHandler = (event)=>{
    //     setUserInterval({
    //         ...userInput,
    //         enteredAmount:event.target.value
    //     });
    setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event)=>{
        // setUserInterval({
        //     ...userInput,
        //     enteredDate:event.target.value
        // });
        setEnteredDate(event.target.value);
    };
    
    const submitHandler = (event) =>{
        event.preventDefault(); //This will prevent the browser from reloading automatically when from is submitted
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return (
    <form onSubmit={submitHandler}>
        <div className = "new-expense__controls">
            <div className = "new-expense__controls">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange = {titleChangeHandler}/>
            </div>
            <div className = "new-expense__controls">
                <label>Amount</label>
                <input type='Number' min="0.01" step="0.01"  value={enteredAmount} onChange = {amountChangeHandler}/>
            </div>
            <div className = "new-expense__controls">
                <label>Date</label>
                <input type='date' min = "2019-01-01" max="2022-12-31" value={enteredDate} onChange = {dateChangeHandler}/>
            </div>
        </div>
        <div className = "new-expense__actions">
            <button type = "submit" >Add Expense</button>
        </div>
    </form>
    )
};

export default ExpenseForm