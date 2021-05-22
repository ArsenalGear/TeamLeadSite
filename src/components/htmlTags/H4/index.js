import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './styles';

const H4 = ({ children, ...props }) => (
  <HeaderWrapper variant="h4" className={` ${props.className}`} {...props}>
    {children}
  </HeaderWrapper>
);

H4.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export {H4};
