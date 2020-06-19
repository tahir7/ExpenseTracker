// import React, {useContext} from 'react'
// import {GlobalContext} from '../context/GlobalState'

import React from 'react'


export default (state, action)  => {

    // const {deleteTransaction} = useContext(GlobalContext);
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
               ...state, 
               transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        
        case 'ADD_TRANSACTION':
           
            return {
                ...state,
                    transactions: [action.payload , ...state.transactions]
            }    
        
        default:
            return state;
    }
}