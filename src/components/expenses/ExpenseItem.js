import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ExpenseItem extends Component {
	renderExpenses() {
		return this.props.expenses.map(expense => {
			return (
				<div className="item" key={expense.id}>
					<div className="content header">
						{expense.charge}
					</div>
					<div className="right floated content">
						<Link
							to={`/expenses/edit/${expense.id}`}
							className="ui button primary"
						>
							Edit
						</Link>
					</div>
					<div className="right floated content">
						<Link to={`/expenses/delete/${expense.id}`} className="ui button">
							Delete
						</Link>
					</div>
					<div className="right floated content ui red label">
						$ {expense.amount}
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<div className="ui celled list">
					{this.renderExpenses()}
				</div>
				<h3>
					Total Spending :{' '}
					<span className="total">
						${' '}
						{this.props.expenses.reduce((acc, curr) => {
							return (acc += parseInt(curr.amount));
						}, 0)}
					</span>
				</h3>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		expenses: Object.values(state.expenses)
	};
};

export default connect(mapStateToProps)(ExpenseItem);
