import React, { useState } from 'react';
import Card from '../UI/Cart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expense.css';

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = filteredYear => {
        setFilteredYear(filteredYear);
    }
    const filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (
    <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesList items={filteredExpense} />
        </Card>
    </div>
    );
}

export default Expense;