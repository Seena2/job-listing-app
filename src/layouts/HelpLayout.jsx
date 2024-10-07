import { Outlet, NavLink } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h3>Help</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
        molestiae.
      </p>
      <nav>
        <NavLink to="faq">Veiw the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLayout;
