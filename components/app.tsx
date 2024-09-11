import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Menu from './menu';
import FruitList from './fruitList';
import FruitInfo from './fruitInfo';

export default function () {
  return (
    <>
      <BrowserRouter basename='/fruit'>
        <Routes>
          <Route path='/' element={<Menu />}>
            <Route index element={<div>plase Press one Fruit</div>} />
            <Route path=':fruitName' element={<FruitList />} />
            <Route path=':fruitName/:fruitId' element={<FruitInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
