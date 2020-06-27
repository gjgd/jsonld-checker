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
    // TODO duplicated code with CheckJsonButton progress
    shareProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  })
);

const ShareButton: React.FunctionComponent = () => {
  const classes = useStyles();
  const [tinyUrl, setTinyUrl] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  return (
    <div className={classes.wrapper}>
      <Button
        color="primary"
        variant="contained"
        disabled={loading}
        onClick={() => {
          const url = `${window.location.toString()}`;
          const tinyUrlService = 'https://tiny.gjgd.fr/';
          setLoading(true);
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
            })
            .finally(() => {
              setLoading(false);
            });
        }}
      >
        Share
      </Button>
      {loading && (
        <CircularProgress size={24} className={classes.shareProgress} />
      )}
      {tinyUrl && (
        <span className={classes.wrapper}>
          <span>Copy the URL or use this short one:</span>
          <a
            className={classes.wrapper}
            href={`https://${tinyUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {tinyUrl}
          </a>
        </span>
      )}
    </div>
  );
};

export default ShareButton;
