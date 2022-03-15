import React from 'react';
import './groceryList.css';
import { RiEditLine } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md';
import { TiTickOutline, TiTimesOutline } from 'react-icons/ti';
import { deleteData, GroceryListsContext } from '../../contexts/GroceryLists';

const days = [
	'sunday',
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
	'saturday',
];

const getArbitron = (date) => {
	const hours = date.getHours();
	if (hours < 6 && hours >= 4) {
		return 'dawn';
	} else if (hours < 12 && hours >= 6) {
		return 'morning';
	} else if (hours < 13 && hours >= 12) {
		return 'noon';
	} else if (hours < 17 && hours >= 13) {
		return 'afternoon';
	} else if (hours < 18 && hours >= 17) {
		return 'dask';
	} else if (hours < 21 && hours >= 18) {
		return 'evening';
	} else if (hours < 24 && hours >= 21) {
		return 'night';
	} else if (hours < 4 && hours >= 1) {
		return 'overnight';
	} else {
		return 'midnight';
	}
};

const GroceryList = ({ list }) => {
	const { add, setAdd, setEdit } = React.useContext(GroceryListsContext);
	const date = new Date(list.targetDate ? list.targetDate : list.updatedAt);
	const targetDay = days[date.getDay()];
	const targetArbitron = getArbitron(date);
	const targetDate = date.toLocaleDateString().replaceAll('/', '-');
	const targetTime = date.toLocaleTimeString().slice(0, -3);
	return (
		<div className='grocery-list'>
			<section className='card'>
				<div
					className='touch'
					onClick={() => {
						console.log('xxxx');
					}}>
					<h1 className='card-title'>{list.title}</h1>
					<div className='time'>
						<h1 className='gap'>{targetDay}</h1>
						<h2>{targetArbitron}</h2>
					</div>
					<div className='time'>
						<h3 className='gap'>{targetDate}</h3>
						<h3>{targetTime}</h3>
					</div>
				</div>
				<div className='card-footer'>
					{list.completed ? (
						<div
							className='is-done'
							// onClick={() => {
							// 	list.completed = !list.completed;
							// 	console.log(list.completed);
							// }}
						>
							<h1>completed</h1>
							<TiTickOutline size='1.6em' color='lime' />
						</div>
					) : (
						<div
							className='not-done'
							// onClick={() => {
							// 	list.completed = !list.completed;
							// 	console.log(list.completed);
							// }}
						>
							<h1>incomplete</h1>
							<TiTimesOutline size='1.6em' color='red' />
						</div>
					)}
					<RiEditLine
						className='edit-card'
						size='1.6em'
						color='green'
						onClick={() => {
							setAdd(!add);
							setEdit(list._id);
						}}
					/>
					<MdDeleteForever
						className='delete-card'
						size='1.6em'
						color='crimson'
						onClick={() => {
							deleteData('lists/', list._id);
						}}
					/>
				</div>
			</section>
		</div>
	);
};

export default GroceryList;
