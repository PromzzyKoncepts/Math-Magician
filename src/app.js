import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './Pages/Home';
import Quote from './Pages/Quotes';
import NavBar from './Pages/NavBar';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/calculator" exact element={<Calculator />} />
      <Route path="/quote" exact element={<Quote />} />
    </Routes>
  </>
);

export default App;
