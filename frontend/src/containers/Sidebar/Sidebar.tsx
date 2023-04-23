import React from 'react';
import Logo from '../../aplouds/Logo.svg';
import './Sidebar.scss';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<header className="header container">
				<a href="#" >
					<img className='logo' src={Logo} alt="Compas"/>
				</a>
				<nav className="nav">
					<ul className="sidebar-list">
						<li><a href="#">Логистика</a></li>
						<li><a href="#">Перевозчики</a></li>
						<li><a href="#">Задачи</a></li>
						<li><a href="#">Аналитика</a></li>
						<li><a href="#">Адреса</a></li>
						<li><a href="#">Товары</a></li>
						<li><a href="#">Информация для
							склада</a></li><li><a href="#">Адреса</a></li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Sidebar;