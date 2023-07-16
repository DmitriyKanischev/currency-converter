import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ConvertPage from './pages/ConvertPage';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/converter' element={<ConvertPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </>
  );
}

export default App;
