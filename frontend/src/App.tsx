import React from 'react';
import Sidebar from './containers/Sidebar/Sidebar';
import Header from './containers/Header/Header';
import './App.scss';
import './App.normalize.sass';
import Table from './containers/Table/Table';
import {Route, Routes} from 'react-router-dom';
import Login from './features/user/Login';
import Register from './features/user/Register';

function App() {
	return (
		<div className="App" style={{margin: 0}}>

			<Routes>
				<Route path="/" element={<>
					<div className="sidebar-div">
						<Sidebar/>
					</div>
					<div className="header-div">
						<Header/>
						<Table/>
					</div>
				</>}></Route>
				<Route path="/login" element={<Login/>}/>
				<Route path="/register" element={<Register/>}/>
				<Route path="/own-settings" element={<h2>Settings !</h2>}/>
				<Route path='*' element={<h2>Not Found !</h2>}/>
			</Routes>
		</div>
	);
}

export default App;