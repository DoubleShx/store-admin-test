import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarNav,
  CNavItem,
  CRow,
} from "@coreui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { BreadCrumbs } from "../breadcrumbs";
import { CompanyInfo } from "../companyInfo";

const headerLinksArray = ["home", "users", "txns", "pg", "account"];

const HeaderLinks = (props) => {
  return (
    <CNavbarNav>
      {headerLinksArray.map((item, index) => (
        <CNavItem key={index}>
          <Link to={`/${item}`} className={`nav-link ${props.breadcrumbs[0] === item ? 'active' : ''}`}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        </CNavItem>
      ))}
    </CNavbarNav>
  );
};

const UserInfo = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [dropdown, setDropdown] = useState(false)
  const cookie = new Cookies()
  const navigate = useNavigate()
  const Logout = () => {
    cookie.remove('access_token', { path: '/' })
    navigate('/login')
    setDropdown(false)
  }
  return (
    <CCol xs="4" sm="4" md="6" className="header_user_info-wrapper">
      <div className="user_info" onClick={()=>setDropdown(!dropdown)}>
        <span className={`user_avatar-wrapper ${isOnline ? "online" : ""}`}>
          <img src="assets/icons/Avatar.png" alt="ava" />
        </span>
        <span>
          <p className="user_name">James Bond</p>
          <img
            className="dropdown_icon"
            src="assets/icons/dropdown.png"
            alt="dropdown"
            
          />
          <img
            className="settings_icon"
            src="assets/icons/settings.png"
            alt="settings"
          />
        </span>
      </div>
      <CCollapse visible={dropdown}>
      <CCard className="user_dropdown">
        <CCardBody>
        <CButton onClick={Logout}>Logout</CButton>
        </CCardBody>
      </CCard>
    </CCollapse>
    </CCol>
  );
};

export default function Header(props) {
  const getpageHistory = () => {
    return props.breadcrumbs.reduce((prevItem, item) => {
      if (item) {
        return [...prevItem, {name: item, link: `/${item}`}]
      }
      else return prevItem
    }, [{ name: "Home", link: "/home" },]) 
  }
  return (
    <>
    <CNavbar
      expand="lg"
      colorScheme="light"
      className="bg-white layout_header-nav"
    >
      <CContainer fluid className="header_fluid">
        <CompanyInfo />
        <CRow className="w-100">
          <CCol xs="8" sm="8" md="6" className="header_links-wrapper">
            <HeaderLinks breadcrumbs={props.breadcrumbs} />
          </CCol>

          <UserInfo />
        </CRow>
      </CContainer>
    </CNavbar>
    <BreadCrumbs
        pageHistory={getpageHistory()}
      />
    </>
  );
}
