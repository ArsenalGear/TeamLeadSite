import React from 'react';
import PropTypes from 'prop-types';
import { MainWrapper } from './styles';

const Main = ({ children }) => (
  <MainWrapper>
    {children}
  </MainWrapper>
);

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export {Main};
