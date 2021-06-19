import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './styles';

const H1 = ({ children, className, fonttype }) => (
  <HeaderWrapper fonttype={fonttype} variant="h1" className={className}>
    {children}
  </HeaderWrapper>
);

H1.propTypes = {
  fonttype: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export { H1 };
