import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchExpenses} from '../../actions';
import ExpenseItem from './ExpenseItem';
import {Link} from 'react-router-dom';

class ExpenseList extends Component {
	componentDidMount() {
		this.props.fetchExpenses();
	}
	renderCreate() {
		return (
			<div style={{textAlign: 'right'}}>
				<Link to="/expenses/new" className="ui button primary">
					Create Expense
				</Link>
			</div>
		);
	}

	render() {
		return (
			<div>
				<div>
					<ExpenseItem />
				</div>
				{this.renderCreate()}
			</div>
		);
	}
}

export default connect(null, {fetchExpenses})(ExpenseList);
