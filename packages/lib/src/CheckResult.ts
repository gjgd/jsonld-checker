export interface JSONLDEvent {
  type?: string[];
  code?: string;
  level?: string;
  message?: string;
  details?: {
    expandedProperty: string;
    property: string;
  };
}

class CheckResult {
  ok: boolean;

  error?: {
    type: string;
    message: string;
    event: JSONLDEvent;
  };

  constructor(ok: boolean, type = '', message = '', event = {}) {
    this.ok = ok;
    this.error = {
      type,
      message,
      event,
    };
  }
}

export default CheckResult;
