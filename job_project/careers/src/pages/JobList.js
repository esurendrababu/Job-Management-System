import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/jobs/")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const filteredJobs = jobs.filter((job) =>
    (job.title?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
    (job.company?.toLowerCase() || "").includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary fw-bold">Job Listings</h2>

      {/* Search box */}
      <input
        type="text"
        className="form-control mb-4 border-primary"
        placeholder="🔍 Search by title or company..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="row">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="col-md-6">
              <div className="card mb-3 shadow-lg border-0">
                <div className="card-body">
                  <h5 className="card-title text-success fw-bold">{job.title}</h5>
                  <p className="card-text">
                    <strong>Company:</strong> {job.company}
                  </p>
                  <p className="card-text">
                    <strong>Experience:</strong> {job.experience} years
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-danger text-center">No jobs found.</p>
        )}
      </div>

      {/* Adding Button */}
      <div className="text-center mt-4">
        <Link to="/add-job" className="btn btn-lg btn-primary">
          + Add New Job
        </Link>
      </div>
    </div>
  );
}

export default JobList;
