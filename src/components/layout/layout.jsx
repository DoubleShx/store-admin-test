import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { getBreadCrumbs } from "../../utils/breadcrubms";
import Header from "./header";
import SideBar from "./sideBar";

export default function Layout(props) {
  const [breadCrumbs, setBreadCrumbs] = useState([]);
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const cookie = new Cookies();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setBreadCrumbs(getBreadCrumbs(location));
  }, [location]);

  useEffect(() => {
    if (breadCrumbs[0] === "login") {
      if (cookie.get('access_token')?.length)
      navigate("/fruits");
    }
  }, [breadCrumbs]);



  return (
    <div className="layout">
      <SideBar breadcrumbs={breadCrumbs} />
      <Header breadcrumbs={breadCrumbs} />
    </div>
  );
}
