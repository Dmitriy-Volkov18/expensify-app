import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'


import configureStore from './store/configureStore'
import {addExpense} from './actions/exprenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()
store.dispatch(addExpense({description: 'Water bill', amount: 3000}))
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent', amount: 10990}))


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
)

const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot)