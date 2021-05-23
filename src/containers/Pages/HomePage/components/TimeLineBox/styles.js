import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

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
