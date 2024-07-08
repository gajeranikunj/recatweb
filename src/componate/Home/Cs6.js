import { Button } from "bootstrap";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Cs6() {
  return (
    <>
      <Container className="mt-5">
        <div className="mt-5">
          <Row>
            <Col className="p-0">
              <img
                src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/features-1.jpg"
                alt=""
                className="w-100 "
                style={{ borderRadius: "20px" }}
              />
            </Col>
            <Col>
              <div
                style={{ backgroundColor: "#F5F9FA", margin: "60px" }}
                className="rounded-3 p-4"
              >
                <div className="fw-bolder fs-4 lh-1">
                  Corporis temporibus maiores provident
                </div>
                <div style={{ color: "grey" }} className="mt-3">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </div>
                <button className="ps-4 pe-4 pt-1 pb-1 text-light rounded mt-3 fw-bolder" style={{backgroundColor:"#388DA8",border:"0px"}}>Learn More</button>
              </div>
            </Col>
          </Row>
        </div>
        <div></div>
      </Container>
    </>
  );
}

export default Cs6;
