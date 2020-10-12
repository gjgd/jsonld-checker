import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(() =>
  createStyles({
    loaderButtonWrapper: {
      position: 'relative',
    },
    loaderButtonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  })
);

const LoaderButton: React.FunctionComponent<{
  className?: any;
  onClick: any;
  buttonText: string;
}> = ({ onClick, buttonText, className }) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  return (
    <div className={classes.loaderButtonWrapper}>
      <Button
        className={className}
        color="primary"
        variant="contained"
        disabled={loading}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          setLoading(true);
          onClick(event).finally(() => {
            setLoading(false);
          });
        }}
      >
        {buttonText}
      </Button>
      {loading && (
        <CircularProgress size={24} className={classes.loaderButtonProgress} />
      )}
    </div>
  );
};

export default LoaderButton;
