import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
}));

const ShareButton: React.FunctionComponent = () => {
  const classes = useStyles();
  const [tinyUrl, setTinyUrl] = React.useState('');
  return (
    <div className={classes.wrapper}>
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          const url = `${window.location.toString()}`;
          const tinyUrlService = 'https://tiny.gjgd.fr/';
          fetch(tinyUrlService, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ url }),
          })
            .then((res) => {
              if (res.ok) {
                return res.json();
              }
              throw new Error();
            })
            .then((data) => {
              setTinyUrl(data.shortUrl || '');
            });
        }}
      >
        Share
      </Button>
      <a
        className={classes.wrapper}
        href={`https://${tinyUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {tinyUrl}
      </a>
    </div>
  );
};

export default ShareButton;
