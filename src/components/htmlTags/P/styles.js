import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const ParagraphWrapper = withStyles(theme => ({
  root: {
    '&.description': {},
  },
}))(Typography);
