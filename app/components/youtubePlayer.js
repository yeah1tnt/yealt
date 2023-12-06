import React from 'react';
export default function YoutubePlayer({id, title}) {
    return(
        <div className='youtube'>
            <p>{title}</p>
            <iframe
                width="500"
                height="281"
                src={`https://www.youtube.com/embed/${id}`}
                title = {title}
            ></iframe>
        </div>
    )
}


