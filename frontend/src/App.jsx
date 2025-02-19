import { useEffect, Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { router_path } from "@/routers";
import LoadingIndicator from "@/components/LoadingIndicator";
import MainLayout from "@/layouts/MainLayout";
import "@/assets/styles/app.css";

// const ProtectedRoute = ({ children }) => {
//   const navigate = useNavigate();
//   // const isAuthenticated = useSelector(
//   //   (state: RootState) => state.auth.isAuthenticated
//   // );
//   const isAuthenticated = localStorage.getItem("userName");
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate(router_path.index);
//     }
//   }, [isAuthenticated, navigate]);

//   return isAuthenticated ? children : null;
// };

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Underground = lazy(() => import("@/pages/Underground"));
const Boan = lazy(() => import("@/pages/Boan"));
const Signup = lazy(() => import("@/pages/Signup"));
const Error = lazy(() => import("@/pages/Error"));

const App = () => {
  const isDarkMode = useSelector((state) => state.style.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path={router_path.index}
            element={
              <Suspense fallback={<LoadingIndicator />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path={router_path.about}
            element={
              <Suspense fallback={<LoadingIndicator />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path={router_path.underground}
            element={
              // <ProtectedRoute>
              <Suspense fallback={<LoadingIndicator />}>
                <Underground />
              </Suspense>
              // </ProtectedRoute>
            }
          />
          <Route
            path={router_path.boan}
            element={
              <Suspense fallback={<LoadingIndicator />}>
                <Boan />
              </Suspense>
            }
          />
          <Route
            path={router_path.signup}
            element={
              <Suspense fallback={<LoadingIndicator />}>
                <Signup />
              </Suspense>
            }
          />
          <Route path={router_path.error} element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
