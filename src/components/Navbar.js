import React from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  //   SEARCH BAR TRICK - 1
  // const clickkk =() =>{
  //     let data = document.getElementById('search').value
  //     const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(data)}`;
  //     window.location.href = searchUrl;
  // }
  return (
    <div>
      <Navbar className={`bg-${props.mode} navbar-${props.mode} `}>
        <Container fluid>
          <Navbar.Brand href="#">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="nav-link">
                Home
              </Link>

              <Link to="/about" className="nav-link">
                About
              </Link>
            </Nav>
            <div key="inline-radio">
              <Form.Check
                inline
                label="1"
                name="group1"
                type="radio"
                id="inline-radio-1"
                onClick={props.togglemodeblack}
              />
              <Form.Check
                inline
                label="2"
                name="group1"
                type="radio"
                id="inline-radio-2"
                onClick={props.togglemodegrey}
              />
              <Form.Check
                inline
                label="3"
                name="group1"
                type="radio"
                id="inline-radio-3"
                onClick={props.togglemodeblue}
              />
              <Form.Check
                inline
                label="3"
                name="group1"
                type="radio"
                id="inline-radio-3"
                onClick={props.togglemodewhite}
              />
            </div>
            {/* <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Mode"
              className={`my-2 mx-3 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              onClick={props.togglemode}
            /> */}

            {/*  SEARCH BAR TRICK - 2 */ }
            <Form
              className="d-flex"
              action="https://www.google.com/search"
              method="GET"
              target="_blank" >
            
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id="search"
                name="q"
                required
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}


NavBar.propTypes =  {title : PropTypes.string.isRequired,
                    contact : PropTypes.string
}

NavBar.defaultProps = {
                    title : 'TextUtils>>>',
                    contact : 'Contact_Us'
}

