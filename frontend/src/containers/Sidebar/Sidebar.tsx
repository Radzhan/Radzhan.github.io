import React, {useEffect, useState} from 'react';
import Logo from '../../aplouds/Logo.svg';
import './Sidebar.scss';
import {useAppSelector} from '../../app/hooks';
import {selectUser} from '../../features/user/userSlice';
import {NavLink} from 'react-router-dom';
import UserMenu from '../../components/Menu/UserMenu';
import {styled} from '@mui/material';
import AnonMenu from '../../components/Menu/AnonMenu';

const Link = styled(NavLink)({
	color: 'inherit',
	textDecoration: 'none',
	'&:hover': {
		color: 'inherit',
	},
});

const Sidebar = () => {
	const user = useAppSelector(selectUser);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 840);
	const sidebar = document.querySelector('.sidebar') as HTMLElement | null;

	const closeSidebar = () => {
		sidebar?.classList.add('close');
		sidebar?.classList.remove('open');
	};

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 840);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={`sidebar  ${isMobile ? 'close' : ''}`}>
			<header className="header container">
				{isMobile ? (
					<div className="sidebar-mobile">
						<h2>Меню</h2>
						<button onClick={closeSidebar}>Вернутся</button>
					</div>
				) : (
					<Link to="/">
						<img className="logo" src={Logo} alt="Compas"/>
					</Link>
				)}
				<nav className="nav">
					<ul className="sidebar-list">
						<li><a href="#">Логистика</a></li>
						<li><a href="#">Перевозчики</a></li>
						<li><a href="#">Задачи</a></li>
						<li><a href="#">Аналитика</a></li>
						<li><a href="#">Адреса</a></li>
						<li><a href="#">Товары</a></li>
						<li><a href="#">Информация для
							склада</a></li>
						<li><a href="#">Адреса</a></li>
					</ul>
				</nav>
			</header>
			{isMobile ? null
				: <div className="grid" style={{marginTop: 'auto'}}>
					{user ? <UserMenu user={user}/> : <AnonMenu/>}
				</div>
			}
		</div>
	);
};

export default Sidebar;