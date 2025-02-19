import { useEffect } from "react";
import { Link } from "react-router-dom";
import CycLogo from "@/assets/images/CYC_Logo-1.png";
import BoanEyes from "@/assets/images/boansEyes.jpg";
import wenChiasEyes from "@/assets/images/wenChiasEyes.jpg";
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleDarkMode } from '@/features/styleSlice.js';

const Header = () => {
  // const navigate = useNavigate();
  // const handleNavigate = () => {
  //   navigate('/aboutcyc');
  // };

  const openNav = (num) => {
    if (num === 0) {
      document.getElementsByClassName("sideNav")[0].style.height = "100%";
    }
    if (num === 1) {
      document.getElementsByClassName("sideNav")[1].style.height = "100%";
    }
    document.querySelector("body").style.marginTop = "300vh";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("body").style.transition = "1.5s";
  };

  const closeNav = (num) => {
    if (num === 0) {
      document.getElementsByClassName("sideNav")[0].style.height = "0";
    }
    if (num === 1) {
      document.getElementsByClassName("sideNav")[1].style.height = "0";
    }
    document.querySelector("body").style.marginTop = "0";
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("body").style.transition = ".5s";
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeNav(0);
        closeNav(1);
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
      <div className="container-fluid">
        <div id="banner-bar" className="row">
          <div id="blank" className="col-3"></div>
          <div className="col-6 announcement">
            <div className="announcement__content">
              <p className="announcement__content__text">Hello ,</p>
              <ul className="announcement__content__list">
                <li className="announcement__content__list__item">are you ready for a cultural adventure?</li>
                <li className="announcement__content__list__item">Please wear a mask when you visiting cultural events.</li>
              </ul>
            </div>
          </div>
          <div className="col-3 text-right">
            <button id="instagramBtn" className="m-2 btn btn">
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </button>
            <button id="youtubeBtn" className="m-2 btn btn">
              <font-awesome-icon icon="fa-brands fa-youtube" />
            </button>
            <button id="i18nBtn" className="m-2 btn btn">
              中
            </button>
          </div>
        </div>
      </div>
      {/* header */}
      <header className="container-fluid">
        <div id="logo" className="col-4">
          <Link to="/">
            <img id="logoImg" src={CycLogo} alt="CYC_Entertainment_Studio" />
          </Link>
        </div>
        <nav id="menu" className="col-4">
          <ul>
            <li className="d-flex align-items-center">
              <div className="mr-2">Special Column</div>
              <div className="sideNav row">
                <a
                  href="#"
                  className="closebtn"
                  onClick={(e) => {
                    e.preventDefault();
                    closeNav(0);
                  }}
                >
                  &times;
                </a>
                <Link
                  to="/boan"
                  id="boansEyes"
                  className="col-12"
                  onClick={(e) => {
                    e.preventDefault();
                    closeNav(0);
                  }}
                >
                  <p className="hideText">BOAN</p>
                  <img src={BoanEyes} alt="" />
                </Link>
                <a
                  href="#"
                  id="wenChiasEyes"
                  className="col-12"
                  onClick={(e) => {
                    e.preventDefault();
                    closeNav(0);
                  }}
                >
                  <p className="hideText">WENCHIA</p>
                  <img src={wenChiasEyes} alt="" />
                </a>
                <a
                  href="#"
                  className="col-12"
                  onClick={(e) => {
                    e.preventDefault();
                    closeNav(0);
                  }}
                ></a>
                <a
                  href="#"
                  className="col-12"
                  onClick={(e) => {
                    e.preventDefault();
                    closeNav(0);
                  }}
                ></a>
              </div>
              <div id="sideNavOpen">
                <a
                  className="nav-arrow"
                  onClick={(e) => {
                    e.preventDefault();
                    openNav(0);
                  }}
                ></a>
              </div>
            </li>
            <li className="d-flex align-items-center">
              <div className="mr-2">Explore Culture</div>
              <div className="sideNav row">
                <a
                  href="#"
                  className="closebtn"
                  onClick={(e) => {
                    e.preventDefault();
                    closeNav(1);
                  }}
                >
                  &times;
                </a>
                <Link
                  to="/underground"
                  className="col-3"
                  style={{ border: "3px solid #fff" }}
                  onClick={(e) => {
                    e.preventDefault();
                    closeNav(1);
                  }}
                >
                  underground
                </Link>
                <a
                  href="#"
                  className="col-3"
                  style={{ border: "3px solid #fff" }}
                  onClick={(e) => {
                    e.preventDefault();
                    closeNav(1);
                  }}
                >
                  traditional
                </a>
                <a
                  href="#"
                  className="col-3"
                  style={{ border: "3px solid #fff" }}
                  onClick={(e) => {
                    e.preventDefault();
                    closeNav(1);
                  }}
                >
                  indigenous
                </a>
                <a
                  href="#"
                  className="col-3"
                  style={{ border: "3px solid #fff" }}
                  onClick={(e) => {
                    e.preventDefault();
                    closeNav(1);
                  }}
                >
                  western
                </a>
              </div>
              <div id="sideNavOpen">
                <a
                  className="nav-arrow"
                  onClick={(e) => {
                    e.preventDefault();
                    openNav(1);
                  }}
                ></a>
              </div>
            </li>
            <li className="d-flex align-items-center">
              <div className="mr-2">
                <Link
                  to="/aboutcyc"
                  className="col-3"
                  onClick={(e) => {
                    e.preventDefault();
                    closeNav(1);
                  }}
                >
                  <button className="loginBtn btn btn-link">About</button>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        <div id="loginArea" className="col-4 text-right">
          <Link to="/login">
            <button className="loginBtn btn btn-link">Log in</button>
          </Link>
          <Link to="/signup">
            <button className="signupBtn btn btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sign up
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
