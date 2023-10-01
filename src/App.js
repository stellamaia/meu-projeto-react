import React from 'react';
import './App.css';

//configuraçao router

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './TodoList';
import UseEffectExample from './UseEffectExample';


function App() {
  return (
    
    <Router>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/use-effect">UseEffect</Link></li>
      </ul> */}
      {/* Switch é onde vou definir as rotas */}
      <Routes>
      <Route path="/" element={<TodoList/>}></Route>
        <Route path="/use-effect" element={<UseEffectExample/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;