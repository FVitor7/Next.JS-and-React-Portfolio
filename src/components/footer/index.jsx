import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { AiFillUpSquare } from 'react-icons/ai';


const scrollToTop = () => {
    scroll.scrollToTop()
}

export default function Footer() {

    return (
        <>
            <footer className="footer">
                <p>Por Fábio Vitor</p>
                <a onClick={scrollToTop}><AiFillUpSquare /></a>
            </footer>
        </>
    )
}
