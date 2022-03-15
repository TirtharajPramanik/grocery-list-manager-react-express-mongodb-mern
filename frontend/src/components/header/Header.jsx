import './header.css';
import React from 'react';
import logo from '../../assets/grocery-bag-logo.png';
import {
	createData,
	updateData,
	GroceryListsContext,
} from '../../contexts/GroceryLists';
import NewList from '../new_list/NewList';

const Header = () => {
	const { add, setAdd, setEdit, edit, lists } =
		React.useContext(GroceryListsContext);
	return (
		<header className='header'>
			<div className='container'>
				<h1 className='heading'>Grocery List</h1>
				<img
					className='grocery-bag-logo'
					src={logo}
					alt='grocery-bag-logo'
					onClick={() => {
						setAdd(!add);
						setEdit(null);
					}}
				/>
				{add && (
					<NewList
						add={add}
						edit={edit}
						lists={lists}
						setAdd={setAdd}
						setEdit={setEdit}
						createData={createData}
						updateData={updateData}
					/>
				)}
			</div>
		</header>
	);
};

export default Header;
