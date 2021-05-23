import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineItem from '@material-ui/lab/TimelineItem';

export const TimelineWrapper = withStyles(theme => ({
  root: {
    marginTop: '1rem',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);

export const TimelineOppositeData = withStyles(theme => ({
  root: {
    flex: 0.15,
    marginTop: 18,
    padding: '0 16px 0 0',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up(1920)]: {},
  },
}))(TimelineOppositeContent);

export const TimelineItemBox = withStyles(theme => ({
  root: {
    color: theme.typography.h4.color,
    [theme.breakpoints.up(1920)]: {},
  },
}))(TimelineItem);
