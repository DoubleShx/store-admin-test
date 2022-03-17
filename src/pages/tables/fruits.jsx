import {
  CButton,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CRow,
} from "@coreui/react";
import { useState } from "react";
import { CompanyInfo } from "../../components/companyInfo";
import { BreadCrumbs } from "../../components/breadcrumbs";
import { useEffect } from "react";
import { httpGet } from "../../api";


function Fruits() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getData()
  }, [])
  
  const getData = () => {
    httpGet({
      url: "variations"
    })
    .then(res => {
      if (res.data) {
        console.log(res.data)
      }
    })
    .catch(err => console.log(err))
  }


  return (
    <div className="content_side fruits_page">
      <BreadCrumbs
        pageHistory={[
          { name: "test", link: "#" },
          { name: "login", link: "/login" },
        ]}
      />
      <CCardBody className="content_body p-relative">
        <CCardHeader>
          <CompanyInfo />
          <span className="website_info">Admin Panel</span>
        </CCardHeader>
        <CRow className="main_content_row d-flex align-middle justify-content-center">

        </CRow>
      </CCardBody>
    </div>
  );
}

export default Fruits;
