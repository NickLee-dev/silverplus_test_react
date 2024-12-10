// src/pages/Home.js
import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className={styles}>Home</h1>
      <Link to="/game">맞고시작</Link>
    </div>
  );
};

export default Home;
