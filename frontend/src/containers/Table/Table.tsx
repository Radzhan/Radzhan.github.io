import React, {useEffect, useState} from 'react';
import './Table.scss';
import Lines from '../../images/3lines.svg';
import Arrow from '../../images/arrow.svg';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {InputBtnI} from '../../types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, {bindTrigger, bindPopover} from 'material-ui-popup-state';
import {selectUser} from '../../features/user/userSlice';
import {useNavigate} from 'react-router-dom';
import {arrayNames, getNames} from '../../store/compasSlice';
import {MenuItem, TextField} from '@mui/material';

const Table = () => {
	const user = useAppSelector(selectUser);
	const namesArray = useAppSelector(arrayNames);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [state, setState] = useState<InputBtnI[]>([]);
	const [isExpanded, setIsExpanded] = useState(true);

	const [currentInput, setCurrentInput] = useState<InputBtnI>({
		displayName: '',
		price: '',
		name: '',
		amount: '',
		result: '',
	});
	const [selectedName, setSelectedName] = useState<InputBtnI>({
		displayName: '',
		price: '',
		name: '',
		amount: '',
		result: '',
	});
	const addInputRd = async () => {
		setState(prev => [...prev, {
			name: 'Мраморный щебень фр. 2-5 мм, 25кг ',
			displayName: 'Мраморный',
			amount: '12',
			price: '1231',
			result: '1231'
		}]);
	};

	const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
		const {name, value} = e.target;
		setState(prevState => prevState.map((item, index) =>
			index === i
				? {...item, [name]: value}
				: item
		));
	};

	const allInputChangeHandler = (index: number, changeIndex: number) => {
		let array = [...state]
		array[index] = namesArray[changeIndex];
		return setState(array);
	};

	const removeInput = (index: number) => {
		let array = [...state];
		array.splice(index, 1);
		setState(array);
	};

	const dragOverHandler = (e: React.DragEvent<HTMLTableRowElement>) => {
		e.preventDefault();
		const target = e.target as HTMLElement;
		target.style.boxShadow = '0 2px 3px gray';
	};

	const dragLeaveHandler = (e: React.DragEvent<HTMLTableRowElement>) => {
		const target = e.target as HTMLElement;
		target.style.boxShadow = 'none';
	};

	const toggleExpanded = () => {
		if (window.innerWidth > 1024) {
			setIsExpanded(true);
		} else {
			setIsExpanded(!isExpanded);
		}
	};

	const dragStartHandler = (e: React.DragEvent<HTMLTableRowElement>, element: InputBtnI) => {
		setCurrentInput(element);
	};
	const dragEndHandler = (e: React.DragEvent<HTMLTableRowElement>) => {
		const target = e.target as HTMLElement;
		target.style.boxShadow = 'none';
	};
	const dragDropHandler = (e: React.DragEvent<HTMLTableRowElement>, index: number) => {
		e.preventDefault();
		e.stopPropagation();
		const target = e.target as HTMLElement;
		target.style.boxShadow = 'none';
		let currentIndex = state.indexOf(currentInput);
		let array = [...state];
		array.splice(currentIndex, 1);
		array.splice(index + 1, 0, currentInput);
		setState(array);
	};

	const countResult = (): number[] => {
		const array: number[] = [];

		let weightResult = 0;
		let Result = 0;
		let amountResult = 0;

		for (let i = 0; i < state.length; i++) {
			const string = state[i].name;
			const regex = /\d+(?=кг)/;
			const match = string.match(regex);

			if (match) {
				console.log(state[i].amount)
				const weight = match[0];
				Result += Number(state[i].price) * Number(state[i].amount);
				weightResult += Number(state[i].amount) * Number(weight);
				amountResult += Number(state[i].amount);
			}
		}

		array.push(weightResult, Result, amountResult);
		return array;
	};

	useEffect(() => {
		dispatch(getNames());
	}, [dispatch]);

	const createTd = state.map((element, index) => {
		return <tr key={index}
		           draggable={true}
		           onDragOver={(e) => dragOverHandler(e)}
		           onDragLeave={(e) => dragLeaveHandler(e)}
		           onDragStart={(e) => dragStartHandler(e, element)}
		           onDragEnd={(e) => dragEndHandler(e)}
		           onDrop={(e) => dragDropHandler(e, index)}>
			<td className="lines" onClick={toggleExpanded} style={{width: '38px'}}><img style={{marginRight: '5px'}}
			                                                                            src={Lines}
			                                                                            alt="3Lines"/>{index + 1}</td>
			{isExpanded ? <>
				<PopupState variant="popover" popupId="demo-popup-popover">
					{(popupState) => (
						<td className="dotes">
							<Button className="dotes-btn" {...bindTrigger(popupState)} style={{padding: '0', width: '0px'}}></Button>
							<Popover
								{...bindPopover(popupState)}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'center',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'center',
								}}
							>
								<Typography onClick={() => removeInput(index)} sx={{p: 2, color: '#AE0A0A'}}>Удалить</Typography>
							</Popover>
						</td>
					)}
				</PopupState>

				<td className="name">
					<TextField
						className="input-border name-td select-name"
						sx={{width: '100%'}}
						select
						label='Мраморный щебень фр. 2-5 мм, 25кг'
						onChange={(e) => allInputChangeHandler(index, Number(e.target.value))}
						required
					>
						<MenuItem value={element.name} disabled>
							Please select name
						</MenuItem>
						{namesArray.map((el, index) => (
							<MenuItem key={el.id} value={index}>
								{el.name}

							</MenuItem>
						))}
					</TextField>
				</td>
				<td className="price">
					<div className="input-border">{element.price}</div>
				</td>
				<td className="amount">
					<div className="input-border"><input type="text" value={element.amount} style={{border: 'none'}} name="amount"
					                                     onChange={(e) => inputChangeHandler(e, index)}/></div>
				</td>
				<td className="displayName">
					<div className="input-border name-td">{element.displayName}
						<button className="arrow-btn"><img src={Arrow} alt="arrow"/></button>
					</div>
				</td>
				<td className="result">
					<div className="input-border">{element.result}</div>
				</td>
			</> : null}
		</tr>;
	});
	const checkUser = () => {
		if (user) {
			return addInputRd();
		} else {
			navigate('/register');
		}
	};


	return (
		<div className="container">
			<div className="btn-group">
				<button className="btn" onClick={checkUser}>Добавить строку</button>
			</div>
			<div className="table">
				<span className='gear-btn' ></span>
				<table>
					<thead>
					<tr>
						<th></th>
						<th></th>
						<th>Наименование еденицы</th>
						<th>Цена</th>
						<th>Кол-во</th>
						<th>Название товара</th>
						<th>Итого</th>
					</tr>
					</thead>
					<tbody>
					{createTd}
					</tbody>
				</table>
				<div className="results-block">
					<div className="all-results">
						<p>Сумма: <span>{countResult()[1]}руб</span></p>
						<p>Кол-во: <span>{countResult()[2]}шт</span></p>
						<p>Общий вес: <span>{countResult()[0]}кг</span></p>
					</div>
					<div className="result-block all-results">
						<p>Общая сумма: <span>{countResult()[1]}руб</span></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Table;