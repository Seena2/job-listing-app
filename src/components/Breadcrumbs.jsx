import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  //console.log(location);

  // keeps track of each crumb
  let currentLink = [];
  //grab the current actual path and
  const crumbs = location.pathname
    .split("/") //split it into array at the "/"
    //remove the empty strings at the begining and end using filter method
    .filter((crumb) => crumb !== "")
    //iterate the array and return template for each one
    .map((crumb) => {
      //update the current link of that crumb
      currentLink.push(`/${crumb}`);
      //put the result to into template
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink.join("")}>{crumb}</Link>
        </div>
      );
    });
  return <div className="breadcrumbs">{crumbs}</div>;
};

export default Breadcrumbs;
