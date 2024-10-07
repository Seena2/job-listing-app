import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h3>Page not Found </h3>
      <p> The page you have requested is not available</p>
      <p>
        Go back to <Link to="/">Home Page</Link>.
      </p>
    </div>
  );
};

export default NotFound;
