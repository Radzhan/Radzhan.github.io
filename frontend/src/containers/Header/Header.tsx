import React, {useState} from 'react';
import './Header.scss';

const Header = () => {
	const [state, setState] = useState(false);
	const sidebar = document.querySelector('.sidebar') as HTMLElement | null;

	const addClass = () => {
		setState(!state)
		sidebar?.classList.add('open')
		sidebar?.classList.remove('close');
	}

	return (
		<div className='container'>
			<header className='header'>
				<h1 className='main-text' onClick={addClass}>Проведение ТО и мелкий ремонт</h1>
				<nav className="nav-header">
					<ul className="nav-list">
						<li><a href="#">Общее</a></li>
						<li><a href="#">Товар списания</a></li>
						<li><a href="#">Доп. расходы</a></li>
					</ul>
					<button className='gear-btn'></button>
				</nav>
			</header>
		</div>
	);
};

export default Header;