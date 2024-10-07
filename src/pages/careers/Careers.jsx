import { useLoaderData, Link } from "react-router-dom";

const Career = () => {
  const careersData = useLoaderData();
  return (
    <div className="careers">
      {careersData.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Career;

//Loader Function
//it is async function becouse it take time to fetch data
export const CareersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  //check if the response is Not ok and throw error
  if (!res.ok) {
    throw Error("Could not fetch the careers");
  }
  return res.json();
};
