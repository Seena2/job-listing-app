import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

function EditJobPage({ updateJobSubmit }) {
  //fetch data using data-loader
  const job = useLoaderData();
  console.log(job);
  //set the default state value with fetched data
  const [jobData, setJobData] = useState({
    type: job.type,
    title: job.title,
    location: job.location,
    salary: job.salary,
    description: job.description,
    companyName: job.company.name,
    companyDescription: job.company.description,
    contactEmail: job.company.contactEmail,
    contactPhone: job.company.contactPhone,
  });

  //destructure form data
  const {
    type,
    title,
    location,
    salary,
    description,
    companyName,
    companyDescription,
    contactEmail,
    contactPhone,
  } = jobData;

  //handler function
  const handleInputChange = (e) => {
    setJobData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //initialize useNavigate hook
  const navigate = useNavigate();
  const { id } = useParams(); //get the id of the target job
  const handleFormSubmission = (e) => {
    e.preventDefault();
    //construct an object matching backend API structure
    const updatedJob = {
      id,
      type,
      title,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };
    // console.log(newJob);
    updateJobSubmit(updatedJob);
    //add toast notification
    toast.success("Job updated successfully");

    //redirect user
    return navigate(`/jobs/${id}`);
  };

  return (
    <section className="addJob">
      <h1>Update Job</h1>
      <form onSubmit={handleFormSubmission} className="form">
        <div className="formGroup">
          <label htmlFor="type">Job type</label>
          <select
            name="type"
            value={type}
            onChange={handleInputChange}
            required
          >
            <option value=""></option>
            <option value="partTime">Part time</option>
            <option value="fullTime">full time</option>
            <option value="internship">Internship</option>
            <option value="remote">Remote</option>
          </select>
        </div>
        <div className="formGroup">
          <label htmlFor="title">Job title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleInputChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="formGroup">
          <label htmlFor="salary">Salary</label>
          <select
            name="salary"
            value={salary}
            onChange={handleInputChange}
            required
          >
            <option value=""></option>
            <option value="under $50k">under $50k</option>
            <option value="$50k-$60k">$50k-$60k</option>
            <option value="$60k-$70k">$60k-$70k</option>
            <option value="$70k-$80k">$70k-$80k</option>
            <option value="$80k-$90k">$80k-$90k</option>
            <option value="$90k-$100k">$90k-$100k</option>
          </select>
        </div>
        <div className="formGroup">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={handleInputChange}
            placeholder="Company location"
          />
        </div>
        <h4 className="companyInfo">Company Info</h4>
        <div className="formGroup">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={companyName}
            onChange={handleInputChange}
            placeholder="Company Name"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="companyDescription">Company Description</label>
          <textarea
            name="companyDescription"
            id="companyDescription"
            value={companyDescription}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="formGroup">
          <label htmlFor="contactEmail">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            id="contactEmail"
            value={contactEmail}
            onChange={handleInputChange}
            placeholder="Company Email"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="contactPhone">Contact Phone</label>
          <input
            type="tel"
            name="contactPhone"
            id="contactPhone"
            value={contactPhone}
            onChange={handleInputChange}
            placeholder="Company Phone"
          />
        </div>
        <div className="formGroup ">
          <button className="btn btnMedium">Update Job</button>
        </div>
      </form>
    </section>
  );
}

export default EditJobPage;
