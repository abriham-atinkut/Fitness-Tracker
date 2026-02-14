import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 text-gray-600 p-6 border-t border-gray-200 dark:bg-gray-950 dark:text-gray-400 dark:border-gray-800">
        <div className="mb-4">
          <h2 className="font-semibold text-gray-800 dark:text-gray-200">Fitness Tracker</h2>
          <p>Track workouts, monitor progress, stay consistent.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="mb-4">
            <h3 className="dark:text-gray-500">Brand</h3>
            <div className="grid grid-cols-1 ml-2">
              <Link to={`#`}>GitHub</Link>
              <Link to={`#`}>LinkedIn</Link>
              <Link to={`#`}>Twitter/X</Link>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="dark:text-gray-500">Product Links</h3>
            <div className="grid grid-cols-1 ml-2">
              <Link to={`#`}>Home</Link>
              <Link to={`#`}>Dashboard</Link>
              <Link to={`#`}>Log Workout</Link>
              <Link to={`#`}>Workout History</Link>
              <Link to={`#`}>Features</Link>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="dark:text-gray-500">Resources</h3>
            <div className="grid grid-cols-1 ml-2">
              <Link target="_blank" to={`#`}>
                GitHub Repository
              </Link>
              <Link to={`#`}>Contact</Link>
              <Link to={`#`}>Privacy Policy</Link>
              <Link to={`#`}>Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="text-center">
          &copy; {new Date().getFullYear()} FitnessTracker. Built by Abriham
          Atinkut.
        </div>
      </footer>
    </>
  );
};

export default Footer;
