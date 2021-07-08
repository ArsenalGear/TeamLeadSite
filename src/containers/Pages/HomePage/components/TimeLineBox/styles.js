import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineDot from '@material-ui/lab/TimelineDot';

export const TimelineWrapper = withStyles(theme => ({
  root: {
    marginTop: '1rem',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);

export const TimelineDotWrapper = withStyles(theme => ({
  root: {
    margin: 0,
    padding: 0,
    background: 'unset',
    color: theme.palette.primary.white,
    fontSize: '4rem',
    [theme.breakpoints.up(1920)]: {},
  },
}))(TimelineDot);

export const TimelineOppositeData = withStyles(theme => ({
  root: {
    flex: 0.15,
    marginTop: 18,
    padding: '0 1rem 0 0',
    whiteSpace: 'nowrap',
    color: theme.palette.primary.white,
    [theme.breakpoints.up(1920)]: {},
  },
}))(TimelineOppositeContent);

export const TimelineItemBox = withStyles(theme => ({
  root: {
    [theme.breakpoints.up(1920)]: {},
  },
}))(TimelineItem);
