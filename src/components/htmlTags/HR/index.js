import React from 'react';
import PropTypes from 'prop-types';
import { HRWrapper } from './styles';

const HR = ({ className }) => (
  <HRWrapper className={className}/>
);

HR.propTypes = {
  className: PropTypes.string,
};

export {HR};
