import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { H1 } from '../../htmlTags/H1';
import { HR } from '../../htmlTags/HR';
import { H2 } from '../../htmlTags/H2';

const Section = ({ children, title, titleType }) => (
  <Box>
    {titleType === 'h1' ? (
      <H1 fonttype="PermanentMarker">{title}</H1>
    ) : (
      <H2 fonttype="PermanentMarker">{title}</H2>
    )}
    <HR />
    {children}
  </Box>
);

Section.propTypes = {
  titleType: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export { Section };
