import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './styles';

const H2 = ({ children, className, fonttype }) => (
  <HeaderWrapper fonttype={fonttype} variant="h2" className={className}>
    {children}
  </HeaderWrapper>
);

H2.propTypes = {
  fonttype: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export { H2 };
