import { useState } from 'react'
import './App.css'
import ExpenseForm from './compenents/ExpenseForm'
import ExpenseTable from './compenents/ExpenseTable'
import expenseData from '../expenceData'
function App() {
  const [expenses, setExpenses] = useState(expenseData)

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} />
        <ExpenseTable expenses={expenses} setExpenses={setExpenses} />
      </div>
    </main>
  )
}

export default App