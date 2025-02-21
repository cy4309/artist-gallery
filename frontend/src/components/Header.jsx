import Icon from "@mdi/react";
import { mdiCloudOutline, mdiThemeLightDark } from "@mdi/js";
import BaseButton from "@/components/BaseButton";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "@/stores/features/styleSlice";
import { useNavigate } from "react-router-dom";
// import Login from "@/containers/Login";
// import { showSwal } from "@/utils/notification";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [isLoginOpen, setIsLoginOpen] = useState(false);
  // const isAuthenticated = localStorage.getItem("userName");

  // const handleAuth = () => {
  //   if (isAuthenticated) {
  //     // dispatch(logout());
  //     showSwal(true, "You have been logged out.");
  //     setIsLoginOpen(false);
  //     localStorage.removeItem("userName");
  //     navigate("/");
  //   } else {
  //     setIsLoginOpen(true);
  //   }
  // };

  return (
    <nav className="container py-4 flex justify-between items-center">
      <div className="flex cursor-pointer" onClick={() => navigate("/")}>
        <Icon path={mdiCloudOutline} size={1} className="mr-2" />
        <h1>Cloud 3D Service</h1>
      </div>
      <ul className="flex">
        <li
          className="mx-4 cursor-pointer"
          onClick={() => navigate("/underground")}
        >
          un
        </li>
        <li className="mx-4 cursor-pointer" onClick={() => navigate("/boan")}>
          ar
        </li>
        <li className="mx-4 cursor-pointer" onClick={() => navigate("/about")}>
          ab
        </li>
      </ul>
      <div className="flex justify-center items-center">
        <p className="text-sm mr-4 flex items-center">V0.0.1</p>
        <BaseButton
          className="mr-2 hover:bg-hoverGray"
          onClick={() => dispatch(toggleDarkMode())}
        >
          <Icon path={mdiThemeLightDark} size={1} />
        </BaseButton>
        {/* <BaseButton
          label={isAuthenticated ? "Log Out" : "Log In"}
          onClick={handleAuth}
          // className={`text-white bg-primaryGray hover:bg-black dark:bg-white dark:text-primaryGray`}
          className={`${
            isAuthenticated
              ? "hover:bg-hoverGray dark:bg-primaryGray dark:text-white hover:dark:bg-hoverGray"
              : "bg-primaryGray text-white hover:bg-hoverGray dark:bg-white dark:text-primaryGray hover:dark:bg-hoverGray"
          }`}
        /> */}
      </div>

      {/* <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} /> */}
    </nav>
  );
};

export default Nav;
