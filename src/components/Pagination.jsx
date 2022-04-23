import React, { useState } from "react";
import "./pagination.scss";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const [activePage, setActivePage] = useState(1);

  const totalPageNumbers = Math.ceil(totalItems / itemsPerPage);
  const switchPage = (pageClicked) => {
    if (pageClicked < 1) pageClicked = 1;
    if (pageClicked > totalPageNumbers) pageClicked = totalPageNumbers;
    setActivePage(pageClicked);
    paginate(pageClicked);
  };

  return (
    <div className="Page mt-3">
      <ul className="pagination justify-content-center">
        <li
          onClick={() => switchPage(activePage - 1)}
          className={1 === activePage ? "page-item disabled" : "page-item"}
        >
          <p className="page-link">Back</p>
        </li>
        {Array.from({ length: totalPageNumbers }, (item, index) => (
          <li
            onClick={() => switchPage(index + 1)}
            key={index}
            className={
              index + 1 === activePage ? "page-item active" : "page-item"
            }
          >
            <p className="page-link">{index + 1}</p>
          </li>
        ))}
        <li
          onClick={() => switchPage(activePage + 1)}
          className={
            totalPageNumbers === activePage ? "page-item disabled" : "page-item"
          }
        >
          <p className="page-link">Next</p>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
