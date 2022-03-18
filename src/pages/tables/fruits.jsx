import {
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import { useState } from "react";
import { CompanyInfo } from "../../components/companyInfo";
import { BreadCrumbs } from "../../components/breadcrumbs";
import { useEffect } from "react";
import { httpGet } from "../../api";
import { CustomTable } from "../../components/table";
import { getTableFilters } from "../../utils/tableOperations";

const fields = [
  "id",
  "sku",
  "supplier",
  "barcode",
  "productName",
  "showMarket",
  "technicalCard",
];

function Fruits() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filters, setFilter] = useState(getTableFilters(fields));
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    httpGet({
      url: "variations",
    })
      .then((res) => {
        if (res.data.items ?? []) {
          setProducts(restructureFetchedProducts(res.data.items));
          setFilteredProducts(restructureFetchedProducts(res.data.items));
        }
      })
      .catch((err) => console.log(err));
  };

  const restructureFetchedProducts = (products) => {
    return products.map((product) => ({
      ...product,
      productName: product.importRecord?.productName ?? "",
    }));
  };

  const getFilteredProducts = (e) => {
    let newFilter = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    setFilter(newFilter);
    filterAndSortFunction(newFilter, products);
  };

  const filterAndSortFunction = (filters, productsArray = products) => {
    let currentFilters = Object.entries(filters)
    console.log('filtersArray', currentFilters)
    let filteredArray = productsArray.filter((product) => {
      let filterResult = true
      currentFilters.forEach(filter => {
        // console.log('product', (product[filter[0]]).includes('119'))
        if (filterResult) {
          // console.log(product[filter[0]].includes('119'))
        if (typeof product[filter[0]] === 'number' && !((`${product[filter[0]]}`).includes(filter[1]))) {
          filterResult = false
        }
        else if (typeof product[filter[0]] === 'string' && !(`${product[filter[0]]}`.toUpperCase().includes(filter[1].toUpperCase()))) {
          filterResult = false
        }
      }
      })
      return filterResult
    })
  let sortedAndFilteredArray = filteredArray.sort((a, b) => a.productName.toUpperCase().localeCompare(b.productName.toUpperCase()))
    setFilteredProducts(sortedAndFilteredArray)
  };

  return (
    <div
      className="content_side fruits_page"
    >
      <BreadCrumbs
        pageHistory={[
          { name: "test", link: "#" },
          { name: "fruits", link: "/fruits" },
        ]}
      />
      <CCardBody className="content_body p-relative">
        <CCardHeader>
          <CompanyInfo />
          <span className="website_info">Admin Panel</span>
        </CCardHeader>
        <CRow className="main_content_row d-flex align-middle justify-content-center">
          <CustomTable
            fields={fields}
            products={filteredProducts}
            filters={filters}
            onFilterChange={getFilteredProducts}
          />
        </CRow>
      </CCardBody>
    </div>
  );
}

export default Fruits;
