import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './styles';

const H3 = ({ children, className }) => (
  <HeaderWrapper variant="h3" className={className}>
    {children}
  </HeaderWrapper>
);

H3.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export {H3};
