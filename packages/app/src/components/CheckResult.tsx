import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import JsonLdCheckResult from '../models/JsonLDCheckResult';

const CheckResult: React.FunctionComponent<{ result: JsonLdCheckResult }> = ({
  result,
}) => {
  if (!result) {
    return <React.Fragment />;
  }
  if (result.ok) {
    return (
      <Alert severity="success">This is a success alert — check it out!</Alert>
    );
  }
  return (
    <Alert severity="error">
      <AlertTitle>{result.error.type}</AlertTitle>
      {result.error.details}
    </Alert>
  );
};

export default CheckResult;
