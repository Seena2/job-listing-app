import { NavLink, Outlet } from "react-router-dom";
const CareerLayout = () => {
  return (
    <div className="career-layout">
      <h3>Career</h3>
      <p>Lorem ipsum dolor sit amet.</p>
      {/* <nav>
        <NavLink to="careers">Careers</NavLink>
      </nav> */}
      <Outlet />
    </div>
  );
};

export default CareerLayout;
