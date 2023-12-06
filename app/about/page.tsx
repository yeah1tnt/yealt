import React from "react";
import NavBar from '../components/NavBar'


function aboutPage(){
    const title = `About`;
    const description = `Contact Information`;

    return (
        <div>
            <NavBar title ={title} description={description}></NavBar>

            <p>Trying to make it through the day, day by day</p>
        </div>
    )
}

export default aboutPage