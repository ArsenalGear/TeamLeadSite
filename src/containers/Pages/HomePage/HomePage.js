import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { MainWrapper } from '../../../components/htmlSections/Main/styles';
import { TimeLineBox } from './components/TimeLineBox';
import { skills, timeLineData } from './constants';
import { Skills } from './components/SkillBox';
import { AboutMe } from './components/AboutMeBox';
import { getSexesDictionary } from './store/actions';
import { sexListSelector } from './store/selectors';

const HomePage = () => {
  // const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
  const dispatch = useDispatch();
  const sexList = useSelector(sexListSelector());
  React.useEffect(() => {
    dispatch(getSexesDictionary());
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item lg={4} xs={false} />
      <Grid item lg={8} xs={12}>
        {/* {sexList.map(e => ( */}
        {/*  <p key={e.title}>{e.title}</p> */}
        {/* ))} */}
        <MainWrapper>
          {timeLineData.map(block => (
            <TimeLineBox
              key={block.title}
              title={block.title}
              icon={block.icon}
              timeLine={block.timeLine}
            />
          ))}
          <AboutMe />
          <Skills skills={skills} />
        </MainWrapper>
      </Grid>
    </Grid>
  );
};

export { HomePage };
