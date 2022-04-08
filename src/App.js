import React, { useState } from 'react';
import Cart from './components/UI/Cart';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Iphone X',
    amount: 1100.00,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New AC', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Bike Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Laptop (Apple)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense];
    });
  }

  return (
    <Cart className="expenses">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </Cart>
  );
}

export default App;
