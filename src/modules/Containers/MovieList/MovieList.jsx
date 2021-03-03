import React from 'react';
import styles from './MovieList.module.css';

import { Movie } from '../../Components';

const listOfItems = [
  {
    id: 1,
    title: 'Film 1',
    genre: ['Action', 'Adventure'],
    year: 1987,
  },
  {
    id: 2,
    title: 'Film 2',
    genre: ['Drama', 'Music'],
    year: 2003,
  },
  {
    id: 3,
    title: 'Film 3',
    genre: ['Oscar'],
    year: 2003,
  },
  {
    id: 4,
    title: 'Film 4',
    genre: ['Adventure'],
    year: 2003,
  },
  {
    id: 5,
    title: 'Film 5',
    genre: ['Action'],
    year: 2003,
  },
];

const MovieList = () => (
  <div className={styles.movieList}>
    {
      listOfItems.map((movie) => (
        <Movie
          title={movie.title}
          genre={movie.genre}
          year={movie.year}
          key={movie.id}
        />
      ))
    }
  </div>
);

export default MovieList;
