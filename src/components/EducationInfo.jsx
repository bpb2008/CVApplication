import React, { useState } from "react";

const EducationInfo = (props) => {
  const [degree, setDegree] = useState("");
  const [school, setSchool] = useState("");
  const [schoolLocation, setSchoolLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [form, setForm] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case "degree":
        setDegree(value);
        break;
      case "school":
        setSchool(value);
        break;
      case "schoolLocation":
        setSchoolLocation(value);
        break;
      case "startDate":
        setStartDate(value);
        break;
      case "endDate":
        setEndDate(value);
        break;
    }
    e.preventDefault();
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      degree: degree,
      school: school,
      schoolLocation: schoolLocation,
      startDate: startDate,
      endDate: endDate,
      form: form,
    };
    props.saveInputValue(formData);
    setDegree("");
    setSchool("");
    setSchoolLocation("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <p>Education Experience</p>
      </div>
      <form onSubmit={onSubmitForm}>
        <div className="input-container">
          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            placeholder="Enter Degree/Field of Study"
            name="degree"
            id="degree"
            value={degree}
            onSubmit={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="school">School:</label>
          <input
            type="text"
            placeholder="Enter School or University"
            name="school"
            id="school"
            value={school}
            onSubmit={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="schoolLocation">City and State:</label>
          <input
            type="text"
            placeholder="Ex: Houston, TX"
            name="schoolLocation"
            id="schoolLocation"
            value={schoolLocation}
            onSubmit={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            placeholder="MM/DD/YYYY"
            name="startDate"
            id="startDate"
            value={startDate}
            onSubmit={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            placeholder="MM/DD/YYYY"
            name="endDate"
            id="endDate"
            value={endDate}
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

export default EducationInfo;
