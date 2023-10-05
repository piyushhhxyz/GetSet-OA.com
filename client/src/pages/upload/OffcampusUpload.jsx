import React from "react";
import { useState } from "react";

export default function OffcampusUpload() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyPhoto: "",
    driveLink: "",
    collegeName: "",
    date: "",
    internOrFullTime: "Intern",
  });

  const [_, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

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
      const response = await fetch("http://localhost:4000/api/v1/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          base64EncodedImage,
        }),
      });

      if (response.ok) {
        alert("Data uploaded successfully!");
      } else {
        alert("Upload failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed. Please try again.");
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
          <h1 className="formHead">Offcampus Alerts</h1>
          <label htmlFor="companyName" className="formHead">
            Company Name
          </label>
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
          <label htmlFor="fileInput" className="formHead">
            Upload Company Logo
          </label>
          <input
            id="fileInput"
            type="file"
            name="companyPhoto"
            onChange={handleFileInputChange}
            className="form-input"
          />
          <br />
          <br />
          <label htmlFor="driveLink" className="formHead">
            Paste PDF Drive Link Please
          </label>
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
          <label htmlFor="collegeName" className="formHead">
            College Name
          </label>
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
          <label htmlFor="date" className="formHead">
            Date
          </label>
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
          <label htmlFor="internOrFullTime" className="formHead">
            Intern or Full Time
          </label>
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
