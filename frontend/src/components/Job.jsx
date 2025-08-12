import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
function Job({ job }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  //get the description
  let description = job.description;
  if (!showFullDescription) {
    //cut off and shortend the description
    description = description.substring(0, 90) + "...";
  }
  const handleShow = () => {
    setShowFullDescription((prevState) => !prevState);
  };
  return (
    <div key={job.id} className="job">
      <div className="jobBody">
        <div className="jobType">{job.type}</div>
        <h3 className="jobTitle">{job.title}</h3>

        <div className="jobDescription">{description}</div>
        <button
          onClick={handleShow}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showFullDescription ? "Less" : "More"}
        </button>
        <p className="jobSalary">{job.salary}</p>
        <div className="jobLocation">
          <FaMapMarker className="inline text-lg mb-1 mr-1" />
          {job.location}
        </div>
      </div>
      <div className="  jobBtn">
        <Link to={`/jobs/${job.id}`} className="blueBtn">
          Read more
        </Link>
      </div>
    </div>
  );
}
export default Job;
