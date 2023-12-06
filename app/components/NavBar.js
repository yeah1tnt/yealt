'use client'
import React, {useEffect} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {handleNavElementClick} from "../ui/navAnimation";
import {rainAnimation} from "../ui/rainAnimation";

function NavBar({title, description}) {
    const pathname = usePathname();
    useEffect(() => {
        rainAnimation();
    },[])

    return (
        <div className='navMain'>
            <div className='navTitle'>
                <h1>{title}</h1>
                <h4>{description}</h4>
            </div>
            
            <div className ='navLink'>
                <Link href='/'><div 
                    className = {pathname === '/' ? 'navElementActive' : 'navElement'} 
                    onClick={handleNavElementClick}>Home</div></Link>
                <Link href='/youtube'><div 
                    className = {pathname === '/youtube' ? 'navElementActive' : 'navElement'} 
                    onClick={handleNavElementClick}>Youtube</div></Link>
                <Link href='/about'><div 
                    className = {pathname === '/about' ? 'navElementActive' : 'navElement'}
                    onClick={handleNavElementClick}>About</div></Link>
            </div>
        </div>
    )
}

export default NavBar