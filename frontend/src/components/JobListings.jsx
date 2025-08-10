import { useState, useEffect } from "react";
// import jobs from "../../data/jobs.json";
import Job from "./Job";
import Spinner from "./Spinner";

function JobListings({ isHome = false }) {
  // console.log(jobs);
  //to reuse this component, if the Page is Home;slice 3 jobs from list else return all jobs
  // const jobListings = isHome ? jobs.slice(0, 3) : jobs;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  //fetch data on page load and populate the 'jobs'array(State)
  useEffect(() => {
    const fetchJobs = async () => {
      //note the '?_limit=3' at the end of URL is Json-server feature that limits the result reurned to 3
      // const API_URL = isHome ? "http://localhost:8000/jobs?_limit=3" : "http://localhost:8000/jobs";
      const API_URL = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const result = await fetch(API_URL);
        const data = await result.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs(); //call the fetch function
  }, []);

  return (
    <section className="jobListings">
      <h3 className="blue">{isHome ? "Recent Jobs" : "Browse Jobs"}</h3>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="jobs">
          {jobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
      )}
    </section>
  );
}
export default JobListings;
