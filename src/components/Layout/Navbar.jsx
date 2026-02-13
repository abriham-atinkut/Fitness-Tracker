import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-slate-200 h-[10vh] px-6 sticky top-0 z-50">
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
            <div className="relative group ">
              <button className="">Appearance</button>
              <div className="absolute hidden group-hover:block bg-white py-2 px-2 rounded-md shadow-md">
                <button className="block hover:bg-gray-200 px-4 py-1 mb-1 rounded-sm">
                  Dark
                </button>
                <button className="block hover:bg-gray-200 px-4 py-1 mb-1 rounded-sm">
                  Light
                </button>
                <button className="block hover:bg-gray-200 px-4 py-1 mb-1 rounded-sm">
                  System
                </button>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
