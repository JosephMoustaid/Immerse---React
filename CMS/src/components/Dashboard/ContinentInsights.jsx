import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContinentInsights = ({ data }) => {
  return (
    <div className="card mb-4 shadow">
      <div className="card-body">
        <h5 className="card-title">Continent</h5>
        <div>
          {Object.keys(data).map((continent, index) => (
            <div key={index} className="mb-2">
              <div className="d-flex justify-content-between">
                <span>{continent}</span>
                <span>{data[continent]}%</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: `${data[continent]}%` }}
                  aria-valuenow={data[continent]}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinentInsights;
