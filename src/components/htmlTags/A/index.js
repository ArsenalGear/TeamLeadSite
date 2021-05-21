import React from 'react';
import PropTypes from 'prop-types';
import { ParagraphWrapper } from './styles';

const Paragraph = ({ children, ...props }) => (
  <ParagraphWrapper className={` ${props.className}`} {...props}>
    {children}
  </ParagraphWrapper>
);

Paragraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Paragraph;
