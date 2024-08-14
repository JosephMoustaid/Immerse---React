import React, { useState } from 'react';
import defaultGroupProfile from '../assets/group-profiles/group.png';

const availableUsers = ['alice', 'bob', 'charlie', 'david', 'eve']; // Example list of users

function CreateGroup() {
  const [groupName, setGroupName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [description, setDescription] = useState('');
  const [users, setUsers] = useState('');
  const [step, setStep] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleNext = (event) => {
    event.preventDefault();
    const form = event.target.closest('form');
    if (form.checkValidity()) {
      setStep(step + 1);
    } else {
      form.reportValidity(); // Show built-in validation messages
    }
  };

  const handlePrev = () => setStep(step - 1);

  const handleImageChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle group creation logic here
    alert('Group created!');
  };

  const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        document.getElementById('profileImage').src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUserInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const lastAtIndex = value.lastIndexOf('@');
    const query = lastAtIndex !== -1 ? value.slice(lastAtIndex + 1).trim() : '';

    if (query.length > 0) {
      const filteredUsers = availableUsers.filter(user => user.includes(query));
      setSuggestions(filteredUsers);
    } else {
      setSuggestions([]);
    }

    setUsers(value);
  };

  const handleSuggestionClick = (suggestion) => {
    const lastAtIndex = inputValue.lastIndexOf('@');
    const updatedInput = `${inputValue.slice(0, lastAtIndex + 1)}${suggestion} `;
    setInputValue(updatedInput);
    setUsers(updatedInput);
    setSuggestions([]);
  };

  return (
    <div className="carousel create-group-carousel" id='create-group-carousel'>
    
      {step === 0 && (
        <div className="carousel-item active d-flex  mb-5 justify-content-center">
          <form className="p-4" onSubmit={handleNext}>
            <div className="form-group">
              <label htmlFor="groupName">Group Name</label>
              <input
                type="text"
                className="form-control"
                id="groupName"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="Enter group name"
                required
              />
            </div>
            <button type="submit" className="btn custom-button3 btn-next">Next</button>
          </form>
        </div>
      )}
      {step === 1 && (
        <div className="carousel-item active d-flex  mb-5 justify-content-center">
          <form className="p-4" onSubmit={handleNext}>
            <div className="profile-image-container">
              <h4>Profile picture</h4>
              <img src={defaultGroupProfile} id="profileImage" className="img-thumbnail shadow rounded-circle" alt="Profile Image" style={{ width: "100px", height: "100px" }} />
              <div className="edit-icon small-scale-on-hover" role="button">
                <label htmlFor="profileImageInput" role='button'>
                  <i className="bi bi-camera-fill fs-6"></i>
                </label>
                <input type="file" id="profileImageInput" accept="image/jpeg, image/png, image/gif" onChange={previewImage} style={{ display: 'none' }} />
              </div>
            </div>
            <button type="button" className="btn custom-button2 btn-prev" onClick={handlePrev}>Previous</button>
            <button type="submit" className="btn custom-button3 btn-next">Next</button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="carousel-item active d-flex  mb-5 justify-content-center">
          <form className="p-4" onSubmit={handleNext}>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter group description"
                required
              />
            </div>
            <button type="button" className="btn custom-button2 btn-prev" onClick={handlePrev}>Previous</button>
            <button type="submit" className="btn custom-button3 btn-next">Next</button>
          </form>
        </div>
      )}
      {step === 3 && (
        <div className="carousel-item active d-flex  mb-5 justify-content-center">
          <form className="p-4" onSubmit={handleNext}>
            <div className="form-group">
              <label htmlFor="users">Add Users</label>
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  id="users"
                  value={inputValue}
                  onChange={handleUserInputChange}
                  placeholder="Enter @usernames, separated by commas"
                  autocomplete="off" 
                  required
                />
                {suggestions.length > 0 && (
                  <ul className="suggestions-list">
                    {suggestions.map((suggestion, index) => (
                      <li key={index} onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <button type="button" className="btn custom-button2 btn-prev" onClick={handlePrev}>Previous</button>
            <button type="submit" className="btn custom-button3 btn-next">Next</button>
          </form>
        </div>
      )}
      {step === 4 && (
        <div className="carousel-item active d-flex justify-content-center  mb-5">
          <form className="p-4" onSubmit={handleSubmit}>
            <h5>Review and Confirm</h5>
            <img src={defaultGroupProfile} id="profileImage" className="img-thumbnail shadow rounded-circle m-auto" alt="Profile Image" style={{ width: "100px", height: "100px" }} />
            <p className='mt-2'><strong>Group Name:</strong> {groupName}</p>
            {profileImage && <p><strong>Profile Image:</strong> <img src={profileImage} alt="Profile" width="100" /></p>}
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Admin :</strong> You</p>
            <p><strong>Members :</strong> {users}</p>
            <button type="button" className="btn custom-button2 btn-prev" onClick={handlePrev}>Previous</button>
            <button type="submit" className="btn custom-button3 btn-next">Create Group</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CreateGroup;
