import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import expensesReducer from './expenses';

export default combineReducers({
	form: formReducer,
	expenses: expensesReducer
});
