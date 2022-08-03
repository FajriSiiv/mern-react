import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 className="text-3xl font-bold py-5">MERN</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
