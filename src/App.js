import React from 'react';
import './App.css';

import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';

const App = () => {
	return (
		<div>
			<h1>Budget Calculator</h1>
			<main>
				<Alert />
				<ExpenseForm />
			</main>
		</div>
	);
};

export default App;
