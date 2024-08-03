import React from 'react';

const FileUploadPage = () => (
    <div className="carousel-item">
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card p-4 shadow-lg course-card" style={{ width: '100%', maxWidth: '600px' }}>
                <h3 className="text-center mb-4">File Upload</h3>
                <form className="file-upload-form">
                    <div className="form-group mb-3">
                        <label htmlFor="pdfFile" className="form-label">Upload PDF <span className="text-danger me-2">*</span></label>
                        <input type="file" id="pdfFile" className="form-control-file" accept=".pdf" required />
                    </div>
                    <hr />
                    <div className="form-group mb-3">
                        <label htmlFor="youtubeEmbed" className="form-label">YouTube Video Embed Code <span className="text-danger">*</span></label>
                        <textarea type="text" id="youtubeEmbed" className="form-control" placeholder="Paste YouTube embed code" required />
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default FileUploadPage;
