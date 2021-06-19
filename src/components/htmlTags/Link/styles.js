import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  scrollLink: {
    marginRight: '1rem',
    fontSize: '1.5rem',
    fontWeight: '500',
    '&.active': {
      color: theme.palette.primary.blue,
    },
    '&:hover': {
      cursor: 'pointer',
    },
    [theme.breakpoints.down(1280)]: {
      fontSize: '14px',
    },
  },
}));
