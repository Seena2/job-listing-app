import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  //access the route parameter ising useParams hook
  const { id } = useParams();
  //use the a hook to access the result object from loader function below
  const singleCareer = useLoaderData();
  return (
    <div className="career-details">
      <h2> Career Details For {singleCareer.title}</h2>
      <p>Starting Salary :{singleCareer.salary}</p>
      <p>Location: {singleCareer.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Rationefacilis magni in, dolore quis sit ducimus ullam corrupti sint
          sed possimus aspernatur modi iste molestiae voluptatem consequuntur
          architecto ut omnis?
        </p>
      </div>
    </div>
  );
};
export default CareerDetails;

//Loader Function
export const careerDetailsLoader = async ({ params }) => {
  // extract the id again from the parameter passed to this function,
  // b/c the one in Details function is out of this functions scope
  const { id } = params;
  //fetch the single document for this ID from the Endpoint
  const res = await fetch("http://localhost:4000/careers/" + id);
  //check if the response is Not ok and throw error
  if (!res.ok) {
    throw Error("Could not find that coureer");
  }
  //return the result after converting to Json so it can be accessed in the component
  return res.json();
};
