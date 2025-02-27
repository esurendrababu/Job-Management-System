import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function AddJob() {
  const navigate = useNavigate();

  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    experience: "", 
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://127.0.0.1:8000/api/jobs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    });

    if (response.ok) {
      alert("Job added successfully!");
      navigate("/"); 
    } else {
      alert("Error adding job.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary fw-bold">Add a New Job</h2>

      <form onSubmit={handleSubmit} className="p-4 shadow-lg rounded bg-light">
        {/* Job name */}
        <div className="mb-3">
          <label className="form-label fw-bold">Job Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Company Name */}
        <div className="mb-3">
          <label className="form-label fw-bold">Company Name</label>
          <input
            type="text"
            className="form-control"
            name="company"
            value={jobData.company}
            onChange={handleChange}
            required
          />
        </div>

        {/* experience */}
        <div className="mb-3">
          <label className="form-label fw-bold">Experience (in years)</label>
          <input
            type="number"
            className="form-control"
            name="experience"
            value={jobData.experience}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-success btn-lg">
            + Add Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddJob;
