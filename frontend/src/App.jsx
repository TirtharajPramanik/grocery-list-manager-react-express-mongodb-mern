import './app.css';
import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import GroceryLists from './components/grocery_lists/GroceryLists';
import { GroceryListsContextProvider } from './contexts/GroceryLists';

const App = () => {
	return (
		<GroceryListsContextProvider>
			<div className='app'>
				<Header />
				<main className='main'>
					<GroceryLists />
				</main>
				<Footer />
			</div>
		</GroceryListsContextProvider>
	);
};

export default App;
