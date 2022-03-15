import React from 'react';
import axios from 'axios';

const GroceryListsContext = React.createContext();

const proxy = 'http://localhost:8000/api/v1/grocery/';
let getData;
let deleteData;
let createData;
let updateData;

const GroceryListsContextProvider = (props) => {
	const [add, setAdd] = React.useState(false);
	const [edit, setEdit] = React.useState();
	const [lists, setLists] = React.useState([]);
	getData = async (url) => {
		const res = await axios.get(proxy + url);
		const data = await res.data;
		setLists(data);
	};
	deleteData = async (url, id) => {
		await axios.delete(proxy + url + id);
		await getData(url);
	};
	createData = async (url, data) => {
		await axios.post(url, data);
		await getData(url);
	};

	updateData = async (url, id, data) => {
		await axios.patch(proxy + url + id, data);
		await getData(url);
	};

	React.useEffect(() => {
		getData('lists');
	}, []);
	return (
		<GroceryListsContext.Provider
			value={{ lists, add, setAdd, edit, setEdit }}
			children={props.children}
		/>
	);
};

export {
	GroceryListsContextProvider,
	GroceryListsContext,
	getData,
	deleteData,
	createData,
	updateData,
};
