import {combineReducers} from 'redux';
import alertReducer from './alert';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
	alert: alertReducer,
	form: formReducer
});
