import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Title = ({ margin }) => (
  <h1 className="bookstore-cms-title" style={{ margin }}>Bookstore CMS</h1>
);

Title.propTypes = {
  margin: PropTypes.string,
};

Title.defaultProps = {
  margin: '6px 47px 2px 0',
};

export default Title;
