import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { updateQueryString } from '../utils';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
}));

const ShareButton: React.FunctionComponent<{ value: string }> = ({ value }) => {
  const classes = useStyles();
  const encodedValue = encodeURIComponent(value);
  return (
    <div className={classes.wrapper}>
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          updateQueryString('json', encodedValue);
        }}
      >
        Share
      </Button>
    </div>
  );
};

export default ShareButton;
