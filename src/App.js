import React from 'react'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddtransAction from './components/AddtransAction'
function App() {
  return (
    <div>
    <Header/>
    <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddtransAction/>
    </div>
    </div>
  )
}
export default App