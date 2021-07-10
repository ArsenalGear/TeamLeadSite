import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { TimeLineBox } from './components/TimeLineBox';
import { timeLineData } from './constants';
import { getMenuData } from './store/actions';
import { Section } from '../../../components/htmlSections/Section';

const HomePage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getMenuData());
  }, [dispatch]);

  const createBOFormik = useFormik({
    initialValues: { PST_RPM_TP_NM: '', PST_RPM_TP: '' },
    onSubmit: values => {
      // console.log('values', values);
    },
  });

  return (
    <Grid container>
      <section id="skills">
        <Section createBOFormik={createBOFormik} title="Скилы и экспертиза" />
      </section>
    </Grid>
  );
};

export { HomePage };
