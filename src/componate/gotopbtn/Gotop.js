import React, { useState } from 'react'
import './Gotop.css'
import { BsArrowUpShort } from 'react-icons/bs'


function Gotop() {
    const [show, setshow] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setshow(true)
        } else {
            setshow(false)

        }
    })

    function fGotop() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (
        show && (<div className='gotopbtn' onClick={() => { fGotop() }}>
            <BsArrowUpShort className='fs-3' />
        </div>)
    )
}

export default Gotop
