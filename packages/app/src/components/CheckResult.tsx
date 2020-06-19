import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { CheckResult as JsonLdCheckResult } from 'jsonld-checker';

const CheckResult: React.FunctionComponent<{
  result: JsonLdCheckResult | undefined;
  className?: any;
}> = ({ result, className }) => {
  if (!result) {
    return <></>;
  }
  if (result.ok) {
    return <Alert severity="success">All Good!</Alert>;
  }
  return (
    <Alert className={className} severity="error">
      <AlertTitle>{result.error!.type}</AlertTitle>
      {result.error!.details}
    </Alert>
  );
};

export default CheckResult;
