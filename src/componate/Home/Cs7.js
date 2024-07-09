import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Cs7() {
  return (
    <>
      <div
        style={{
          marginTop: "100px",
          backgroundColor: "#F8FBFC",
          paddingTop: "60px",
        }}
      >
        <Container>
          <div className="text-center fs-2 fw-bolder">Services</div>
          <div
            className="w-100 d-flex justify-content-center align-items-center"
            style={{ height: "3px" }}
          >
            <div
              className="h-100 mt-3"
              style={{ backgroundColor: "#388da8", width: "60px" }}
            ></div>
          </div>
          <div className="text-center mt-3">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </div>
          <Row>
            <Col lg={6} className="p-5">
              <div style={{ border: "1px solid grey" }}>1</div>
            </Col>
            <Col lg={6}>2</Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Cs7;
