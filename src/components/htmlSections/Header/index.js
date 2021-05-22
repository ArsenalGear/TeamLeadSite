import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './styles';

const Header = ({ children }) => (
  <HeaderWrapper>
    {children}
  </HeaderWrapper>
);

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export {Header};
