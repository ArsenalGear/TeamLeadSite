import React from 'react';
import PropTypes from 'prop-types';
import { ParagraphWrapper } from './styles';

const P = ({ children, variant = 'body1', className }) => (
  <ParagraphWrapper variant={variant} className={className}>
    {children}
  </ParagraphWrapper>
);

P.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export { P };
