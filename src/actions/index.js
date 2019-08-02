import expenses from '../apis/expenses';
import {
	CREATE_EXPENSE,
	FETCH_EXPENSES,
	DELETE_EXPENSE,
	FETCH_EXPENSE,
	EDIT_EXPENSE
} from './types';
import history from '../history';

export const createExpense = expenseValues => async dispatch => {
	const response = await expenses.post('/expenses', expenseValues);
	dispatch({
		type: CREATE_EXPENSE,
		payload: response.data
	});
	history.push('/');
};

export const fetchExpenses = () => async dispatch => {
	const response = await expenses.get('/expenses');

	dispatch({
		type: FETCH_EXPENSES,
		payload: response.data
	});
};

export const deleteExpense = id => async dispatch => {
	await expenses.delete(`/expenses/${id}`);

	dispatch({
		type: DELETE_EXPENSE,
		payload: id
	});

	history.push('/');
};

export const fetchExpense = id => async dispatch => {
	const response = await expenses.get(`/expenses/${id}`);

	dispatch({
		type: FETCH_EXPENSE,
		payload: response.data
	});
};

export const editExpense = (id, expenseValues) => async dispatch => {
	const response = await expenses.put(`/expenses/${id}`, expenseValues);

	dispatch({
		type: EDIT_EXPENSE,
		payload: response.data
	});

	history.push('/');
};
