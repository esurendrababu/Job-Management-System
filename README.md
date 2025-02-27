# Job-Management-System
The Job Management System is a web application designed to allow users to post, search, and manage job listings. Built using Django (backend) and React (frontend), the system provides a seamless experience for job seekers and recruiters.

Tech Stack
Frontend
React.js
Bootstrap
Backend
Django (Django REST Framework)
MySQL (Database)
Features
✅ Add Jobs – Employers can create job listings with details such as title, company, experience, and location.
✅ List Jobs – Users can view all available job postings.
✅ Search Jobs – Users can search for jobs by title, company name, or location.
✅ REST API Integration – The backend provides an API for CRUD operations.

Project Modules
1️⃣ Backend (Django & DRF)

models.py → Defines the Job model with fields like title, company, experience, and location.
serializers.py → Converts Django models into JSON format.
views.py → Handles API requests for job creation, retrieval, and filtering.
urls.py → Defines API endpoints for job operations.
2️⃣ Frontend (React.js & Bootstrap)

AddJob.js → Form for adding new job listings.
JobList.js → Displays available jobs and includes a search feature.
React Router → Enables navigation between pages.
API Endpoints
GET /api/jobs/ → Retrieve all job listings
POST /api/jobs/ → Add a new job
GET /api/jobs/?search=keyword → Search jobs
