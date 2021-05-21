import React from 'react';
import PropTypes from 'prop-types';
import { ParagraphWrapper } from './styles';

const P = ({ children, ...props }) => (
  <ParagraphWrapper className={` ${props.className}`} {...props}>
    {children}
  </ParagraphWrapper>
);

P.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default P;
