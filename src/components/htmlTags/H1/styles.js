import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const HeaderWrapper = withStyles(theme => ({
  root: {
    '&.user-name': {
      color: theme.palette.secondary.main,
    },
  },
}))(Typography);

// export const CustomColvirInputLabel = withStyles(theme => ({
//   root: {
//     color: theme.palette.secondary.main,
//     position: 'relative',
//     top: 'auto',
//     transform: 'none',
//     width: props => (props.usewithui === 'yes' ? theme.spacing(28) : theme.spacing(25.95)),
//     marginRight: theme.spacing(1.8),
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     height: 36,
//     textAlign: 'right',
//     [theme.breakpoints.up(1920)]: {
//       height: 56,
//       width: props => (props.usewithui === 'yes' ? theme.spacing(38.5) : theme.spacing(40.5)),
//     },
//   },
// }))(InputLabel);
