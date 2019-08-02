import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

import {FaLocationArrow} from 'react-icons/fa';

class ExpenseForm extends Component {
	renderError({error, touched}) {
		if (error && touched) {
			return (
				<div className="alert alert-danger my-1">
					{error}
				</div>
			);
		}
	}
	renderInput = ({input, label, type, meta}) => {
		return (
			<div className="form-group">
				<label>
					{label}
				</label>
				<input {...input} type={type} className="form-control" />
				{this.renderError(meta)}
			</div>
		);
	};
	onSubmit = expenseValues => {
		this.props.onSubmit(expenseValues);
	};
	render() {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="ui form"
			>
				<Field
					name="charge"
					type="text"
					component={this.renderInput}
					label="e.g. rent"
				/>
				<Field
					name="amount"
					type="number"
					component={this.renderInput}
					label="e.g. 100"
				/>
				<button className="ui button primary">
					<FaLocationArrow /> Submit
				</button>
			</form>
		);
	}
}

const validate = expenseValues => {
	const errors = {};
	if (!expenseValues.charge) {
		errors.charge = 'Please Type Something';
	}
	if (!expenseValues.amount) {
		errors.amount = 'Please Add a number';
	}
	return errors;
};

export default reduxForm({
	form: 'setExpenses',
	validate
})(ExpenseForm);
