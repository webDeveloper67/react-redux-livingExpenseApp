import React, {useState} from 'react';
import {MdSend} from 'react-icons/md';
import uuid from 'uuid';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {handleAlert} from '../actions';

const ExpenseForm = ({handleAlert}) => {
	/* single expense */
	const [expenses, setExpenses] = useState({
		charge: '',
		amount: ''
	});

	const {charge, amount} = expenses;

	const handleChange = e =>
		setExpenses({...expenses, [e.target.name]: e.target.value});

	const handleSubmit = e => {
		e.preventDefault();
		if (charge !== '' && amount > 0) {
			const singleExpense = {id: uuid(), charge, amount};
			setExpenses({...expenses, singleExpense});
			setExpenses({});
			handleAlert('Item Successfuly Added', 'success');
		}
	};

	return (
		<form onSubmit={e => handleSubmit(e)}>
			<div className="form-center">
				<div className="form-group">
					<label htmlFor="expense">Charge</label>
					<input
						className="form-control"
						type="text"
						id="charge"
						name="charge"
						value={charge || ''}
						placeholder="e.g. rent"
						onChange={e => handleChange(e)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="amount">Amount</label>
					<input
						className="form-control"
						type="number"
						id="amount"
						name="amount"
						placeholder="e.g. 100"
						value={amount || ''}
						onChange={e => handleChange(e)}
					/>
				</div>
			</div>
			<button type="submit" className="btn">
				<MdSend className="btn-icon" />
				Submit
			</button>
		</form>
	);
};

export default connect(null, {handleAlert})(ExpenseForm);
