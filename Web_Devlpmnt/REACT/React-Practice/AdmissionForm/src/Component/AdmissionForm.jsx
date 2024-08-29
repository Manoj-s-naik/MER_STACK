import React, { useState } from "react";
import "./AdmissionForm.css";

const AdmissionForm = () => {
  const initialForm = {
    firstname: "",
    lastname: "",
    address: "",
    gender: "",
    subject: "",
    marks: "",
  };

  const [data, setData] = useState(initialForm);
  const [submittedData, setSubmittedData] = useState([]);

  const inputHandler = (obj) => {
    const { name, value } = obj.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const [isVisible, setVisible] = useState(false);

  const HandleSubmit = (obj) => {
    setVisible(true);
    obj.preventDefault();
    const formArray = Object.values(data);
    setSubmittedData([...submittedData, formArray]);
    setData(initialForm); // Clear the form
  };

  return (
    <div className="Admission-form">
      <h1 style={{ fontFamily: "Arial, sans-serif", color: "yellowgreen" }}>
        Admission Form
      </h1>
      <div className="InputContainer">
        <div className="input-field">
          <label htmlFor="firstname">FirstName:</label>
          <input
            type="text"
            name="firstname"
            value={data.firstname}
            onChange={inputHandler}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastname">LastName:</label>
          <input
            type="text"
            name="lastname"
            value={data.lastname}
            onChange={inputHandler}
          />
        </div>
        <div className="input-field">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            value={data.address}
            onChange={inputHandler}
          />
        </div>
        <div className="input-field">
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            name="gender"
            value={data.gender}
            onChange={inputHandler}
          />
        </div>
        <div className="input-field">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            value={data.subject}
            onChange={inputHandler}
          />
        </div>
        <div className="input-field">
          <label htmlFor="marks">Marks:</label>
          <input
            type="number"
            name="marks"
            value={data.marks}
            onChange={inputHandler}
          />
        </div>
      </div>
      <div className="input-submit">
        <button className="submit" onClick={HandleSubmit}>
          Submit
        </button>
      </div>
      <h2 style={{ color: "red" }}>Student Results</h2>

      <div className="input-result">
        <ul className="list">
          {isVisible && (
            <p style={{ display: "block", color: "green" }}>Congratulations</p>
          )}
          {submittedData.map((formArray, index) => (
            <li key={index}>
              {formArray.map((value, i) => (
                <div key={i}>{value}</div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdmissionForm;
