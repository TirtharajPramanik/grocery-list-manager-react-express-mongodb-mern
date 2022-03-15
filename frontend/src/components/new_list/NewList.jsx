import './newList.css';
import React from 'react';
import dayjs from 'dayjs';
import { TiTickOutline, TiTimesOutline } from 'react-icons/ti';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';

let editList;

const NewList = ({
	add,
	edit,
	lists,
	setAdd,
	setEdit,
	createData,
	updateData,
}) => {
	const timeRef = React.useRef(null);
	const titleRef = React.useRef(null);
	const [done, setDone] = React.useState(false);
	React.useEffect(() => {
		if (edit) {
			editList = lists.find((list) => {
				return list._id == edit;
			});
			titleRef.current.value = editList.title;
			const td = new Date(
				editList.targetDate ? editList.targetDate : editList.updatedAt
			);
			timeRef.current.value = dayjs(td).format().substring(0, 19);
			setDone(editList.completed);
		}
	}, [edit]);
	return (
		<div className='grocery-list new'>
			<section className='card'>
				<input
					type='text'
					name='card-title'
					inputMode='text'
					className='card-title'
					placeholder='Title'
					ref={titleRef}
				/>
				{/* <div className='time'>
					<input
						type='text'
						name='day'
						inputMode='text'
						className='gap'
						placeholder='Monday'
					/>
					<input
						type='text'
						name='arbitron'
						inputMode='text'
						placeholder='Afternoon'
					/>
				</div> */}
				<div className='time'>
					<label htmlFor='targetDate'>Target Date: </label>
					<input
						className='gap'
						name='targetDate'
						type='datetime-local'
						ref={timeRef}
					/>
				</div>
				<div className='card-footer'>
					{done ? (
						<div
							className='is-done'
							onClick={() => {
								setDone(false);
							}}>
							<h1>completed</h1>
							<TiTickOutline size='1.6em' color='lime' />
						</div>
					) : (
						<div
							className='not-done'
							onClick={() => {
								setDone(true);
							}}>
							<h1>incomplete</h1>
							<TiTimesOutline size='1.6em' color='red' />
						</div>
					)}
					<IoCheckmarkDoneCircleSharp
						size='2em'
						className='done'
						onClick={async () => {
							edit
								? await updateData('lists/', editList._id, {
										title: titleRef.current.value,
										targetDate: timeRef.current.value,
										completed: done,
								  })
								: await createData('lists', {
										title: titleRef.current.value,
										targetDate: timeRef.current.value,
										completed: done,
								  });
							setEdit(undefined);
							setAdd(!add);
						}}
					/>
				</div>
			</section>
		</div>
	);
};

export default NewList;
