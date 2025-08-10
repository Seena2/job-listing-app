import { Link } from "react-router-dom";
import Card from "./Card";
function HomeCards() {
  return (
    <section className="homeCards">
      <Card bg="lightBlueBg">
        <h3>For Job Seekers</h3>
        <p>Browse jobs, and start your career today and earn income </p>
        <Link to="/jobs" className="btn bluebtn">
          Browse jobs
        </Link>
      </Card>
      <Card>
        <h3>For Employers</h3>
        <p>List your job, to find the perfect candidate for the role</p>
        <Link to="/addJob" className="btn ">
          add Job
        </Link>
      </Card>
    </section>
  );
}
export default HomeCards;
