import React, { useState } from 'react';

const AdditionalAssetsPage = () => {
    const [showUploadForm, setShowUploadForm] = useState(false);
    const [currentAsset, setCurrentAsset] = useState({ type: '', name: '', file: null });
    const [assets, setAssets] = useState([]);

    const handleAddNewAsset = () => {
        setShowUploadForm(true);
    };

    const handleAssetTypeChange = (event) => {
        setCurrentAsset({ ...currentAsset, type: event.target.value });
    };

    const handleAssetNameChange = (event) => {
        setCurrentAsset({ ...currentAsset, name: event.target.value });
    };

    const handleFileChange = (event) => {
        setCurrentAsset({ ...currentAsset, file: event.target.files[0] });
    };

    const handleSaveAsset = (event) => {
        event.preventDefault();
        if (currentAsset.type && currentAsset.name && currentAsset.file) {
            setAssets([...assets, currentAsset]);
            setCurrentAsset({ type: '', name: '', file: null });
            setShowUploadForm(false);
        } else {
            alert('Please fill in all fields and upload a file.');
        }
    };

    const renderAssetPreview = (asset, index) => (
        <div key={index} className="asset-preview border rounded shadow-sm pt-3 p-2 mb-2">
            <p><strong>Type:</strong> {asset.type}</p>
            <p><strong>Name:</strong> {asset.name}</p>
            <p><strong>File:</strong> {asset.file.name}</p>
        </div>
    );

    return (
        <div className="carousel-item" id="additionalAssetsPage">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="card p-4 shadow-lg course-card" style={{ width: '100%', maxWidth: '600px' }}>
                    <h3 className="text-center mb-4">Upload Additional Assets</h3>
                    {!showUploadForm ? (
                        <>
                            <button className="btn custom-button2 mb-4" onClick={handleAddNewAsset}>+ New Asset</button>
                            {assets.length > 0 && (
                                <div className="mb-4">
                                    <h5 className="mb-3">Uploaded Assets</h5>
                                    {assets.map((asset, index) => renderAssetPreview(asset, index))}
                                </div>
                            )}
                        </>
                    ) : (
                        <form className="additional-assets-form" onSubmit={handleSaveAsset}>
                            <div className="form-group mb-3">
                                <label htmlFor="assetType" className="form-label">What type of file do you want to upload?</label>
                                <select id="assetType" className="form-select" value={currentAsset.type} onChange={handleAssetTypeChange} required>
                                    <option value="" disabled>Select file type</option>
                                    <option value="3dModel">3D Model (.gltf, .obj, .dae)</option>
                                    <option value="audio">Audio</option>
                                </select>
                            </div>
                            <div className="form-group mb-3" style={{ display: currentAsset.type === '3dModel' ? 'block' : 'none' }}>
                                <label htmlFor="fileName" className="form-label">File Name</label>
                                <input type="text" id="fileName" className="form-control" value={currentAsset.name} onChange={handleAssetNameChange} required />
                                <label htmlFor="3dModelFile" className="form-label">Upload 3D Model File</label>
                                <input type="file" id="3dModelFile" className="form-control-file" accept=".gltf,.obj" onChange={handleFileChange} style={{ display: currentAsset.type === '3dModel' ? 'block' : 'none' }} />
                            </div>
                            <div className="form-group mb-3" style={{ display: currentAsset.type === 'audio' ? 'block' : 'none' }}>
                                <label htmlFor="fileName" className="form-label">File Name</label>
                                <input type="text" id="fileName" className="form-control" value={currentAsset.name} onChange={handleAssetNameChange} required />
                                <label htmlFor="audioFile" className="form-label">Upload Audio File</label>
                                <input type="file" id="audioFile" className="form-control-file" accept=".mp3,.wav" onChange={handleFileChange} style={{ display: currentAsset.type === 'audio' ? 'block' : 'none' }} />
                            </div>
                            <button type="submit" className="btn btn-success mb-4">Save Asset</button>
                        </form>
                    )}

                </div>
            </div>
        </div>
    );
};

export default AdditionalAssetsPage;
