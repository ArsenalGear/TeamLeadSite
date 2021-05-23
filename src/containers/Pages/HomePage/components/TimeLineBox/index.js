import { H3 } from '../../../../../components/htmlTags/H3';
import { HR } from '../../../../../components/htmlTags/HR';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import { H4 } from '../../../../../components/htmlTags/H4';
import { P } from '../../../../../components/htmlTags/P';
import React from 'react';
import { TimelineItemBox, TimelineOppositeData, TimelineWrapper } from './styles';
import PropTypes from 'prop-types';
const TimeLineBox = ({title, timeLine}) => (
  <TimelineWrapper>
    <H3>{title}</H3>
    <HR/>
    <Timeline position="right">
      {timeLine.map((block)=>(
        <TimelineItemBox key={block.interval}>
          <TimelineOppositeData>{block.interval}</TimelineOppositeData>
          <TimelineSeparator>
            <TimelineDot>
              {block.icon}
            </TimelineDot>
            <TimelineConnector/>
          </TimelineSeparator>
          <TimelineContent>
            <H4>{block.company}</H4>
            {block.responsibilities.map((item)=>(
              <P key={item}>{item}</P>
            ))}
          </TimelineContent>
        </TimelineItemBox>
      ))}
    </Timeline>
  </TimelineWrapper>
)

TimeLineBox.propTypes = {
  title: PropTypes.string,
  timeLine: PropTypes.array,
};

export {TimeLineBox};