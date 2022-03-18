import {
  CNavItem,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import { Link } from "react-router-dom";

export default function SideBar({breadcrumbs}) {
  console.log('breadcrubms', breadcrumbs)
  return (
    <CSidebar>
      <CSidebarBrand></CSidebarBrand>
      <CSidebarNav>
        <CNavItem className={`${breadcrumbs[0] === 'active' ? 'active' : ''}`}>
          <Link className="nav-link" to="/active">
            <img src="assets/icons/layout/active.png" alt="active" />
            <span>Active</span>
          </Link>
        </CNavItem>
        <CNavItem className={`${breadcrumbs[0] === 'inactive' ? 'active' : ''}`}>
          <Link className="nav-link" to="/inactive">
            <img src="assets/icons/layout/inactive.png" alt="inactive" />
            <span>Inactive</span>
          </Link>
        </CNavItem>
        <CNavItem className={`${breadcrumbs[0] === 'notes' ? 'active' : ''}`}>
          <Link className="nav-link" to="/notes">
            <img
              classname="pushnotifications_link"
              src="assets/icons/layout/push_notifications.png"
              alt="notyf"
            />
            <span>Notes</span>
          </Link>
        </CNavItem>
        <CNavItem className={`${breadcrumbs[0] === 'security' ? 'active' : ''}`}>
          <Link className="nav-link" to="/security">
            <img src="assets/icons/layout/blocked.png" alt="blocked" />
            <span>Security</span>
          </Link>
        </CNavItem>
        <CNavItem className={`${breadcrumbs[0] === 'fruits' ? 'active' : ''}`}>
          <Link to="/fruits" className="active nav-link">
            <img src="assets/icons/layout/events.png" alt="events" />
            <span>Fruits</span>
          </Link>
        </CNavItem>
      </CSidebarNav>
      <CSidebarToggler />
    </CSidebar>
  );
}
