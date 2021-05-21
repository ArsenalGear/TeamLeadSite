import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './styles';

const Header = ({ children, ...props }) => (
  <HeaderWrapper {...props}>
    {children}
  </HeaderWrapper>
);

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
