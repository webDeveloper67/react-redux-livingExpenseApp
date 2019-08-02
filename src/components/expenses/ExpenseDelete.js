import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import {fetchExpense, deleteExpense} from '../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ExpenseDelete extends React.Component {
	componentDidMount() {
		this.props.fetchExpense(this.props.match.params.id);
	}
	renderActions() {
		const {id} = this.props.match.params;
		return (
			<React.Fragment>
				<button
					onClick={() => this.props.deleteExpense(id)}
					className="ui button negative"
				>
					Delete
				</button>
				<Link to="/" className="ui button">
					Cancel
				</Link>
			</React.Fragment>
		);
	}
	renderContent() {
		if (!this.props.expense) {
			return 'Are you sure you want to delete this expense?';
		}

		return `Are you sure deleting charge: ${this.props.expense.charge}`;
	}
	render() {
		console.log(this.props);

		return (
			<Modal
				title="Delete Stream"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
			/>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
		expense: state.expenses[ownProps.match.params.id]
	};
};
export default connect(mapStateToProps, {fetchExpense, deleteExpense})(
	ExpenseDelete
);
