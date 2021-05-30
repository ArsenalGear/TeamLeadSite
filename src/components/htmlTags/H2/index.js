import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './styles';

const H2 = ({ children, className }) => (
  <HeaderWrapper variant="h2" className={className}>
    {children}
  </HeaderWrapper>
);

H2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export { H2 };
