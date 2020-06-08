// import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { check } from 'jsonld-checker-lib';
import React from 'react';
import AceEditor from "react-ace";
import JsonLdCheckResult from '../models/JsonLDCheckResult';
import CheckResult from './CheckResult';
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";

const CheckJsonTab: React.FunctionComponent<{}> = () => {

  const [jsonValue, setJsonValue] = React.useState('');
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
    <React.Fragment>
      <Button variant="contained" onClick={onClickCheck}>
        Check
      </Button>
      <CheckResult result={result} />
      <AceEditor
        placeholder="Paste your JSON-LD object here"
        mode="json"
        theme="monokai"
        name="json-ld-editor"
        onChange={onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={jsonValue}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </React.Fragment>
  );
};

export default CheckJsonTab;
