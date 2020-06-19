import React from 'react';
import JsonEditor from './JsonEditor';
import JsonLdPlaygroundButton from './JsonLdPlaygroundButton';
import CheckJsonButton from './CheckJsonButton';
import defaultValueJson from '../data/defaultValue.json';
import CheckResult from './CheckResult';
import JsonLdCheckResult from '../models/JsonLDCheckResult';

const defaultValue = JSON.stringify(defaultValueJson, null, 2);

const CheckJsonTab: React.FunctionComponent<{}> = () => {
  const [jsonValue, setJsonValue] = React.useState(defaultValue);
  const [result, setResult] = React.useState<JsonLdCheckResult>();

  const onChange = (value: string) => {
    setResult(undefined);
    setJsonValue(value);
  };

  return (
    <>
      <CheckJsonButton value={jsonValue} setResult={setResult} />
      <JsonLdPlaygroundButton value={jsonValue} />
      <CheckResult result={result} />
      <JsonEditor onChange={onChange} value={jsonValue} />
    </>
  );
};

export default CheckJsonTab;
