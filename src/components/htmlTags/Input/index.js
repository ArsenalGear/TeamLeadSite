import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { TextFieldWrapper } from './styles';

const TextField = ({ label, value, className, ...props }) => (
  <TextFieldWrapper value={value} label={label} className={className} {...props} />
);

TextField.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  formikOnChange: PropTypes.func,
};

export const Input = memo(TextField);
