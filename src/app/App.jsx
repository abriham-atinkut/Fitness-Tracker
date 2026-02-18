import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import LandingPage from "../features/landing/pages/LandingPage.jsx";
import useTheme from "../store/theme";
import { useEffect } from "react";
import ErrorBoundary from "../components/error/ErrorBoundary.jsx";
import ErrorFallback from "../components/error/ErrorFallback.jsx";

function App() {
  const theme = useTheme((stata) => stata.theme);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("mode", theme);
  }, [theme]);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
