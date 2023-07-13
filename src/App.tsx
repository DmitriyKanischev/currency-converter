import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ConvertPage from './components/ConvertPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/converter' element={<ConvertPage/>}/>
      </Routes>
    </>
  );
}

export default App;
