import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsBarChart, BsBriefcase, BsCardChecklist } from "react-icons/bs";
import "./CS2.css";

function Cs2() {
  return (
    <>
      <div className="w-100 mt-5" style={{ backgroundColor: "#F8FBFC" }}>
        <Container>
          <Row>
            <Col className="p-2 pt-5 pb-5 d-flex">
              <div
                className="p-4"
                style={{ backgroundColor: "rgba(56, 141, 168,0.40)" }}
              >
                <BsBriefcase
                  className="fs-2 fw-bolder"
                  style={{ color: "#388da8" }}
                />
              </div>
              <div className="ms-2">
                <div className="fs-5">Lorem Ipsum</div>
                <div className="lh-1 cfs mt-2">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </div>
              </div>
            </Col>
            <Col className="p-2 pt-5 pb-5 d-flex">
              <div
                className="p-4"
                style={{ backgroundColor: "rgba(56, 141, 168,0.40)" }}
              >
                <BsCardChecklist
                  className="fs-2 fw-bolder"
                  style={{ color: "#388da8" }}
                />
              </div>
              <div className="ms-2">
                <div className="fs-5">Dolor Sitema</div>
                <div className="lh-1 cfs mt-2">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip exa
                </div>
              </div>
            </Col>
            <Col className="p-2 pt-5 pb-5 d-flex">
              <div
                className="p-4"
                style={{ backgroundColor: "rgba(56, 141, 168,0.40)" }}
              >
                <BsBarChart
                  className="fs-2 fw-bolder"
                  style={{ color: "#388da8" }}
                />
              </div>
              <div className="ms-2">
                <div className="fs-5">Sed ut perspiciatis</div>
                <div className="lh-1 cfs mt-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Cs2;
