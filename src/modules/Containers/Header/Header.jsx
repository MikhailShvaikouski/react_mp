import React from 'react';
import styles from './Header.module.css';

import {
  Button,
  Search,
} from '../../Components';

// eslint-disable-next-line
const addMovieClick = () => alert('+ ADD MOVIE');

const Header = () => (
  <div className={styles.header}>
    <span className={styles.topHeader}>
      <p className={styles.appName}>
        <strong>netflix</strong>
        roulette
      </p>
      <Button
        className={styles.btn}
        tittle="+ ADD MOVIE"
        onClick={addMovieClick}
      />
    </span>
    <h1 className={styles.heading}>FIND YOUR MOVIE</h1>
    <Search />
  </div>
);

export default Header;
