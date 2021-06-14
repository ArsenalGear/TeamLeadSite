import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './styles';

const Header = ({ children }) => <HeaderWrapper>{children}</HeaderWrapper>;

Header.propTypes = {
  children: PropTypes.node,
};

export { Header };
