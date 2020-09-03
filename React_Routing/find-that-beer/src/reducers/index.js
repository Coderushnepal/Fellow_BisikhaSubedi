import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const dateReducer = (state= [], action) => {
    switch(action.type) {
        case 'ADD_DATE' :
            return [...state, new Date().toLocaleDateString()];
        default :
            return state;
    }
};

const rootReducer = combineReducers({ counterReducer, dateReducer });

export default rootReducer;