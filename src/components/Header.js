import React from 'react';
import { NavLink } from 'react-router-dom';
import DashBoard from './DashBoard';
import AddExpense from './AddExpense';
import EditExpense from './EditExpense';
import Help from './Help';

const Header = () => {
	return (
		<div>
			<h1>Expensify</h1>
			<NavLink to="/" activeClassName="is-active" exact={true}>DashBoard</NavLink>
			<NavLink to="/create" activeClassName="is-active">AddExpense</NavLink>
			<NavLink to="/help" activeClassName="is-active">Help</NavLink>
		</div>
	)
}

export default Header;