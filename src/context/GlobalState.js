import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// const initialState = {
//         transactions: [ 
//        {id:1, text: 'Plants', amount: -50},
//        {id:2, text: 'Trimmer', amount: -40},
//        {id:3, text: 'Received Money', amount: 500}
// ]
// }

const initialState = {
      transactions: [              
      ]
}

// create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

        // Actions
    function deleteTransaction(id) {
            dispatch({
                    type: 'DELETE_TRANSACTION',
                    payload: id
            });
    }    


    function addTransaction(transaction) {
        dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
        });
}    


    return (<GlobalContext.Provider value = {{transactions: state.transactions, 
        deleteTransaction,
        addTransaction }}>

            {children}
            </GlobalContext.Provider>);
    }