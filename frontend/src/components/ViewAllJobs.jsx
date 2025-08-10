import { Link } from "react-router-dom";

function ViewAllJobs() {
  return (
    <div className="btn btnMedium btnBlue">
      <Link to="/jobs" className="">
        View all Jobs
      </Link>
    </div>
  );
}

export default ViewAllJobs;
