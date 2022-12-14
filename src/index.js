import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'


const feedbackReducer = (state= {feeling : 0, understanding : 0, support : 0, comments: ''}, action) => {
    switch(action.type) {
        case 'NEW_FEELING':
            return {...state, feeling: action.payload};
        //understanding
        case 'NEW_UNDERSTANDING':
                return {...state, understanding : action.payload};
        //support
        case 'NEW_SUPPORT':
                return {...state, support : action.payload};
        //comment
        case 'NEW_COMMENT':
                return {...state, comments : action.payload};
        default : return state;
    } //end switch
}; //end feedbackReducer





const storeInstance = createStore(
    combineReducers({
        //reducers go here
        feedbackReducer
    }),
    applyMiddleware(logger)) //store created

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
