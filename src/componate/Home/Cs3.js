import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaRegCircleCheck } from "react-icons/fa6";

function Cs3() {
  return (
    <>
      <div className="w-100 mt-5">
        <Container >
          <Row>
            <Col lg={6}>
              <div className="fs-6" style={{ color: "gray" }}>
                WHO WE ARE
              </div>
              <div className="fs-2 lh-1 fw-bolder mt-3">
                Unleashing Potential with Creative Strategy
              </div>
              <div className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </div>
              <div className="d-flex mt-4">
                <FaRegCircleCheck color="#388da8" className="fs-4 fw-light" />
                <div className="ms-2">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className="d-flex mt-3">
                <FaRegCircleCheck color="#388da8" className="fs-4 fw-light" />
                <div className="ms-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </div>
              </div>
              <div className="mt-3 ">
                <FaRegCircleCheck
                  color="#388da8"
                  className="fs-4 fw-light me-2 "
                />
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </div>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={6} className="mt-lg-0 mt-3">
                  <img
                    className="w-100 rounded"
                    src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/about-company-1.jpg"
                    alt=""
                  />
                </Col>
                <Col lg={6} className="d-flex flex-column justify-content-between">
                  <img
                    className="w-100 rounded mt-lg-0 mt-3"
                    src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/about-company-2.jpg"
                    alt=""
                  />
                  <img
                    className="w-100 rounded mt-lg-0 mt-3"
                    src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/about-company-3.jpg"
                    alt=""
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Cs3;
