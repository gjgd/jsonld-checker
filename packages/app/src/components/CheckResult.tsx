import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import JsonLdCheckResult from '../models/JsonLDCheckResult';

const CheckResult: React.FunctionComponent<{ result: JsonLdCheckResult }> = ({
  result,
}) => {
  if (!result) {
    return <></>;
  }
  if (result.ok) {
    return <Alert severity="success">All Good!</Alert>;
  }
  return (
    <Alert severity="error">
      <AlertTitle>{result.error.type}</AlertTitle>
      {result.error.details}
    </Alert>
  );
};

export default CheckResult;
