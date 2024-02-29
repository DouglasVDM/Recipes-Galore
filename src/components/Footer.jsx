import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
  return (
    <footer className="footer">
      <Row className="justify-content-md-center">
        <Form.Group controlId="formEmail" className="mb-auto">
          <Row>
            <Col sm={6}>
              {/* <Form.Label className="label-success"><strong>Subscribe for new recipes</strong></Form.Label>
              <Form.Control type="email" placeholder="example@example.com" /> */}
            </Col>
            <Col sm={2}>
              {/* <Button className="justify-content-md-center mt-4" variant="success">
                Submit
              </Button> */}
            </Col>
            <Col sm={4} className="text-center mt-5">
                © {currentYear} Copyright :
                <a className="text-black" href="#/">
                    - Created by C.T.C
                </a>
            </Col>
          </Row>
        </Form.Group>
      </Row>
    </footer>
  );
};

export default Footer;


