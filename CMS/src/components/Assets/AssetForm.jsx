import React, { useState } from 'react';
import axios from 'axios';

const AssetForm = ({ asset, onSubmit }) => {
  const [name, setName] = useState(asset ? asset.name : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const assetData = { name };
    if (asset) {
      axios.put(`/api/assets/${asset.id}`, assetData)
        .then(response => onSubmit(response.data))
        .catch(error => console.error('Error updating asset:', error));
    } else {
      axios.post('/api/assets', assetData)
        .then(response => onSubmit(response.data))
        .catch(error => console.error('Error creating asset:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <button type="submit">{asset ? 'Update' : 'Add'} Asset</button>
    </form>
  );
};

export default AssetForm;
