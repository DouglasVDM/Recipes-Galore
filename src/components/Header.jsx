import React, {useEffect} from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import {gapi} from "gapi-script";
import AuthButton from "./AuthButton";

const Header = () => {
  const clientId = "166169580900-ul4a6ju75s75np2ue8h9i44vtl08b5j8.apps.googleusercontent.com";

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId, 
        scope: ""
      })
    }
    gapi.load("client:auth2", start);
  });

  return (
    <Navbar expand="md" className="h-100 w-100 text-light">
      <Navbar.Toggle aria-controls="navbarResponsive">
        <span className="logo-text" style={{fontStyle: 'italic'}}><strong>Recipes Galore</strong></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarResponsive">
        <Navbar.Brand href="#home">
            <span className="logo-text" style={{fontStyle: 'italic'}}>Recipes Galore</span>
        </Navbar.Brand>
        <Nav className="navText ml-auto">
            <h6 className="text-center py-4 px-4 text-dark lh-lg">
            Search recipes from all over the world. <br></br>Create an account to
            save your favorite recipes. ✨<br></br>
            </h6>
        </Nav>
        <Form className="signIn-container d-flex mx-5">
            <AuthButton/>
        </Form>
      </Navbar.Collapse>
      
    </Navbar>
  );
};

export default Header;
