import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));

const JsonLdPlaygroundLink: React.FunctionComponent<{ value: string }> = ({
  value,
}) => {
  const classes = useStyles();
  const encodedValue = encodeURIComponent(value);
  return (
    <>
      <Button
        className={classes.button}
        variant="contained"
        href={`https://json-ld.org/playground/#json-ld=${encodedValue}`}
        target="_blank"
        rel="noopener"
      >Open in JSON-LD Playground</Button>
    </>
  );
};

export default JsonLdPlaygroundLink;
