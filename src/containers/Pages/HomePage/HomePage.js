import React from 'react';
import { Grid } from '@material-ui/core';
import { MainWrapper } from '../../../components/htmlSections/Main/styles';
import { TimeLineBox } from './components/TimeLineBox';
import { skills, timeLineData } from './constants';
import { Skills } from './components/SkillBox';
import { AboutMe } from './components/AboutMeBox';

const HomePage = () => {
  // const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
  //
  // React.useEffect(() => {
  //   resizeHandler();
  //   window.addEventListener('resize', resizeHandler);
  // }, []);

  return (
    <Grid container>
      <Grid item xs={4}/>
      <Grid item xs={8}>
        <MainWrapper>
          {timeLineData.map((block)=>(
            <TimeLineBox
              key={block.title}
              title={block.title}
              icon={block.icon}
              timeLine={block.timeLine}
            />
          ))}
          <AboutMe/>
          <Skills skills={skills} />
        </MainWrapper>
      </Grid>
    </Grid>
  );
}

export {HomePage};
