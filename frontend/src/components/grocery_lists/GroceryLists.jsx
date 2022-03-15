import React from 'react';
import './groceryLists.css';
import GroceryList from '../grocery_list/GroceryList';
import { GroceryListsContext } from '../../contexts/GroceryLists';

const GroceryLists = () => {
	const listContext = React.useContext(GroceryListsContext);
	return (
		<div className='grocery-lists'>
			<div className='container'>
				{listContext.lists.map((list) => {
					return <GroceryList key={list._id} list={list} />;
				})}
			</div>
		</div>
	);
};

export default GroceryLists;
