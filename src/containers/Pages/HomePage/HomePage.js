import React from 'react';
import { Grid } from '@material-ui/core';
import { P } from '../../../components/htmlTags/P';

const HomePage = () => {
  // const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
  //
  // React.useEffect(() => {
  //   resizeHandler();
  //   window.addEventListener('resize', resizeHandler);
  // }, []);
  const test = 1;
  return (
    <Grid container>
      <Grid item xs={4}/>
      <Grid item xs={8}>
        <P>это тело страницы</P>
      </Grid>
    </Grid>
  );
}

export {HomePage};
