"use client";
import React from 'react';
import "./Animation.css"
import BallAnimation from './Movecircle';
const Animation = () => {
    return (
        <>
            <div className='boxcircle'>
                <BallAnimation Blur={50} />
            </div>
        </>
    );
};

export default Animation;