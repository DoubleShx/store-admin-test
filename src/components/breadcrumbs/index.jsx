import { Link } from "react-router-dom";

export const BreadCrumbs = (props) => {
  return (
    <div className="breadcrumbs-wrapper">
      {props.pageHistory.map((page, index) => (
        <span className="d-flex">
          <Link
            className="breadcrumbs"
            to={`${page.link ? page.link : "/login"}`}
          >
            {page.name}
          </Link>
          <p>{index !== props.pageHistory.length - 1 ? " -> " : ""}</p>
        </span>
      ))}
    </div>
  );
};
