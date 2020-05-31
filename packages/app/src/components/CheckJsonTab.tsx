// import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab';
import { check } from 'jsonld-checker-lib';
import React from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";

// TODO Get CheckResult
type ICheckError = {
  type: string,
  details: string,
} | undefined;

const CheckJsonTab: React.FunctionComponent<{}> = () => {

  const [jsonValue, setJsonValue] = React.useState('');
  // const [ok, setOk] = React.useState(true);
  const [error, setError] = React.useState<ICheckError>();

  const onChange = (value: string) => {
    setJsonValue(value);
  };

  const onClickCheck = async () => {
    console.log({ jsonValue });
    const result = await check(jsonValue);
    // setOk(result.ok);
    if (!result.ok) {
      setError(result.error);
    }
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={onClickCheck}>Check</Button>
      {error ?
        <Alert severity="error">
          <AlertTitle>{error.type}</AlertTitle>
          {error.details}
        </Alert>
        : <React.Fragment />
      }
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
        }} />
    </React.Fragment>
  )
};

export default CheckJsonTab;
