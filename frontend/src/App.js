import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import './App.css';
import HomePage from './screens/HomePage';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element ={<HomePage/>} exact></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
