import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';


export default combineReducers({
    employees : simpleReducer
});