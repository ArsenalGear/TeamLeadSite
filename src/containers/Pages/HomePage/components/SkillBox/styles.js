import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

export const SkillsWrapper = withStyles(theme => ({
  root: {
    marginTop: '1rem',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);

export const SkillsBlock = withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: '1rem',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);

export const SkillName = withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);

export const SkillsBlockWrapper = withStyles(theme => ({
  root: {
    width: '48%',
    marginBottom: '1rem',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);

export const BorderLinearProgress = withStyles((theme) => ({
  root: {
    width: '100%',
    height: 20,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: props => `${props.color}`,
  },
}))(LinearProgress);
