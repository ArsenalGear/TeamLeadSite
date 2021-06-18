import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './styles';

const H1 = ({ children, className, fontType }) => (
  <HeaderWrapper fontType={fontType} variant="h1" className={className}>
    {children}
  </HeaderWrapper>
);

H1.propTypes = {
  fontType: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export { H1 };
