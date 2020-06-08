// TODO Get CheckResult
type JsonLdCheckResult = {
  ok: boolean,
  error: {
    type: string,
    details: string,
  }
} | undefined;

export default JsonLdCheckResult;
