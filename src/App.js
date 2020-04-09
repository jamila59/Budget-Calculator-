import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert'
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import uuid from 'uuid/v4';

const initialExpenses = [
  {id:uuid(), charge:"rent", amount:1600},
  {id:uuid(), charge:"car", amount:400},
  {id:uuid(), charge:"credit card", amount:1200}
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  return (
    <>
      <Alert/>
      <h1>Budget Expenses</h1>
      <main>
        <ExpenseForm/>
        <ExpenseList expenses={expenses}/>
      </main>
      <h1>
        Total Expenses : 
        <span className="total">
          ${expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
     </>
  );
}

export default App;
