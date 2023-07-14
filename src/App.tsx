import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ConvertPage from './pages/ConvertPage';

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
