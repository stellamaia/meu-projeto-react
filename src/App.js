import React from 'react';
import './App.css';

//configuraçao router

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UseState from './UseState';
import UseEffectExample from './UseEffectExample';
import { UseContext } from './UseContext';

function App() {
  return (
    
    <Router>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/use-effect">UseEffect</Link></li>
      </ul> */}
      {/* Switch é onde vou definir as rotas */}
      <Routes>
      <Route path="/" element={<UseState/>}></Route>
      <Route path="/use-effect" element={<UseEffectExample/>}></Route>
      <Route path="/use-context" element={<UseContext/>}></Route>

      </Routes>
    </Router>

  );
}

export default App;