import React from 'react';
import PropTypes from 'prop-types';
import { SidebarWrapper } from './styles';

const Sidebar = ({ children }) => <SidebarWrapper>{children}</SidebarWrapper>;

Sidebar.propTypes = {
  children: PropTypes.node,
};

export { Sidebar };
