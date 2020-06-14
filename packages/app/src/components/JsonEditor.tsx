import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';

const JsonEditor: React.FunctionComponent<{
  index?: number;
  onChange?: any;
  readOnly?: boolean;
  value: string;
}> = ({ onChange, value, index, readOnly }) => {
  return (
    <AceEditor
      placeholder="Paste your JSON-LD object here"
      mode="json"
      theme="monokai"
      name={`json-ld-editor-${index}`}
      onChange={onChange}
      readOnly={readOnly}
      fontSize={14}
      showPrintMargin
      showGutter
      highlightActiveLine
      value={value}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

export default JsonEditor;
