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
import Cookies from "universal-cookie";
import { Notyf } from "notyf";
import { useNavigate } from "react-router";
import { httpPost } from "../../api";

function LoginPage() {
  const [formsData, setFormsData] = useState({
    username: { value: "", changed: false },
    password: { value: "", changed: false },
    subdomain: { value: "toko", changed: true },
    formSubmitted: false,
  });
  let navigate = useNavigate();

  const inputFormChange = (e) => {
    setFormsData({
      ...formsData,
      [e.target.name]: { changed: true, value: e.target.value },
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const cookies = new Cookies();
    const notyf = new Notyf();
    const data = new URLSearchParams();
    data.append('_username', formsData.username.value);
    data.append('_password', formsData.password.value);
    data.append('_subdomain', formsData.subdomain.value);
    httpPost({
      url: "security/auth_check", 
      data,
    })
      .then((response) => {
        let expires = new Date(response.data.expires_at)
        if (response.status === 200) {
          cookies.set("access_token", response.data.token, {
            path: "/",
            expires
          });

          notyf.success("Вы успешно вошли в систему");
        }
        navigate("/fruits");
      })
      .catch((error) => {
        console.log(error);
        // notyf.error("Ошибка");
      });
  };

  return (
    <div className="content_side login_page">
      {/* <BreadCrumbs
        pageHistory={[
          { name: "test", link: "#" },
          { name: "login", link: "/login" },
        ]}
      /> */}
      <CCardBody className="content_body">
        <CCardHeader>
          <CompanyInfo />
          <span className="website_info">Admin Panel</span>
        </CCardHeader>
        <CRow className="main_content_row d-flex align-middle justify-content-center">
          <form className="login_form" onSubmit={(e) => onSubmitForm(e)}>
            <CInputGroup className="">
              <CCol className="form_group_wrapper">
                <label htmlFor="username">UserName</label>
                <CFormInput
                  id="username"
                  name="username"
                  type="text"
                  className={`${
                    !formsData.formSubmitted ? "not_sumbitted" : ""
                  }`}
                  placeholder="*field is required"
                  onChange={inputFormChange}
                  value={formsData.username.value}
                  required
                />
              </CCol>
            </CInputGroup>
            <CInputGroup className="">
              <CCol className="form_group_wrapper">
                <label htmlFor="password">Password</label>
                <CFormInput
                  id="password"
                  name="password"
                  type="password"
                  className={`${
                    !formsData.formSubmitted ? "not_sumbitted" : ""
                  }`}
                  placeholder="*field is required"
                  onChange={inputFormChange}
                  value={formsData.password.value}
                  required
                />
              </CCol>
            </CInputGroup>
            <CButton
              type="submit"
              color="primary"
              className="login_submit_button"
            >
              Login
            </CButton>
            <a href="/login" className="password_recover_link">
              Forgot your password?
            </a>
          </form>
        </CRow>
      </CCardBody>
    </div>
  );
}

export default LoginPage;
