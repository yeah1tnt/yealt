'use client'
import React from "react";
import NavBar from '../components/NavBar'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function youtubePage(){

    return (
        <div>
            <NavBar></NavBar>
            <h1 className='main_header'>Youtube Post</h1>
            <div className='youtube'><p>[MusicBox] HOYO-MiX - Wildfire</p>
            <LiteYouTubeEmbed id="LgRl25hUteI" title="HOYO-MiX - Wildfire" />
            </div>
        </div>
    )
}

export default youtubePage