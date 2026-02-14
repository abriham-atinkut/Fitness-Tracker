import { Link } from "react-router-dom";
import useTheme from "../../store/theme";
const matchMedia =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const Navbar = () => {
  const setTheme = useTheme((state) => state.setTheme);
  return (
    <>
      <nav className="flex justify-between items-center bg-slate-200 h-[10vh] px-6 sticky top-0 z-50 dark:bg-slate-800 dark:text-white">
        <div>
          <Link to={"#"} className="text-2xl font-semibold">
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
              <div className="absolute hidden group-hover:block bg-white py-2 px-2 rounded-md shadow-md dark:bg-slate-800">
                <button
                  className="block hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-1 mb-1 rounded-sm"
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </button>
                <button
                  className="block hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-1 mb-1 rounded-sm"
                  onClick={() => setTheme("light")}
                >
                  Light
                </button>
                <button
                  className="block hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-1 mb-1 rounded-sm"
                  onClick={() => setTheme(matchMedia ? "dark" : "light")}
                >
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
