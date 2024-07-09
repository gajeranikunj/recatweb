import React, { useEffect, useState } from "react";
import { BsBinoculars, BsBoxSeam, BsBrightnessHigh } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";

function Cs5() {
  const [img, setimg] = useState(1);
  function tr(data) {
    for (let index = 0; index < 3; index++) {
      document.getElementById("showcolor").children[index].style.background = "color-mix(in srgb, #388da8, transparent 95%)";
    }
    document.getElementById("showcolor").children[data - 1].style.background = "color-mix(in srgb, #388da8, transparent 80%)";
  }
  useEffect(() => {
    tr(1)
  }, [])

  return (
    <>
      <div className="mt-5">
        <Container>
          <div className="text-center fs-2 fw-bolder">Features</div>
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
          <Row className="mt-5">
            <Col lg={6} id="showcolor">
              <div
                className="w-75 mx-auto p-4 d-flex rounded"
                onClick={() => {
                  setimg(1);
                  tr(1);
                }}
              >
                <div>
                  <div className="Cs5icon">
                    <BsBinoculars fontSize={"22PX"} color="#388da8" />
                  </div>
                </div>
                <div className="ms-3">
                  <div className="fs-5">Modi sit est dela pireda nest</div>
                  <div className="lh-1 mt-3">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </div>
                </div>
              </div>
              <div
                className="w-75 mx-auto p-4 d-flex mt-4 rounded "
                onClick={() => { setimg(2); tr(2) }}
              >
                <div>
                  <div className="Cs5icon">
                    <BsBoxSeam fontSize={"22PX"} color="#388da8" />
                  </div>
                </div>
                <div className="ms-3">
                  <div className="fs-5">Unde praesenti mara setra le</div>
                  <div className="lh-1 mt-3">
                    Recusandae atque nihil. Delectus vitae non similique magnam
                    molestiae sapiente similique tenetur aut voluptates sed
                    voluptas ipsum voluptas
                  </div>
                </div>
              </div>
              <div
                className="w-75 mx-auto p-4 d-flex mt-4 rounded"
                onClick={() => { setimg(3); tr(3) }}
              >
                <div>
                  <div className="Cs5icon">
                    <BsBrightnessHigh fontSize={"22PX"} color="#388da8" />
                  </div>
                </div>
                <div className="ms-3">
                  <div className="fs-5">Pariatur explica nitro delaq </div>
                  <div className="lh-1 mt-3">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                    Debitis nulla est maxime voluptas dolor aut
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <img
                className="w-100 rounded"
                src={
                  "https://bootstrapmade.com/demo/templates/QuickStart/assets/img/tabs-" +
                  img +
                  ".jpg"
                }
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Cs5;
