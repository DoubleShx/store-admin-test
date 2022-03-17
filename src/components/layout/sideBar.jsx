import { CBadge, CNavItem, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from "@coreui/react";

export default function SideBar(props) {
    return ( 
        <CSidebar>
  <CSidebarBrand></CSidebarBrand>
  <CSidebarNav>
    <CNavItem href="/active">
      <img src="assets/icons/layout/active.png" alt="active"/>
      <span>Active</span>
    </CNavItem>
    <CNavItem href="/inactive">
      <img src="assets/icons/layout/inactive.png" alt="inactive"/>
      <span>Inactive</span>
    </CNavItem>
      <CNavItem href="/notes" >
      <img classname="pushnotifications_link" src="assets/icons/layout/push_notifications.png" alt="notyf"/>
      <span>Notes</span>
      </CNavItem>
      <CNavItem href="/security">
      <img src="assets/icons/layout/blocked.png" alt="blocked"/>
      <span>Security</span>
      </CNavItem>
      <CNavItem href="/fruits" className="active">
      <img src="assets/icons/layout/events.png" alt="events"/>
      <span>Fruits</span>
      </CNavItem>
  </CSidebarNav>
  <CSidebarToggler/>
</CSidebar>
    );
  }
  