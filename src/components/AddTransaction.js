import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction } = useContext(GlobalContext); 

    const onSubmit = e => {
        e.preventDefault();

            
      const newTransaction = {
        id: Math.floor(Math.random() * 10000),
        text,
        amount: +amount
        }
        
        console.log("newTransaction.text", newTransaction.text.trim.length +"  " + newTransaction.text);
        console.log("newTransaction.amount", newTransaction.amount);

        if(newTransaction.text) {
            addTransaction(newTransaction);
           
          }
       
    }

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Title (can't be blank)</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
                    placeholder="Enter text"/> 
                </div>

                <div className="form-control">

                    <label htmlFor="amount">Amount <br/> (negative - Expense, positive - Income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} 
                    placeholder="Enter Amount" />
                </div>
                <button className="btn">Add Tranaction</button>
            </form>

        </div>
    )
}
