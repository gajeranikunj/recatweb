import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoEaselOutline } from "react-icons/io5";
import { BsBrightnessHigh, BsPatchCheck } from "react-icons/bs";
function Cs6() {
  return (
    <>
      <Container style={{ marginTop: "150px" }}>
        <div className="mt-5">
          <Row>
            <Col lg={6} className="p-0">
              <img
                src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/features-1.jpg"
                alt=""
                className="w-100 "
                style={{ borderRadius: "20px" }}
              />
            </Col>
            <Col lg={6}>
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
                <button
                  className="ps-4 pe-4 pt-1 pb-1 text-light rounded mt-3 fw-bolder"
                  style={{ backgroundColor: "#388DA8", border: "0px" }}
                >
                  Learn More
                </button>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: "100px" }}>
          <Row>
            <Col lg={6}>
              <div
                style={{ backgroundColor: "#F5F9FA", margin: "60px" }}
                className="rounded-3 p-4"
              >
                <div className="fw-bolder fs-4 lh-1">
                  Neque ipsum omnis sapiente quod quia dicta
                </div>
                <div style={{ color: "grey" }} className="mt-3">
                  Quidem qui dolore incidunt aut. In assumenda harum id iusto
                  lorena plasico mares
                </div>
                <div style={{ color: "grey" }} className="mt-3">
                  <IoEaselOutline style={{color:'#388da8'}} className="fs-5 me-2" /> Et corporis ea eveniet ducimus.
                </div>
                <div style={{ color: "grey" }} className="mt-3">
                <BsPatchCheck style={{color:'#388da8'}} className="fs-5 me-2" />   Exercitationem dolorem sapiente.
                </div>
                <div style={{ color: "grey" }} className="mt-3">
                <BsBrightnessHigh  style={{color:'#388da8'}} className="fs-5 me-2" />   Veniam quia modi magnam.
                </div>
                <button
                  className="ps-4 pe-4 pt-1 pb-1 text-light rounded mt-3 fw-bolder"
                  style={{ backgroundColor: "#388DA8", border: "0px" }}
                >
                  Learn More
                </button>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <img
                src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/features-2.jpg"
                alt=""
                className="w-100 "
                style={{ borderRadius: "20px" }}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Cs6;
