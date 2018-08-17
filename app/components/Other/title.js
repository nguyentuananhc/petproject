import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Title = ({ value, desc, un }) => (
  <Helmet>
    <title>
      {un ? `(${un})` : ''} {`${value}`} • Instagram
    </title>
    <meta name="description" content={desc} />
  </Helmet>
);

Title.defaultProps = {
  value: '',
  desc:
    "Instagram lets you capture, follow, like and share world's moments in a better way and tell your story with photos, messages, posts and everything in between!!",
};

Title.propTypes = {
  value: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export default Title;
