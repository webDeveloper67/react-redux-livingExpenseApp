import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createExpense} from '../../actions';
import ExpenseForm from './ExpenseForm';

class ExpenseCreate extends Component {
	onSubmit = expenseValues => {
		this.props.createExpense(expenseValues);
	};
	render() {
		return (
			<div>
				<h3>Create a Expense</h3>
				<ExpenseForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, {createExpense})(ExpenseCreate);
