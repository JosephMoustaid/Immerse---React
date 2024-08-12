import React from 'react';

const CommitmentInsight = ({ complete, audit, uncommitted }) => {
  const total = complete + audit + uncommitted;

  const getPercentage = (value) => {
    return ((value / total) * 100).toFixed(2);
  };

  return (
    <div className="card mb-4 shadow">
      <div className="card-body">
        <h5 className="card-title">Intent</h5>
        <div className="mb-3">
          <p>Committed to Complete: <strong>{complete.toLocaleString()}</strong></p>
          <div className="progress mb-3">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${getPercentage(complete)}%`, backgroundColor:"#6b2b99" }}
              aria-valuenow={getPercentage(complete)}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <p>Committed to Audit: <strong>{audit.toLocaleString()}</strong></p>
          <div className="progress mb-3">
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: `${getPercentage(audit)}%` , backgroundColor:"#ab78cf"}}
              aria-valuenow={getPercentage(audit)}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <p>Uncommitted: <strong>{uncommitted.toLocaleString()}</strong></p>
          <div className="progress mb-3">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${getPercentage(uncommitted)}%` , backgroundColor:"#c6aae6"}}
              aria-valuenow={getPercentage(uncommitted)}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitmentInsight;
