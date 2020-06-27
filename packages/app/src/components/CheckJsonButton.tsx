import React from 'react';
import Button from '@material-ui/core/Button';
import { check } from 'jsonld-checker';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green, red } from '@material-ui/core/colors';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { getQueryParameter } from '../utils';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    buttonError: {
      backgroundColor: red[500],
      '&:hover': {
        backgroundColor: red[700],
      },
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  })
);

const CheckJsonButton: React.FunctionComponent<{
  value: Object;
  setResult: any;
}> = ({ value, setResult }) => {
  const analyzeQueryParameter = getQueryParameter('analyze');
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
    [classes.buttonError]: error,
  });

  const analyzeObject = async () => {
    if (!loading) {
      setLoading(true);
      const res = await check(value);
      setSuccess(res.ok);
      setError(!res.ok);
      setResult(res);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (analyzeQueryParameter === '1') {
      analyzeObject();
    }
    // eslint-disable-next-line
  }, [analyzeQueryParameter]);

  React.useEffect(() => {
    setSuccess(false);
    setError(false);
  }, [value]);

  return (
    <div className={classes.root}>
      {success}
      {error}
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={analyzeObject}
        >
          Check
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </div>
  );
};

export default CheckJsonButton;
