import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Transaction} from './Transaction'

export const TransactionList = () => {

    const {transactions} = useContext(GlobalContext);
   

    return (
        <>
            <h4>History</h4>
            <h4>&nbsp;</h4>
            <ul className="list">
               { transactions.map(transaction => (< Transaction transaction={transaction}/>)) }
              
            </ul>
        </>
    )
}
