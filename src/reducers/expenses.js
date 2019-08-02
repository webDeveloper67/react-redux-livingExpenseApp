import {
	CREATE_EXPENSE,
	FETCH_EXPENSES,
	DELETE_EXPENSE,
	FETCH_EXPENSE,
	EDIT_EXPENSE
} from '../actions/types';
import _ from 'lodash';

const initialState = {};

export default (state = initialState, action) => {
	const {type, payload} = action;

	switch (type) {
		case CREATE_EXPENSE:
			return {...state, [action.payload.id]: payload};
		case FETCH_EXPENSES:
			return {...state, ..._.mapKeys(payload, 'id')};
		case DELETE_EXPENSE:
			return _.omit(state, payload);
		case FETCH_EXPENSE:
			return {...state, [action.payload.id]: payload};
		case EDIT_EXPENSE:
			return {...state, [action.payload.id]: payload};
		default:
			return state;
	}
};
