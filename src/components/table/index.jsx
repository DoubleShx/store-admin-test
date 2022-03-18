import {
  CBadge,
  CCol,
  CContainer,
  CFormInput,
  CPagination,
  CPaginationItem,
  CSpinner,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

export const CustomTable = ({ fields, products, filters, onFilterChange, currentPage, setCurrentPage, pagesCount, fetchingData }) => {
  return (
    <CContainer>
      <CTable className={`custom_table ${fetchingData ? 'with_loader' : ''}`}>
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
        <CSpinner size="sm" variant="grow"/>
        {!products.length && !fetchingData ? <span className="table_no_data-info">There are no data with this params</span> : null}
      </CTable>
      <CPagination aria-label="" className="custom_table_pagination">
  <CPaginationItem aria-label="Previous" disabled={!pagesCount || +currentPage === 1} onClick={()=>setCurrentPage(+currentPage-1)}>
    <span aria-hidden="true">&laquo;</span>
  </CPaginationItem>
  {[...Array(+pagesCount).keys()].map(i => (
    <CPaginationItem active={+currentPage === +i+1} onClick={()=>setCurrentPage(i+1)}>{i+1}</CPaginationItem>
  ))}
  <CPaginationItem aria-label="Next" disabled={!pagesCount || +pagesCount === +currentPage} onClick={()=>setCurrentPage(+currentPage+1)}>
    <span aria-hidden="true">&raquo;</span>
  </CPaginationItem>
</CPagination>
    </CContainer>
  );
};
