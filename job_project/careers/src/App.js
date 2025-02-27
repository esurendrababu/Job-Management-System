import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import JobList from "./pages/JobList";
import AddJob from "./pages/AddJob";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      {/*   Navbar */}
      <Navbar expand="lg" style={{ backgroundColor: "#6A0572" }} variant="dark">
        <Container>
          <Navbar.Brand className="fw-bold text-white" as={Link} to="/">
             Job Portal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="text-warning fw-bold mx-3">
                 Job List
              </Nav.Link>
              <Nav.Link as={Link} to="/add-job" className="text-info fw-bold mx-3">
                ➕ Add Job
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/add-job" element={<AddJob />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
