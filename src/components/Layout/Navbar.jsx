import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-slate-200 h-10 p-6">
        <div>
          <Link to={"/"} className="text-2xl font-semibold">
            Fitness Tracker
          </Link>
        </div>
        <ul className="flex gap-x-6">
          <li>
            <Link to={`#`}>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to={`#`}>
              <span>Workouts</span>
            </Link>
          </li>
          <li>
            <Link to={`#`}>
              <span>Appearance</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
