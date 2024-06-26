import './App.css';
import React, { useState, useEffect } from "react";
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CompaniesList from "./CompaniesList"
import Company from "./Company"
import JobsList from './JobsList';
import Register from './Register';
import Login from './Login'
import JoblyApi from "./JoblyApi";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [user, setUser] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getData() {
      let companies = await JoblyApi.getAllCompanies();
      let jobs = await JoblyApi.getAllJobs();
      setCompanies(companies);
      setJobs(jobs);
      setIsLoading(false);
    }
    getData();
  }, []);


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  console.log(user);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar user={user} setUser={setUser} />
        <main className="container">
          <Routes>
            <Route exact path="/" element={<Home totalJobs={jobs.length} />} />
            <Route exact path="/companies" element={<CompaniesList companies={companies} />} />
            <Route exact path="/companies/:handle" element={<Company />} />
            <Route exact path="/jobs" element={<JobsList jobs={jobs} />} />
            <Route exact path="/register" element={<Register user={user} setUser={setUser}/>} />
            <Route exact path="/login" element={<Login user={user} setUser={setUser}/>} />

          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
