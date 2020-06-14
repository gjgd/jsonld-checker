import Button from '@material-ui/core/Button';
import { check } from 'jsonld-checker-lib';
import React from 'react';
import JsonLdCheckResult from '../models/JsonLDCheckResult';
import CheckResult from './CheckResult';
import JsonEditor from './JsonEditor';

const defaultValue = JSON.stringify(
  {
    '@context': [
      'https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json',
    ],
    id: 'did:example:123456789abcdefghi',
    type: 'Person',
    name: 'John Smith',
    image: 'https://via.placeholder.com/150',
    description: 'Professional software developer for Acme Corp.',
    tags: ['professional', 'person'],
    correlation: ['4058a72a-9523-11ea-bb37-0242ac130002'],
  },
  null,
  2
);

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
      <CheckResult result={result} />
      <JsonEditor onChange={onChange} value={jsonValue} />
    </>
  );
};

export default CheckJsonTab;
