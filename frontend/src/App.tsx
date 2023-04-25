import React from 'react';
import Sidebar from './containers/Sidebar/Sidebar';
import Header from './containers/Header/Header';
import './App.scss'
import './App.normalize.sass'
import Table from './containers/Table/Table';

function App() {
  return (
    <div className="App" style={{margin: 0}}>
      <div className='sidebar-div'>
        <Sidebar/>
      </div>
      <div className='header-div'>
        <Header/>
        <Table/>
      </div>
    </div>
  );
}

export default App;