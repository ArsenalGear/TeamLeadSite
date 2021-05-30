import Timeline from '@material-ui/lab/Timeline';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import React from 'react';
import PropTypes from 'prop-types';
import { H4 } from '../../../../../components/htmlTags/H4';
import { P } from '../../../../../components/htmlTags/P';
import {
  TimelineItemBox,
  TimelineOppositeData,
  TimelineWrapper,
} from './styles';
import { HR } from '../../../../../components/htmlTags/HR';
import { H3 } from '../../../../../components/htmlTags/H3';
const TimeLineBox = ({ title, timeLine }) => (
  <TimelineWrapper>
    <H3>{title}</H3>
    <HR />
    <Timeline position="right">
      {timeLine.map(block => (
        <TimelineItemBox key={block.interval}>
          <TimelineOppositeData>{block.interval}</TimelineOppositeData>
          <TimelineSeparator>
            <TimelineDot>{block.icon}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <H4>{block.company}</H4>
            {block.responsibilities.map(item => (
              <P key={item}>{item}</P>
            ))}
          </TimelineContent>
        </TimelineItemBox>
      ))}
    </Timeline>
  </TimelineWrapper>
);

TimeLineBox.propTypes = {
  title: PropTypes.string,
  timeLine: PropTypes.array,
};

export { TimeLineBox };
