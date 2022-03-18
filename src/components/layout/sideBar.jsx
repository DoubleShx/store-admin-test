import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from "@coreui/react";
import { Link } from "react-router-dom";

export default function SideBar(props) {
    return ( 
        <CSidebar>
  <CSidebarBrand></CSidebarBrand>
  <CSidebarNav>
    <Link className="nav-item" to="/active">
      <img src="assets/icons/layout/active.png" alt="active"/>
      <span>Active</span>
    </Link>
    <Link className="nav-item" to="/inactive">
      <img src="assets/icons/layout/inactive.png" alt="inactive"/>
      <span>Inactive</span>
    </Link>
      <Link className="nav-item" to="/notes" >
      <img classname="pushnotifications_link" src="assets/icons/layout/push_notifications.png" alt="notyf"/>
      <span>Notes</span>
      </Link>
      <Link className="nav-item" to="/security">
      <img src="assets/icons/layout/blocked.png" alt="blocked"/>
      <span>Security</span>
      </Link>
      <Link to="/fruits" className="active nav-item">
      <img src="assets/icons/layout/events.png" alt="events"/>
      <span>Fruits</span>
      </Link>
  </CSidebarNav>
  <CSidebarToggler/>
</CSidebar>
    );
  }
  