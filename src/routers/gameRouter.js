import React from 'react';
import { Route } from 'react-router-dom';
import StartGame from '../pages/games/StartGame';

const gameRouter = [<Route key="/game" path="/game" element={<StartGame />} />];

export default gameRouter;
