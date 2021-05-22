import React from 'react';
import PropTypes from 'prop-types';
import { ParagraphWrapper } from './styles';

const P = ({ children, variant="body1", ...props }) => (
  <ParagraphWrapper variant={variant} className={` ${props.className}`} {...props}>
    {children}
  </ParagraphWrapper>
);

P.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export {P};
