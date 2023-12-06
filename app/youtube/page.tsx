'use client'
import React from "react";
import NavBar from '../components/NavBar'
import YoutubePlayer from '../components/youtubePlayer'

function youtubePage(){
    const title = `Youtube`;
    const description = `Youtube Page`;
    return (
        <div>
            <NavBar title={title} description={description}></NavBar>
            <YoutubePlayer id="LgRl25hUteI" title="HOYO-MiX - Wildfire"/>

        </div>
    )
}

export default youtubePage