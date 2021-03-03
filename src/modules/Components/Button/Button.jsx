import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, tittle, onClick }) => (
  <>
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      {tittle}
    </button>
  </>
);

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  className: PropTypes.string,
  tittle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
