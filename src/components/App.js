import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';

import ExpenseList from './expenses/ExpenseList';
import ExpenseEdit from './expenses/ExpenseEdit';
import ExpenseDelete from './expenses/ExpenseDelete';
import ExpenseShow from './expenses/ExpenseShow';
import ExpenseCreate from './expenses/ExpenseCreate';
import Header from '../Header';

import history from '../history';

const App = () => {
	return (
		<Router history={history}>
			<div>
				<div className="ui container">
					<Header />
					<Switch>
						<Route path="/" exact component={ExpenseList} />
						<Route path="/expenses/new" exact component={ExpenseCreate} />
						<Route path="/expenses/edit/:id" exact component={ExpenseEdit} />
						<Route
							path="/expenses/delete/:id"
							exact
							component={ExpenseDelete}
						/>
						<Route path="/expenses/show" exact component={ExpenseShow} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
