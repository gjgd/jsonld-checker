import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CheckResult as JsonLdCheckResult } from 'jsonld-checker';
import JsonEditor from './JsonEditor';
import JsonLdPlaygroundButton from './JsonLdPlaygroundButton';
import CheckJsonButton from './CheckJsonButton';
import defaultValueJson from '../data/defaultValue.json';
import CheckResult from './CheckResult';
import ShareButton from './ShareButton';
import { getQueryParameter } from '../utils';

const defaultValue = JSON.stringify(defaultValueJson, null, 2);

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'flex',
    margin: theme.spacing(1),
  },
  contentWrapper: {
    display: 'table',
    margin: theme.spacing(1),
  },
  checkResult: {
    marginBottom: theme.spacing(2),
  },
}));

const CheckJsonTab: React.FunctionComponent<{}> = () => {
  const classes = useStyles();
  const jsonQueryParameter = getQueryParameter('json');
  let defaultJson: string;
  if (jsonQueryParameter) {
    defaultJson = decodeURIComponent(jsonQueryParameter);
  } else {
    defaultJson = defaultValue;
  }
  const [jsonValue, setJsonValue] = React.useState(defaultJson);
  const [result, setResult] = React.useState<JsonLdCheckResult>();

  const onChange = (value: string) => {
    setResult(undefined);
    setJsonValue(value);
  };

  return (
    <>
      <div className={classes.buttonWrapper}>
        <CheckJsonButton value={jsonValue} setResult={setResult} />
        <JsonLdPlaygroundButton value={jsonValue} />
        <ShareButton value={jsonValue} />
      </div>
      <div className={classes.contentWrapper}>
        <CheckResult className={classes.checkResult} result={result} />
        <JsonEditor onChange={onChange} value={jsonValue} />
      </div>
    </>
  );
};

export default CheckJsonTab;
