'use client'
import react, {useState} from "react";
import Link from "next/link";

function NavBar() {
    const [click, setClick] = useState(false)
    function onClick() {
        setClick(!click)
    }

    return (
        <div className ='nav'>
            <div className ={`navElement ${click ? '':''}`} onClick={onClick}><Link href='/'>Home</Link></div>
            <div className ='navElement'><Link href='/youtube'>Youtube</Link></div>
            <div className ='navElement'><Link href='/about'>About</Link></div>
        </div>
    )
}

export default NavBar