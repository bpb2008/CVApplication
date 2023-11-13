import React, { useState } from "react";

const GeneralInfo = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cityState, setCityState] = useState("");
  const [form, setForm] = useState("blankForm");

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "cityState":
        setCityState(value);
        break;
    }
    e.preventDefault();
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      cityState: cityState,
      form: form,
    };
  };
  props.saveInputValue(formData);
  setFullName("");
  setEmail("");
  setPhoneNumber("");
  setCityState("");

  return (
    <div className="form-container">
      <div className="form-header">
        <p>General Info</p>
      </div>
      <form onSubmit={onSubmitForm}>
        <div className="input-container">
          <label htmlFor="fulltName">Full Name:</label>
          <input
            type="text"
            placeholder="Enter your full name"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            name="phoneNumber"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handleSubmit}
          />
        </div>
        <div className="input-container">
          <label htmlFor="cityState">City and State:</label>
          <input
            type="text"
            placeholder="Example: Houston, TX"
            name="cityState"
            id="cityState"
            value={cityState}
            onChange={handleSubmit}
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

export default GeneralInfo;
