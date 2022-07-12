
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [filteredYear,setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear=>
    {
        
        setFilteredYear(selectedYear);
    };
   const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    return (
        <div>
        <Card className='expense'>
            <ExpensesFilter selected = {filteredYear} onChange = {filterChangeHandler}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
        </div>
    );
}

export default Expenses;