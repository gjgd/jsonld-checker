import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
}));

const JsonLdPlaygroundLink: React.FunctionComponent<{ value: string }> = ({
  value,
}) => {
  const classes = useStyles();
  const encodedValue = encodeURIComponent(value);
  return (
    <div className={classes.wrapper}>
      <Button
        color="primary"
        variant="contained"
        href={`https://json-ld.org/playground/#json-ld=${encodedValue}`}
        target="_blank"
        rel="noopener"
      >
        Open in JSON-LD Playground
      </Button>
    </div>
  );
};

export default JsonLdPlaygroundLink;
