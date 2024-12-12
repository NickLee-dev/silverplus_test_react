// src/pages/Home.js
import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import background from '../assets/images/game/other/background.png';

const Home = () => {
  return (
    <div>
      <Link to="/game" className="startButton">
        맞고시작
      </Link>
    </div>
  );
};

export default Home;
