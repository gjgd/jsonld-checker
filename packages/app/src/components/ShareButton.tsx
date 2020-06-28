import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import LoaderButton from './LoaderButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
  })
);

const ShareButton: React.FunctionComponent = () => {
  const classes = useStyles();
  const [tinyUrl, setTinyUrl] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(tinyUrl) && Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const createShortUrl = () => {
    const url = `${window.location.toString()}`;
    const tinyUrlService = 'https://tiny.gjgd.fr/';
    return fetch(tinyUrlService, {
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
        const shortUrl = data.shortUrl || '';
        setTinyUrl(shortUrl);
        return shortUrl;
      });
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setTinyUrl('');
    return createShortUrl();
  };

  return (
    <div className={classes.wrapper}>
      <LoaderButton onClick={handleClick} buttonText="Share" />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography className={classes.typography}>
          <span>Copy the URL or use this short one:</span>
          <br />
          <a
            className={classes.wrapper}
            href={`https://${tinyUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {tinyUrl}
          </a>
        </Typography>
      </Popover>
    </div>
  );
};

export default ShareButton;
