import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import LandingPage from "./features/landing/LandingPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
