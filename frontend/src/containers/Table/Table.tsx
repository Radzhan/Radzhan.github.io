import React, {useState} from 'react';
import './Table.scss';
import Lines from '../../images/3lines.svg';
import Dotes from '../../images/3dots.svg';
import Arrow from '../../images/arrow.svg';
import {useAppDispatch} from '../../app/hooks';
import {InputBtnI} from '../../types';

const Table = () => {
	const dispatch = useAppDispatch();
	const [state, setState] = useState<InputBtnI[]>([]);
	const [currentInput, setCurrentInput] = useState<InputBtnI>({
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
				const weight = match[0];
				Result += Number(state[i].result) * Number(state[i].amount);
				weightResult += Number(state[i].amount) * Number(weight);
				amountResult += Number(state[i].amount);
			}
		}

		array.push(weightResult, Result, amountResult);
		return array;
	};

	const createTd = state.map((element, index) => {
		return <tr key={index}
		           draggable={true}
		           onDragOver={(e) => dragOverHandler(e)}
		           onDragLeave={(e) => dragLeaveHandler(e)}
		           onDragStart={(e) => dragStartHandler(e, element)}
		           onDragEnd={(e) => dragEndHandler(e)}
		           onDrop={(e) => dragDropHandler(e, index)}>
			<td style={{width: '45px'}}><img style={{marginRight: '5px'}} src={Lines} alt="3Lines"/>{index + 1}</td>
			<td onClick={() => removeInput(index)}><img src={Dotes} alt="3dotes"/></td>
			<td>
				<div className="input-border name-td">{element.name}
					<button className="arrow-btn"><img src={Arrow} alt="arrow"/></button>
				</div>
			</td>
			<td>
				<div className="input-border">{element.price}</div>
			</td>
			<td>
				<div className="input-border"><input type="text" value={element.amount} style={{border: 'none'}} name="amount"
				                                     onChange={(e) => inputChangeHandler(e, index)}/></div>
			</td>
			<td>
				<div className="input-border name-td">{element.displayName}
					<button className="arrow-btn"><img src={Arrow} alt="arrow"/></button>
				</div>
			</td>
			<td>
				<div className="input-border">{element.result}</div>
			</td>
		</tr>;
	});

	return (
		<div className="container">
			<div className="btn-group">
				<button className="btn" onClick={addInputRd}>Добавить строку</button>
			</div>
			<div className="table">
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
				<div className="all-results">
					<p>Сумма: <span>{countResult()[1]}руб</span> </p>
					<p>Кол-во: <span>{countResult()[2]}шт</span></p>
					<p>Общий вес: <span>{countResult()[0]}кг</span></p>
				</div>
			</div>
		</div>
	);
};

export default Table;