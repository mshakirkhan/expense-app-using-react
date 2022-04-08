import React, { useState } from 'react';
import '../Expense/ExpenseItems.css';
import ExpenseDate from '../Expense/ExpenseDate';
import Cart from '../UI/Cart';

const ExpenseItems = (props) => {
    return (
        <li>
            <Cart className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{ props.title }</h2>
                    <div className="expense-item__price">$ { props.amount }</div>
                </div>
            </Cart>
        </li>
    );
}

export default ExpenseItems;