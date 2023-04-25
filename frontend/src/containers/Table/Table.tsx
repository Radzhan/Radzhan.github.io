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

	const addInputRd = async () => {
		setState(prev => [...prev, {name: 'Мраморный щебень фр. 2-5 мм, 25кг ', displayName: 'Мраморный', amount: '12', price: '1231', result: '1231'}])
	}

	console.log(state)

	const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
		const {name, value} = e.target;
		setState(prevState => prevState.map((item, index) =>
			index === i
				? { ...item, [name]: value }
				: item
		));
	};

	const removeInput = (index: number) => {
		let array = [...state];
		array.splice(index,1)
		setState(array)
	}

	const createTd = state.map((element, index) => {
		return <tr key={index}>
			<td style={{width: '45px'}}><img style={{marginRight: '5px'}} src={Lines} alt='3Lines'/>{index + 1}</td>
			<td onClick={() => removeInput(index)}><img src={Dotes} alt='3dotes'/></td>
			<td><div className='input-border name-td'>{element.name}<button className='arrow-btn'><img src={Arrow} alt='arrow'/></button></div></td>
			<td><div className='input-border'>{element.price}</div></td>
			<td><div className='input-border'><input type='text' value={element.amount} name='amount' onChange={(e) => inputChangeHandler(e, index)}/></div></td>
			<td><div className='input-border'>{element.displayName}</div></td>
			<td><div className='input-border'>{element.result}</div></td>
		</tr>
	})

	return (
		<div className='container'>
			<div className='btn-group'>
				<button className='btn' onClick={addInputRd}>Добавить строку</button>
			</div>
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
		</div>
	);
};

export default Table;