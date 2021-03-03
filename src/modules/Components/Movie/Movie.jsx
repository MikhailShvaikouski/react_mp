import React from 'react';
import PropTypes from 'prop-types';

import styles from './Movie.module.css';

const Movie = ({ title, genre, year }) => (
  <div className={styles.movie}>
    <span>{title}</span>
    <ul>
      {genre.map(
        (item) => (
          <li key={item}>{item}</li>
        ),
      )}
    </ul>
    <span>{year}</span>
  </div>
);

Movie.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.array,
  year: PropTypes.number,
};

Movie.defaultProps = {
  title: 'Title placeholder',
  genre: [],
  year: 1111,
};

export default Movie;
