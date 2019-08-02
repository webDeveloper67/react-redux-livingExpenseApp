import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchExpense, editExpense} from '../../actions';
import ExpenseForm from './ExpenseForm';

class ExpenseEdit extends React.Component {
	componentDidMount() {
		this.props.fetchExpense(this.props.match.params.id);
	}
	onSubmit = expenseValues => {
		this.props.editExpense(this.props.match.params.id, expenseValues);
	};
	render() {
		if (!this.props.expense) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<h3>Edit the Expense</h3>
				<ExpenseForm
					initialValues={_.pick(this.props.expense, 'charge', 'amount')}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		expense: state.expenses[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, {fetchExpense, editExpense})(
	ExpenseEdit
);
