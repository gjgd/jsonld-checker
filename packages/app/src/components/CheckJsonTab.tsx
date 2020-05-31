import React from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";

// import { Paper } from '@material-ui/core';

const CheckJsonTab: React.FunctionComponent<{}> = () => {
  const onChange = console.log;

  return (<AceEditor
    placeholder="Paste your JSON-LD object here"
    mode="json"
    theme="monokai"
    name="json-ld-editor"
    onChange={onChange}
    fontSize={14}
    showPrintMargin={true}
    showGutter={true}
    highlightActiveLine={true}
    value={''}
    setOptions={{
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      enableSnippets: false,
      showLineNumbers: true,
      tabSize: 2,
    }} />
  )
};

export default CheckJsonTab;
