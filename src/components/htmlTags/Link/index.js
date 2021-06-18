import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { useStyles } from './styles';

const ScrollLink = ({ children, linkTo }) => {
  const classes = useStyles();
  return (
    <Link
      className={classes.scrollLink}
      activeClass="active"
      to={linkTo}
      spy
      smooth
      duration={750}
      offset={-200}
    >
      {children}
    </Link>
  );
};

ScrollLink.propTypes = {
  linkTo: PropTypes.string,
  children: PropTypes.node,
};

export { ScrollLink };
