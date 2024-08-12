import React from 'react';

const Overview = ({ totalLearners, countries, emergingEconomies }) => {
  return (
    <div className="card mb-2  shadow mt-2">
      <div className="card-body d-flex flex-row justify-content-between py-4 me-5">
        <h5 className="card-title">Reach</h5>
        <p>Total learners joined: <strong>{totalLearners}</strong></p>
        <p>Different countries: <strong>{countries}</strong></p>
        <p>From emerging economies: <strong>{emergingEconomies}</strong> <em>({Math.round(emergingEconomies / totalLearners * 100)} % )</em></p>
      </div>
    </div>
  );
};

export default Overview;
