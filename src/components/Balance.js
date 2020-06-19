import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Balance = () => {

  const {transactions} = useContext(GlobalContext);

  // const amounts = transactions.map(transaction => transaction.amount);
  // const total = amounts.reduce((acc, item) => (acc += item, 0).toFixed(2));

  let total =0;
  for(let index=0; index < transactions.length; index++)
      total = total + transactions[index].amount;

    return (
    <div>
       <h4>Balance</h4>
       <h4>$ {total}</h4>
    </div>

      )
}
