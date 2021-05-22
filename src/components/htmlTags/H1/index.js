import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './styles';

const H1 = ({ children, ...props }) => (
  <HeaderWrapper variant="h1" className={` ${props.className}`} {...props}>
    {children}
  </HeaderWrapper>
);

H1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export {H1};
