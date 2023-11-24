import react from "react";
import Link from "next/link";

function NavBar() {
    return (
        <div className ='nav'>
            <Link href='/'>Home</Link> <></>
            <Link href='/youtube'>Youtube</Link> <></>
            <Link href='/about'>About</Link>
        </div>
    )
}

export default NavBar