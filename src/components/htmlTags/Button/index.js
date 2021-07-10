import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './styles';

const Button = ({ children, variant = 'body1', className }) => (
  <ButtonWrapper variant={variant} className={className}>
    {children}
  </ButtonWrapper>
);

Button.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export { Button };
