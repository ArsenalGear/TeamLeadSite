import React from 'react';
import PropTypes from 'prop-types';
import { SidebarWrapper } from './styles';

const Sidebar = ({ children, ...props }) => (
  <SidebarWrapper {...props}>
    {children}
  </SidebarWrapper>
);

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Sidebar;
