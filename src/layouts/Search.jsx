import React, { Component, useRef } from "react";
import {useNavigate} from "react-router-dom"
import { Button, Form, FormControl } from "react-bootstrap";

const Search = () => {
  var searchForm = document.getElementById("searchID");
  var searchInputValue = "";
  if (searchForm) {
    searchInputValue = searchForm.value;
  }

  let navigate =useNavigate();

  function handleSubmit(e) {
    searchForm = document.getElementById("searchID");
    return navigate ("/tours/soeg/" + searchForm.value);
  }

  return (
    <Form className="d-flex p-2" onSubmit={handleSubmit}>
      <FormControl
        type="text"
        placeholder="Search"
        className="me-2 search"
        id="searchID"
      />
      <Button type="Submit" variant="outline-light">Search</Button>
    </Form>
  );
};

export default Search;