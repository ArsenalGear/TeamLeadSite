import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  scrollLink: {
    marginRight: '1rem',
    fontSize: '1.5rem',
    fontWeight: '500',
    '&.active': {
      color: '#61dbfb',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
