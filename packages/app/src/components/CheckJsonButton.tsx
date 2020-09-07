import React from 'react';
import { check } from 'jsonld-checker';
import { green, red } from '@material-ui/core/colors';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import LoaderButton from './LoaderButton';

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
  })
);

const CheckJsonButton: React.FunctionComponent<{
  value: Object;
  setResult: any;
}> = ({ value, setResult }) => {
  const classes = useStyles();
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
    [classes.buttonError]: error,
  });

  const analyzeObject = async () => {
    const res = await check(value);
    setSuccess(res.ok);
    setError(!res.ok);
    setResult(res);
  };

  React.useEffect(() => {
    setSuccess(false);
    setError(false);
  }, [value]);

  return (
    <div className={classes.root}>
      {success}
      {error}
      <div className={classes.wrapper}>
        <LoaderButton
          className={buttonClassname}
          onClick={analyzeObject}
          buttonText="Check"
        />
      </div>
    </div>
  );
};

export default CheckJsonButton;
