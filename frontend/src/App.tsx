import React from 'react';
import Sidebar from './containers/Sidebar/Sidebar';
import Header from './containers/Header/Header';
import './App.scss'

function App() {
  return (
    <div className="App" style={{margin: 0}}>
      <div className='sidebar-div'>
        <Sidebar/>
      </div>
      <div className='header-div'>
        <Header/>
      </div>
    </div>
  );
}

export default App;