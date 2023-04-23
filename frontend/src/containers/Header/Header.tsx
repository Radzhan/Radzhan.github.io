import React from 'react';
import './Header.scss'

const Header = () => {
	return (
		<div className='container'>
			<header className='header'>
				<h1>Проведение ТО и мелкий ремонт</h1>
				<nav className="nav">
					<ul className="nav-list">
						<li><a href="#">Общее</a></li>
						<li><a href="#">Товар списания</a></li>
						<li><a href="#">Доп. расходы</a></li>
					</ul>
				</nav>
				<div className='btn-group'>
					<button className='btn'>Добавить строку</button>
				</div>
			</header>
		</div>
	);
};

export default Header;