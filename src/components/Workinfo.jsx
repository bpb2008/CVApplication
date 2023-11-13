import React, { useState } from "react";

const WorkInfo = (props) => {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [form, setForm] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case "jobTitle":
        setJobTitle(value);
        break;
      case "company":
        setCompany(value);
        break;
      case "jobStartDate":
        setJobStartDate(value);
        break;
      case "jobEndDate":
        setJobEndDate(value);
        break;
      case "description":
        setDescription(value);
        break;
    }
    e.preventDefault();
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      jobTitle: jobTitle,
      company: company,
      jobStartDate: jobStartDate,
      jobEndDate: jobEndDate,
      description: description,
      form: form,
    };
    props.saveInputValue(formData);
    setJobTitle("");
    setCompany("");
    setJobStartDate("");
    setJobEndDate("");
    setDescription("");
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <p>Professional Experience</p>
      </div>
      <form onSubmit={onSubmitForm}>
        <div className="input-container">
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            placeholder="Enter Job Title"
            name="jobTitle"
            id="jobTitle"
            value={jobTitle}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            placeholder="Enter Company"
            name="company"
            id="company"
            value={company}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="jobStartDate">Start Date:</label>
          <input
            type="date"
            placeholder="MM/DD/YYYY"
            name="jobStartDate"
            id="jobStartDate"
            value={jobStartDate}
            onSubmit={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="jobEndDate">End Date:</label>
          <input
            type="date"
            placeholder="MM/DD/YYYY"
            name="jobEndDate"
            id="jobEndDate"
            value={jobEndDate}
            onSubmit={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="descripton">Description:</label>
          <textarea
            placeholder="Describe the main tasks associated with this position."
            name="description"
            id="description"
            value={description}
            onSubmit={handleChange}
          />
        </div>
        <div className="submit-button">
          <button className="save-form" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkInfo;
