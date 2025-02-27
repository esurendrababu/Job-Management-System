import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

export const fetchJobs = async () => {
    const response = await axios.get(`${API_URL}jobs/`);
    return response.data;
};

export const fetchJobsByExperience = async (experience) => {
    const response = await axios.get(`${API_URL}jobs/experience/${experience}/`);
    return response.data;
};

export const createJob = async (jobData) => {
    const response = await axios.post(`${API_URL}jobs/create/`, jobData);
    return response.data;
};
