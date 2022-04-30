import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu } from './components/Menu';
import { Content } from './components/Content';
import RichTextEditor from './components/RichTextEditor';


function App() {
  return (
    <div className='App'>
      <div style={{width: '100%', maxWidth: '1440px'}}>
        <Menu/>
        {/* <Content/> */}
        <RichTextEditor/>
      </div>
    </div>
  );
}

export default App;
