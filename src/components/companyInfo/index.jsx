import { CNavbarBrand } from "@coreui/react";

export const CompanyInfo = () => {
  return (
    <CNavbarBrand href="#" className="layout_left_side">
      <img src="assets/icons/logo.png" alt="pb" />
      <div className="header_companny_description">
        <span>Toko</span>
        <span>Uzbekistan, Tsh</span>
      </div>
    </CNavbarBrand>
  );
};
