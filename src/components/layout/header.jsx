import {
  CCol,
  CContainer,
  CNavbar,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CRow,
} from "@coreui/react";
import { useState } from "react";
import { CompanyInfo } from "../companyInfo";

const headerLinksArray = ["home", "users", "txns", "pg", "account"];

const HeaderLinks = (props) => {
  return (
    <CNavbarNav>
      {headerLinksArray.map((item, index) => (
        <CNavItem key={index}>
          <CNavLink href={`/${item}`} active={props.breadcrumbs[0] === item}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </CNavLink>
        </CNavItem>
      ))}
    </CNavbarNav>
  );
};

const UserInfo = () => {
  const [isOnline, setIsOnline] = useState(true);
  return (
    <CCol xs="4" sm="4" md="6" className="header_user_info-wrapper">
      <div className="user_info">
        <span className={`user_avatar-wrapper ${isOnline ? "online" : ""}`}>
          <img src="assets/avatar.png" alt="ava" />
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
    </CCol>
  );
};

export default function Header(props) {
  return (
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
  );
}
