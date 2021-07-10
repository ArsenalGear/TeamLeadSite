import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { H1 } from '../../htmlTags/H1';
import { HR } from '../../htmlTags/HR';
import { H2 } from '../../htmlTags/H2';
import { Input } from '../../htmlTags/Input';

const SectionMemo = ({ createBOFormik }) => {
  console.log('createBOFormik1', createBOFormik);
  const { setFieldValue, getFieldProps, values } = createBOFormik;
  return (
    <Box>
      <Input
        id="PST_RPM_TP_NM"
        name="PST_RPM_TP_NM"
        label="Standard"
        {...getFieldProps('PST_RPM_TP_NM')}
      />
      <Input id="PST_RPM_TP" name="PST_RPM_TP" label="test" {...getFieldProps('PST_RPM_TP')} />
    </Box>
  );
};

SectionMemo.propTypes = {
  titleType: PropTypes.string,
  title: PropTypes.string,
  createBOFormik: PropTypes.object,
};

export const Section = memo(SectionMemo);
