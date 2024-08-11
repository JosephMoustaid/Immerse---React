import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssetList = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios.get('/api/assets')
      .then(response => setAssets(response.data))
      .catch(error => console.error('Error fetching assets:', error));
  }, []);

  return (
    <div>
      <h2>Asset List</h2>
      <ul>
        {assets.map(asset => (
          <li key={asset.id}>{asset.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AssetList;
