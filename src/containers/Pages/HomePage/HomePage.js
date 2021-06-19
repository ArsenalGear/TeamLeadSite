import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { TimeLineBox } from './components/TimeLineBox';
import { skills, timeLineData } from './constants';
import { Skills } from './components/SkillBox';
import { getMenuData } from './store/actions';
import { Section } from '../../../components/htmlSections/Section';

const HomePage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getMenuData());
  }, [dispatch]);

  return (
    <Grid container>
      <section id="skills">
        <Section title="Скилы и экспертиза">
          <Skills skills={skills} />
        </Section>
      </section>
      {timeLineData.map(block => (
        <TimeLineBox
          key={block.title}
          title={block.title}
          timeLine={block.timeLine}
          id={block.id}
        />
      ))}
    </Grid>
  );
};

export { HomePage };
