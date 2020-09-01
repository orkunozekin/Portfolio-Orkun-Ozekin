import React, { useState, useEffect } from 'react';
import './SlideShow.css';


const SlideShow = (props) => {

    const images = props.images;
    console.log(images);

    return (
        <div className="fling-minislide">
            {images.map(eachImg => {
                return <img key={eachImg.imgTitle} className="img" src={eachImg.img} alt={eachImg.imgTitle} />
            })}
            
        </div>
    )
}

export default SlideShow;