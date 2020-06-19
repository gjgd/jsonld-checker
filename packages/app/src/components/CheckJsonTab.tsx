import React from 'react';
import JsonEditor from './JsonEditor';
import JsonLdPlaygroundButton from './JsonLdPlaygroundButton';
import CheckJsonButton from './CheckJsonButton';
import defaultValueJson from '../data/defaultValue.json';

const defaultValue = JSON.stringify(defaultValueJson, null, 2);

const CheckJsonTab: React.FunctionComponent<{}> = () => {
  const [jsonValue, setJsonValue] = React.useState(defaultValue);

  const onChange = (value: string) => {
    setJsonValue(value);
  };

  return (
    <>
      <CheckJsonButton value={jsonValue} />
      <JsonLdPlaygroundButton value={jsonValue} />
      <JsonEditor onChange={onChange} value={jsonValue} />
    </>
  );
};

export default CheckJsonTab;
