import {
    CCardBody,
    CRow,
  } from "@coreui/react";
import { BreadCrumbs } from "../../components/breadcrumbs";

export const Page404 = () => {
    return (
        <div className="content_side page_404">
        <BreadCrumbs
          pageHistory={[
          ]}
        />
        <CCardBody className="content_body">
          <CRow className="main_content_row d-flex align-middle justify-content-center">
            <h2>Page Doesn't exist | 404</h2>
            <img src="assets/404.jpg" alt="404"/>
          </CRow>
        </CCardBody>
      </div>
    )
}