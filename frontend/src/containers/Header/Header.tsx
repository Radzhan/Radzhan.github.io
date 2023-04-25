import React from 'react';
import IconSVG from '../../images/gear.svg';
import './Header.scss';

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
					<button className='gear-btn'>
						<img src={IconSVG} alt='gear' />
					</button>
				</nav>
			</header>
		</div>
	);
};

export default Header;