import React from "react";
import NavBar from '../components/NavBar'


function aboutPage(){
    const title = `About me`;
    return (
        <div>
            <NavBar title ={title}></NavBar>

            <p>Trying to make it through the day, day by day</p>
        </div>
    )
}

export default aboutPage