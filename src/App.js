import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpense} from './components/IncomeExpense'
import {TransactionList} from './components/TransactionList'
import {AddTransaction} from './components/AddTransaction'
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
        <Header/>

<div className="main-col">
      {/* <div className="container"> */}
            <Balance/>
           <IncomeExpense/>
           
            <AddTransaction/>
      {/* </div> */}
      </div>

  <div className="side-col">
    
      <TransactionList/>
     
      </div>   
    </GlobalProvider>
  );
}

export default App;
