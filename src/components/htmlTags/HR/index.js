import React from 'react';
import PropTypes from 'prop-types';
import { HRWrapper } from './styles';

const HR = ({ children, ...props }) => (
  <HRWrapper className={` ${props.className}`} {...props}/>
);

HR.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export {HR};
