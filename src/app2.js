import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'


import configureStore from './store/configureStore'
import {startSetExpenses} from './actions/exprenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'
import { app } from 'firebase';

const store = configureStore()
console.log('test')
// store.dispatch(addExpense({description: 'Water bill', amount: 3000}))
// store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}))
// store.dispatch(addExpense({description: 'Rent', amount: 10990}))

// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
)

const appRoot = document.getElementById('app');

ReactDOM.render(<p>Loading...</p>, appRoot)

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, appRoot)
})
