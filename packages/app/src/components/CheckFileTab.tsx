/* eslint-disable no-restricted-syntax */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getAllJsonLdFromString } from 'jsonld-checker-lib';
import ResultTable from './ResultTable';
import CheckStatus from '../models/CheckStatus';

const defaultUrl =
  'https://raw.githubusercontent.com/transmute-industries/universal-wallet/master/docs/index.html';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const CheckFileTab: React.FunctionComponent<{}> = () => {
  const [url, setUrl] = React.useState(defaultUrl);
  const [docs, setDocs] = React.useState<Array<Object>>([]);

  const onClickCheck = async () => {
    const res = await fetch(url);
    const text = await res.text();
    const jsonldObjects: Array<Object> = await getAllJsonLdFromString(text);
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    const processed = [];
    for (let i = 0; i < jsonldObjects.length; i += 1) {
      const object = jsonldObjects[i];
      processed.push({
        object,
        status: CheckStatus.PENDING,
      });
      setDocs([...processed]);
      // eslint-disable-next-line no-await-in-loop
      await sleep(500);
      processed[i].status = CheckStatus.PASSED;
      setDocs([...processed]);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={onClickCheck}>
        Check
      </Button>
      <TextField
        label="Enter the URL to a file"
        onChange={onChange}
        defaultValue={defaultUrl}
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
      />
      <ResultTable results={docs} />
    </div>
  );
};

export default CheckFileTab;
