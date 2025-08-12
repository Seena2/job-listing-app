import { useEffect, useState } from "react";
import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { toast } from "react-toastify";

function JobPage({ deleteJob }) {
  const { id } = useParams();
  //fetch single data using useState and useEffect hook
  /*
  
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const result = await fetch(`/api/jobs/${id}`);
        const data = await result.json();
        setJob(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);
  */
  //fetch data using data-loader
  const job = useLoaderData();

  const navigate = useNavigate();
  //handler function
  const handleDeleteJob = (jobId) => {
    const confirm = window.confirm(
      "Are you sure, you want to delete this listing?"
    );
    if (!confirm) return;
    deleteJob(jobId);
    toast.success("Job deleted successfully");
    navigate("/jobs");
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" />
            Back to job listings
          </Link>
        </div>
      </section>
      <div className="jobPage">
        <section className="mainContent bg-blue-50">
          <div className="">
            <div className="text-gray-400 mb-4">{job.type}</div>
            <h4>{job.title}</h4>
            <div className="flex">
              <FaMapMarker className="text-orange-700 mr-2" />
              <p className="text-orange-700">{job.location}</p>
            </div>
          </div>
          <div className="jobDescription">
            <h4>Job Description</h4>
            <p>{job.description}</p>
            <div className="flex">
              <h4 className="py-6">Salary: </h4>
              <p> {job.salary}/year</p>
            </div>
          </div>
        </section>
        <section className="sidebar">
          <h2>Company Info</h2>
          <h3>{job.company.name}</h3>
          <p>{job.company.description}</p>
          <h3>Contact address</h3>
          <div>
            <p>Email: </p>
            <i className="bg-blue-200 py-4 px-6">{job.company.contactEmail}</i>
          </div>
          <div>
            <p>Phone: </p>
            <i className="bg-blue-200 mb-10">{job.company.contactPhone}</i>
          </div>
          <div>
            <h3>Manage job</h3>
            <Link to={`/editjob/${job.id}`} className="btn">
              Edit Job
            </Link>
            <button onClick={() => handleDeleteJob(job.id)} className="btn">
              Delete Job
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
