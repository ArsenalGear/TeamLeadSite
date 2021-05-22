import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './styles';

const H3 = ({ children, ...props }) => (
  <HeaderWrapper variant="h3" className={` ${props.className}`} {...props}>
    {children}
  </HeaderWrapper>
);

H3.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export {H3};
