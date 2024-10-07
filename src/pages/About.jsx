import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  const [user, setUser] = useState("John");
  if (!user) {
    return <Navigate to="/" replace />; //redirect user to homepage if we don't have user
  }
  return (
    <div className="about">
      <h3>About Us</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eveniet,
        vitae ratione natus illo, explicabo dolores amet ipsa molestiae est
        doloribus voluptas quod nihil ut iste in obcaecati, ullam et.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ex
        debitis laudantium atque aperiam, amet ducimus laboriosam eaque,
        repudiandae mollitia, hic fuga autem minima quibusdam beatae quae
        architecto expedita corrupti.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};

export default About;
