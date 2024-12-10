// src/routers/router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import gameRouter from './gameRouter';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {gameRouter}
    </Routes>
  );
};

export default AppRouter;
