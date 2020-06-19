import Button from '@material-ui/core/Button';
import { check } from 'jsonld-checker';
import React from 'react';
import JsonLdCheckResult from '../models/JsonLDCheckResult';
import CheckResult from './CheckResult';
import JsonEditor from './JsonEditor';
import JsonLdPlaygroundButton from './JsonLdPlaygroundButton';

const defaultValue = JSON.stringify(defaultValueJson, null, 2);

const CheckJsonTab: React.FunctionComponent<{}> = () => {
  const [jsonValue, setJsonValue] = React.useState(defaultValue);
  const [result, setResult] = React.useState<JsonLdCheckResult>();

  const onChange = (value: string) => {
    setResult(undefined);
    setJsonValue(value);
  };

  const onClickCheck = async () => {
    const res = await check(jsonValue);
    setResult(res);
  };

  return (
    <>
      <Button variant="contained" onClick={onClickCheck}>
        Check
      </Button>
      <JsonLdPlaygroundButton value={jsonValue} />
      <CheckResult result={result} />
      <JsonEditor onChange={onChange} value={jsonValue} />
    </>
  );
};

export default CheckJsonTab;
