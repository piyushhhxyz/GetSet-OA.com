import React, { useState } from 'react';

export default function UploadForm() {
    const [formData, setFormData] = useState({
        companyName: '',
        companyPhoto: '',
        collegeName: '',
        date: '',
        internOrFullTime: 'Intern',
        uploadedBy: 'req.user.id', 
    });
    const [_, setFileInputState] = React.useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState('');

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

    const uploadImage = async (base64EncodedImage) => {
        // try {
        //     await fetch('http://localhost:4000/api/upload', {
        //         method: 'POST',
        //         body: JSON.stringify({ data: base64EncodedImage }),
        //         headers: { 'Content-Type': 'application/json' },
        //     });
        // } catch (err) {
        //     console.error(err);
        // }
        console.log(`Uploading images to cloudinary...`)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!selectedFile) return;
        
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
            setFileInputState('');
            setPreviewSource('');
            
            // Print formData to the console
            console.log(formData);
        };
        reader.onerror = () => {
            console.error('Error reading the file.');
        };
    };

    return (
        <div className="upload-form-container">
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
                    /><br/><br/>
                    <label htmlFor="fileInput">Upload Company Logo</label>
                    <input
                        id="fileInput"
                        type="file"
                        name="companyPhoto"
                        onChange={handleFileInputChange}
                        className="form-input"
                    /><br/><br/>
                    <label htmlFor="collegeName">College Name</label>
                    <input
                        type="text"
                        name="collegeName"
                        value={formData.collegeName}
                        onChange={handleInputChange}
                        placeholder="College Name"
                        required
                    /><br/><br/>
                    <label htmlFor="date">Date</label>
                    <input
                        type="text"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        placeholder="Date"
                        required
                    /><br/><br/>
                    <label htmlFor="internOrFullTime">Intern or Full Time</label>
                    <select
                        name="internOrFullTime"
                        value={formData.internOrFullTime}
                        onChange={handleInputChange}
                    >
                        <option value="Intern">Intern</option>
                        <option value="FullTime">FullTime</option>
                    </select><br/><br/>
                    <button className="btn" type="submit">Submit</button>
                </fieldset>
            </form>
            <div className="upload-preview">
                {previewSource && (
                    <img
                        src={previewSource}
                        alt="chosen"
                        style={{ height: '100%', width: '100%'  }}
                    />
                )}
            </div>
        </div>
    );
};


