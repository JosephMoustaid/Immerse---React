import React from 'react';
import PropTypes from 'prop-types';

function AssetModal({ id, name, type, format, preview, modalId }) {
    return (
        <div   className="modal fade asset-modal" id={modalId} tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
            <div   className="modal-dialog">
                <div   className="modal-content">
                    <div   className="modal-header">
                        <h1   className="modal-title fs-5" id={`${modalId}Label`}>{name}</h1>
                        <button type="button"   className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div   className="modal-body">
                        <div   className="rounded">
                            <img src={preview}   className="card-img-top rounded" alt={`${name} preview`} />
                            <p   className="mt-2">{name}</p>
                            <p>File Type: {type}</p>
                            <p>File format: .{format}</p>
                        </div>
                    </div>
                    <div   className="modal-footer">
                        <button type="button"   className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button"   className="btn btn-success" onClick={() => window.open(preview, '_blank')}>Download</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

AssetModal.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    modalId: PropTypes.string.isRequired,
};

export default AssetModal;
