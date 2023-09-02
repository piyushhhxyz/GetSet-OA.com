import React from "react";
import Navbar from "../components/Navbar";

export default function Upload({ user }) {
  const [formData, setFormData] = React.useState({
    companyName: "",
    companyPhoto: "",
    driveLink: "",
    collegeName: "",
    date: "",
    internOrFullTime: "",
  });
  const [_, setFileInputState] = React.useState("");
  const [previewSource, setPreviewSource] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const uploadData = async (base64EncodedImage) => {
    try {
      await fetch("http://localhost:4000/api/v1/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          base64EncodedImage,
        }),
      });
      alert("Data submited");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadData(reader.result);
      setFileInputState("");
      setPreviewSource("");

      console.log(formData);
    };
    reader.onerror = () => {
      console.error("Error reading the file.");
    };
  };

  return (
    <div className="upload-form-container">
      {/* <Navbar user={user} /> */}
      <form onSubmit={handleSubmit} className="upload-form">
        <fieldset>
          <legend>
            <h1>Upload Questions Here</h1>
          </legend>
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Company Name"
            required
          />
          <br />
          <br />
          <label htmlFor="fileInput">Upload Company Logo</label>
          <input
            id="fileInput"
            type="file"
            name="companyPhoto"
            onChange={handleFileInputChange}
            className="form-input"
          />
          <br />
          <br />
          <label htmlFor="driveLink">Paste PDF Drive Link Please</label>
          <input
            type="text"
            name="driveLink"
            value={formData.driveLink}
            onChange={handleInputChange}
            placeholder="drive.google.com/file"
            required
          />
          <br />
          <br />
          <label htmlFor="collegeName">College Name</label>
          <input
            type="text"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleInputChange}
            placeholder="College Name"
            required
          />
          <br />
          <br />
          <label htmlFor="date">Date</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            placeholder="Date"
            required
          />
          <br />
          <br />
          <label htmlFor="internOrFullTime">Intern or Full Time</label>
          <select
            name="internOrFullTime"
            value={formData.internOrFullTime}
            onChange={handleInputChange}
          >
            <option value="Intern">Intern</option>
            <option value="FullTime">FullTime</option>
          </select>
          <br />
          <br />
          <button className="btn" type="submit">
            Submit
          </button>
        </fieldset>
      </form>
      <div className="upload-preview">
        {previewSource && (
          <img
            src={previewSource}
            alt="chosen"
            style={{ height: "100%", width: "100%" }}
          />
        )}
      </div>
    </div>
  );
}
