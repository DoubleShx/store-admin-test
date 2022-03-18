import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Header from "./header";
import SideBar from "./sideBar";

export default function Layout(props) {
  const [breadCrumbs, setBreadCrumbs] = useState([]);
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const cookie = new Cookies();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getBreadCrumbs();
  }, [location]);

  useEffect(() => {
    console.log(breadCrumbs)
    if (breadCrumbs[0] === "login") {
      if (cookie.get('access_token')?.length)
      navigate("/fruits");
    }
  }, [breadCrumbs]);

  const getBreadCrumbs = () => {
    let currentBreadcrumbs = location.pathname
      .match(/([a-z||A-Z||0-9||-]*)/gm)
      .filter((item) => item);
    setBreadCrumbs(currentBreadcrumbs);
  };

  return (
    <div className="layout">
      <SideBar breadcrumbs={breadCrumbs} />
      <Header breadcrumbs={breadCrumbs} />
    </div>
  );
}
