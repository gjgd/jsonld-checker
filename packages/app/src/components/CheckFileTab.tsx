/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Alert, AlertTitle } from '@material-ui/lab';
import { check, getAllJsonLdFromString } from 'jsonld-checker';
import React from 'react';
import CheckStatus from '../models/CheckStatus';
import ResultTable from './ResultTable';

const defaultUrl =
  'https://raw.githubusercontent.com/transmute-industries/universal-wallet/master/docs/index.html';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  progressBar: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const CheckFileTab: React.FunctionComponent<{}> = () => {
  const [url, setUrl] = React.useState(defaultUrl);
  const [docs, setDocs] = React.useState<Array<any>>([]);
  const [total, setTotal] = React.useState<number>(0);

  const onClickCheck = async () => {
    const res = await fetch(url);
    const text = await res.text();
    const jsonldObjects: Array<any> = await getAllJsonLdFromString(text);
    setTotal(jsonldObjects.length);
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    const processed = [];
    for (let i = 0; i < jsonldObjects.length; i += 1) {
      const object = jsonldObjects[i];
      await sleep(200);
      const result = await check(object);
      processed.push({
        object,
        status: result.ok ? CheckStatus.PASSED : CheckStatus.FAILED,
        error: result.error,
        result,
      });
      setDocs([...processed]);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const classes = useStyles();

  const errors = docs.filter((doc) => doc.status === CheckStatus.FAILED);
  const hasErrors = errors.length > 0;
  const errorSentence = `Found ${errors.length} JSON-LD errors`;

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
      {hasErrors ? (
        <Alert severity="error">
          <AlertTitle>{errorSentence}</AlertTitle>
          Check details below
        </Alert>
      ) : (
        <></>
      )}
      {total > 0 ? (
        <div className={classes.progressBar}>
          <LinearProgress
            variant="determinate"
            value={(100 * docs.length) / total}
          />
        </div>
      ) : (
        <></>
      )}
      <ResultTable results={docs} />
    </div>
  );
};

export default CheckFileTab;
