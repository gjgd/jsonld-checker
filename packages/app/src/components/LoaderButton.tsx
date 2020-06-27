import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    progress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  })
);

const ShareButton: React.FunctionComponent<{
  onClick: () => Promise<any>;
  buttonText: string;
}> = ({ onClick, buttonText }) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  return (
    <div className={classes.wrapper}>
      <Button
        color="primary"
        variant="contained"
        disabled={loading}
        onClick={async () => {
          setLoading(true);
          onClick().finally(() => {
            setLoading(false);
          });
        }}
      >
        {buttonText}
      </Button>
      {loading && <CircularProgress size={24} className={classes.progress} />}
    </div>
  );
};

export default ShareButton;
