import React from 'react';
import '../components/styles/JobForm.css'; // Import the external CSS file

const JobForm = () => {
  return (
    <div className="job-form-container">
      <h1 className="job-form-heading">Post a Job</h1>
      <div className="job-form">
        <div className="job-form-row">
          <div className="job-form-column">
            <label className="job-form-label">Job Title</label>
            <input type="text" className="job-form-input" />
          </div>
          <div className="job-form-column">
            <label className="job-form-label">Department</label>
            <input type="text" className="job-form-input" />
          </div>
        </div>
        <div className="job-form-row">
          <div className="job-form-column">
            <label className="job-form-label">Industry</label>
            <input type="text" className="job-form-input" />
          </div>
          <div className="job-form-column">
            <label className="job-form-label">Location</label>
            <input type="text" className="job-form-input" />
          </div>
        </div>
        <div className="job-form-row">
          <div className="job-form-column">
            <label className="job-form-label">Relevant Experience Required</label>
            <div className="job-form-select-wrapper">
              <select className="job-form-select">
                <option>Min</option>
              </select>
              <select className="job-form-select">
                <option>Max</option>
              </select>
            </div>
          </div>
          <div className="job-form-column">
            <label className="job-form-label">Salary Range</label>
            <div className="job-form-salary-wrapper">
              <input type="text" className="job-form-salary-input" placeholder="Min" />
              <span className="job-form-salary-label">LPA</span>
              <input type="text" className="job-form-salary-input" placeholder="Max" />
              <span className="job-form-salary-label">LPA</span>
            </div>
          </div>
        </div>
        <div className="job-form-column">
          <label className="job-form-label">Description</label>
          <textarea className="job-form-textarea" />
        </div>
        <div className="job-form-button-group">
          <button className="job-form-cancel-button">Cancel</button>
          <button className="job-form-preview-button">Job Preview</button>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
