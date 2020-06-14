import React from 'react';

const ResultTable: React.FunctionComponent<{ results: Array<Object> }> = ({
  results,
}) => {
  return (
    <div>
      Hi
      {JSON.stringify(results, null, 2)}
    </div>
  );
};

export default ResultTable;
