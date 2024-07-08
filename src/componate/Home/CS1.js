import React from 'react'
import './Chome.css'
import { Container } from 'react-bootstrap'
import { FaRegCirclePlay } from "react-icons/fa6";
function CS1() {
    return (
        <>
            <div className='Cs1main position-relative s1navs'>
                <div className='w-100 position-absolute top-0 ' style={{ opacity: 0.6, zIndex: -10 }}>
                    <img className='s1bgimg' src='https://bootstrapmade.com/demo/templates/QuickStart/assets/img/hero-bg-light.webp'></img>
                </div>
                <Container className='d-flex justify-content-center align-items-center '>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <h1 class="tites1 text-center">Welcome to <span style={{ color: "#388da8" }}>QuickStart</span></h1>
                        <div className='mt-3 text-center'>Quickly start your project now and set the stage for success</div>
                        <div class="d-flex mt-4">
                            <button type="button" class="btn btn-primary rounded-pill me-3">Get Started</button>
                            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="d-flex align-items-center text-decoration-none text-center"><FaRegCirclePlay className='fs-2' /><span className='fs-5 ms-2'>Watch Video</span></a>
                        </div>
                        <img src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/hero-services-img.webp" class="w-50" alt=""/>
                    </div>

                </Container>
            </div>
        </>
    )
}

export default CS1