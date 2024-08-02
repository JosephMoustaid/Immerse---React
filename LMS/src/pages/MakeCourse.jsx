import React, { useState } from 'react';

const MakeCourse = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        const currentForm = document.querySelectorAll('.carousel-item form')[currentIndex];
        if (currentForm.checkValidity()) {
            $('#courseCarousel').carousel('next');
            setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
            currentForm.reportValidity();
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            $('#courseCarousel').carousel('prev');
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    const isYouTubeEmbedCode = (text) => {
        const regex = /<iframe[^>]*src="https:\/\/www\.youtube\.com\/embed\/[^\s"]+"[^>]*><\/iframe>/;
        return regex.test(text);
    }
    
    const handleMoreAssetsChange = (event) => {
        const additionalAssetsPage = document.getElementById('additionalAssetsPage');
        additionalAssetsPage.style.display = event.target.value === 'yes' ? 'block' : 'none';
    };

    const handleAssetTypeChange = (event) => {
        const assetType = event.target.value;
        document.getElementById('3dModelUpload').style.display = assetType === '3dModel' ? 'block' : 'none';
        document.getElementById('audioUpload').style.display = assetType === 'audio' ? 'block' : 'none';
    };

    return (
        <div id="courseCarousel" className="carousel slide" data-bs-ride="false">
            <div className='p-2'>
                <a className='fs-5' href="javascript:history.back()">
                    <div className="custom-button2 rounded-circle fs-4 px-3">
                        <i className="bi bi-arrow-left"></i>
                    </div>&nbsp;
                    <span className='underline'>Go back</span>
                </a>
            </div>
            <div className="carousel-inner">
                {/* Page 1: Course Details */}
                <div className="carousel-item active">
                    <div className="container d-flex justify-content-center align-items-center min-vh-100">
                        <div className="card p-4 shadow-lg course-card" style={{ width: '100%', maxWidth: '600px' }}>
                            <h3 className="text-center mb-4">Course Details</h3>
                            <form className="course-form">
                                <div className="form-group mb-3">
                                    <label htmlFor="courseName" className="form-label">Course Name <span className="text-danger">*</span></label>
                                    <input type="text" id="courseName" className="form-control" placeholder="Enter course name" required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="category" className="form-label">Category <span className="text-danger">*</span></label>
                                    <select id="category" className="form-select" placeholder="Enter category" name=""  required>
                                        <option value="electronics">Electronics</option>
                                        <option value="mechanicx">Mechanics</option>
                                        <option value="computerScience">Computer sience</option>
                                        <option value="numeric">Numeric</option>
                                        <option value="biology">Biology</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="environment" className="form-label">Environment <span className="text-danger">*</span></label>
                                    <select id="environment" className="form-select" required>
                                        <option value="" disabled selected>Select environment</option>
                                        <option value="lab">Lab</option>
                                        <option value="school">School</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="courseDescription" className="form-label">Course Description <span className="text-danger">*</span></label>
                                    <textarea id="courseDescription" className="form-control" rows="4" placeholder="Enter course description" required></textarea>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="privacy" className="form-label">Privacy <span className="text-danger">*</span></label>
                                    <select id="privacy" className="form-select" required>
                                        <option value="" disabled selected>Select privacy</option>
                                        <option value="private">Private</option>
                                        <option value="public">Public</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Page 2: File Upload */}
                <div className="carousel-item">
                    <div className="container d-flex justify-content-center align-items-center min-vh-100">
                        <div className="card p-4 shadow-lg course-card" style={{ width: '100%', maxWidth: '600px' }}>
                            <h3 className="text-center mb-4">File Upload</h3>
                            <form className="file-upload-form">
                                <div className="form-group mb-3">
                                    <label htmlFor="pdfFile" className="form-label">Upload PDF <span className="text-danger me-2" >*</span></label>
                                    <input type="file" id="pdfFile" className="form-control-file" accept=".pdf" required />
                                </div>
                                <hr></hr>
                                <div className="form-group mb-3">
                                    <label htmlFor="youtubeEmbed" className="form-label">YouTube Video Embed Code <span className="text-danger">*</span></label>
                                    <input type="text" id="youtubeEmbed" className="form-control" placeholder="Paste YouTube embed code" required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Page 3: More Assets */}
                <div className="carousel-item">
                    <div className="container d-flex justify-content-center align-items-center min-vh-100">
                        <div className="card p-4 shadow-lg course-card" style={{ width: '100%', maxWidth: '600px' }}>
                            <h3 className="text-center mb-4">More Assets</h3>
                            <form className="more-assets-form">
                                <p className='fs-5 underline' style={{cursor:"help"}}>Do you want to upload more assets ?</p>
                                <div className="form-group mb-3">
                                    <label htmlFor="moreAssets" className="form-label">Select an option:</label>
                                    <select id="moreAssets" className="form-select" onChange={handleMoreAssetsChange} required>
                                        <option value="" disabled selected>Select option</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Page 4: Upload Additional Assets */}
                <div className="carousel-item" id="additionalAssetsPage" style={{ display: 'none' }}>
                    <div className="container d-flex justify-content-center align-items-center min-vh-100">
                        <div className="card p-4 shadow-lg course-card" style={{ width: '100%', maxWidth: '600px' }}>
                            <h3 className="text-center mb-4">Upload Additional Assets</h3>
                            <form className="additional-assets-form">
                                <div className="form-group mb-3">
                                    <label htmlFor="assetType" className="form-label">What type of file do you want to upload?</label>
                                    <select id="assetType" className="form-select" onChange={handleAssetTypeChange} required>
                                        <option value="" disabled selected>Select file type</option>
                                        <option value="3dModel">3D Model (.gltf, .obj, .dae)</option>
                                        <option value="audio">Audio</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3" id="3dModelUpload" style={{ display: 'none' }}>

                                    <label htmlFor="fileName" className="form-label me-2">File Name  <span className="text-danger me-2" >*</span></label>
                                    <input type="text" id="fileName" className="form-control" />
    
                                    <label htmlFor="3dModelFile" className="form-label me-2">Upload 3D Model File  <span className="text-danger me-2" >*</span> </label>
                                    <input type="file" id="3dModelFile" className="form-control-file" accept=".gltf,.obj" />
                                </div>
                                <div className="form-group mb-3" id="audioUpload" style={{ display: 'none' }}>
                                    
                                    <hr></hr>
                                    <label htmlFor="fileName" className="form-label me-2">File Name </label>
                                    <input type="text" id="fileName" className="form-control" />
                                    <br></br>
                                    
                                    <label htmlFor="audioFile" className="form-label">Upload Audio File</label>
                                    <input type="file" id="audioFile" className="form-control-file" accept=".mp3,.wav" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Controls */}
            <div className="carousel-controls">
                <button className="btn btn-secondary shadow" onClick={handlePrev}>Previous</button>
                <button className="btn btn-primary shadow" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default MakeCourse;
