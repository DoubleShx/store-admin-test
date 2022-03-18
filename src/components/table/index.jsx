import {
  CBadge,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

export const CustomTable = ({ fields, products, filters, onFilterChange }) => {
  return (
    <CContainer>
      <CTable className="custom_table">
        <CTableHead>
          <CTableRow>
            {fields.map((field) => (
              <CTableHeaderCell scope="col">{field}</CTableHeaderCell>
            ))}
          </CTableRow>
          <CTableRow>
            {Object.entries(fields).map((field, index) => {
              let fieldName = field[1]
              return (
                <CTableHeaderCell scope="col">
                  {" "}
                  <CCol>
                    <CFormInput
                      placeholder={fieldName}
                      name={fieldName}
                      aria-describedby="basic-addon2"
                      value={filters[fieldName]}
                      onChange={(e) => onFilterChange(e)}
                    />
                  </CCol>
                </CTableHeaderCell>
              );
            })}
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {products.map((product) => (
            <CTableRow>
              {fields.map((tdProp) => (
                <CTableDataCell>
                  {typeof product[tdProp] !== "boolean" ? (
                    product[tdProp]
                  ) : (
                    <CBadge
                      color={product[tdProp] ? "success" : "danger"}
                    >{`${product[tdProp]}`}</CBadge>
                  )}
                </CTableDataCell>
              ))}
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </CContainer>
  );
};
