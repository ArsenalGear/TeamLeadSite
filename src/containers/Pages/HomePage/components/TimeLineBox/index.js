import Timeline from '@material-ui/lab/Timeline';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import React from 'react';
import PropTypes from 'prop-types';
import { H3 } from '../../../../../components/htmlTags/H3';
import { P } from '../../../../../components/htmlTags/P';
import {
  TimelineDotWrapper,
  TimelineItemBox,
  TimelineOppositeData,
  TimelineWrapper,
} from './styles';
import { Section } from '../../../../../components/htmlSections/Section';
const TimeLineBox = ({ timeLine, id, title }) => (
  <section id={id}>
    <Section title={title}>
      <TimelineWrapper>
        <Timeline position="right">
          {timeLine.map(block => (
            <TimelineItemBox key={block.interval}>
              <TimelineOppositeData>{block.interval}</TimelineOppositeData>
              <TimelineSeparator>
                <TimelineDotWrapper>{block.icon}</TimelineDotWrapper>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <H3>{block.company}</H3>
                {block.responsibilities.map(item => (
                  <P key={item}>{item}</P>
                ))}
              </TimelineContent>
            </TimelineItemBox>
          ))}
        </Timeline>
      </TimelineWrapper>
    </Section>
  </section>
);

TimeLineBox.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  timeLine: PropTypes.array,
};

export { TimeLineBox };
