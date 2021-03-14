import React from 'react';
import styles from './Search.module.css';

import Button from '../Button/Button';

// eslint-disable-next-line
const searchClick = () => alert('SEARCH');

const Search = () => (
  <span className={styles.searchWrapper}>
    <p className={styles.heading}>FIND YOUR MOVIE</p>
    <span className={styles.search}>
      <input placeholder="What do you want to watch?" />
      <Button
        tittle="SEARCH"
        onClick={searchClick}
      />
    </span>
  </span>
);

export default Search;
