import { Link } from "react-router-dom";

function Hero({
  title = "Get hired Now",
  subTitle = "Find the job you desire, that fits your skill and needs",
}) {
  return (
    <section className="hero">
      <div className="motto">
        <h3 className="title">
          {/* Get hired Now */}
          {title}
        </h3>
        <p className="subtitle">
          {/* Find the job you desire, that fits your skill and needs */}
          {subTitle}
        </p>
        <Link to="/jobs" className="btn heroBtn">
          Find Job
        </Link>
      </div>
    </section>
  );
}

export default Hero;
