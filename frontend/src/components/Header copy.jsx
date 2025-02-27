import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CycLogo from "@/assets/images/CYC_Logo-1.png";
import BoanEyes from "@/assets/images/boansEyes.jpg";
import wenChiasEyes from "@/assets/images/wenChiasEyes.jpg";

const Header = () => {
  const [activeNav, setActiveNav] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveNav(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* banner-bar */}
      <div className="w-full bg-gray-800 text-white py-2 flex justify-between px-4">
        <div className="hidden md:block">&nbsp;</div>
        <div className="text-center flex-1">
          <p className="text-sm">
            Hello, Are you ready for a cultural adventure?
          </p>
        </div>
        <div className="flex space-x-2">
          <button className="btn">IG</button>
          <button className="btn">YT</button>
          <button className="btn">中</button>
        </div>
      </div>

      {/* header */}
      <header className="w-full flex justify-between items-center px-4 py-3 shadow-md">
        <div className="w-1/4">
          <Link to="/">
            <img
              src={CycLogo}
              alt="CYC_Entertainment_Studio"
              className="w-32"
            />
          </Link>
        </div>

        <nav className="flex space-x-6">
          {/* Special Column */}
          <div className="relative">
            <button className="text-lg" onClick={() => setActiveNav("special")}>
              Special Column
            </button>
            <div
              className={`absolute top-full left-0 bg-white shadow-md w-48 p-2 rounded-md transition-all duration-300 ${
                activeNav === "special" ? "block" : "hidden"
              }`}
            >
              <button
                className="absolute top-1 right-2 text-xl"
                onClick={() => setActiveNav(null)}
              >
                &times;
              </button>
              <Link
                to="/boan"
                className="block py-2"
                onClick={() => setActiveNav(null)}
              >
                <p className="text-sm">BOAN</p>
                <img src={BoanEyes} alt="Boan" className="w-full" />
              </Link>
              <Link
                to="/wenchia"
                className="block py-2"
                onClick={() => setActiveNav(null)}
              >
                <p className="text-sm">WENCHIA</p>
                <img src={wenChiasEyes} alt="Wenchia" className="w-full" />
              </Link>
            </div>
          </div>

          {/* Explore Culture */}
          <div className="relative">
            <button className="text-lg" onClick={() => setActiveNav("explore")}>
              Explore Culture
            </button>
            <div
              className={`absolute top-full left-0 bg-white shadow-md w-48 p-2 rounded-md transition-all duration-300 ${
                activeNav === "explore" ? "block" : "hidden"
              }`}
            >
              <button
                className="absolute top-1 right-2 text-xl"
                onClick={() => setActiveNav(null)}
              >
                &times;
              </button>
              <Link
                to="/underground"
                className="block py-2"
                onClick={() => setActiveNav(null)}
              >
                Underground
              </Link>
              <Link
                to="/traditional"
                className="block py-2"
                onClick={() => setActiveNav(null)}
              >
                Traditional
              </Link>
              <Link
                to="/indigenous"
                className="block py-2"
                onClick={() => setActiveNav(null)}
              >
                Indigenous
              </Link>
              <Link
                to="/western"
                className="block py-2"
                onClick={() => setActiveNav(null)}
              >
                Western
              </Link>
            </div>
          </div>

          {/* About */}
          <Link to="/aboutcyc" className="text-lg">
            About
          </Link>
        </nav>

        <div className="space-x-2">
          <Link to="/login">
            <button className="px-4 py-2 border border-gray-400 rounded-md">
              Log in
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Sign up
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
