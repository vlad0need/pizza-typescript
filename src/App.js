import './scss/app.scss';
import Header from './components/Header';
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import NotFound from "./pages/NotFound"
import { Routes, Route } from 'react-router-dom';

import React from 'react';

function App() {
  

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<NotFound />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
