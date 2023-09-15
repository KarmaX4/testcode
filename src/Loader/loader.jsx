import { LinearProgress } from '@mui/material';
import React from 'react'

export const Loader = () => {
    const speed = '1.35s'; // Define the speed variable here
    const bounceHeight = '2.125em'; // Define the bounceHeight variable here

    const boxStyle = {
        position: 'relative',
    };

    const loaderContainerStyle = {
        display: 'flex',
        justifyContent: 'center', // Horizontally center the loader
        alignItems: 'center', // Vertically center the loader
        height: '100vh', // Make sure it takes the full viewport height
    };
    const beforeStyle = {
        content: '""',
        height: '4em',
        width: '4em',
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '-2em 0 0 -2em',
        background: 'linear-gradient(70.46deg, #ED6FCB 38.19%, #8372F2 100%)',
        border: '5px solid #eee',
        animation: `${speed} bounce linear infinite`,
    };


    const afterStyle = {
        content: '""',
        height: '.5em',
        width: '4em',
        position: 'absolute',
        bottom: '50%',
        left: '50%',
        margin: '0 0 -3.75em -2em',
        borderRadius: '100%',
        backgroundColor: '#0000',
        animation: `${speed / 2} shadow linear infinite`,
    };

    const bounceKeyframes = {
        '0%': {
            transform: `translateY(-${bounceHeight})`,
            borderRadius: '0',
        },
        '12.5%': {
            borderRadius: '0',
        },
        '25%': {
            transform: `translateY(${bounceHeight}) rotate(45deg)`,
            borderBottomRightRadius: '100%',
        },
        '37.5%': {
            borderRadius: '0',
        },
        '50%': {
            transform: `translateY(-${bounceHeight}) rotate(90deg)`,
            borderRadius: '0',
        },
        '62.5%': {
            borderRadius: '0',
        },
        '75%': {
            transform: `translateY(${bounceHeight}) rotate(135deg)`,
            borderTopRightRadius: '100%',
        },
        '87.5%': {
            borderRadius: '0',
        },
        '100%': {
            transform: `translateY(-${bounceHeight}) rotate(180deg)`,
            borderRadius: '0',
        },
    };

    const shadowKeyframes = {
        '0%': {
            width: '4em',
        },
        '50%': {
            width: '5.65685424949238em',
            marginLeft: '-2.82842712474619em',
            backgroundColor: 'darkgrey',
        },
        '100%': {
            width: '4em',
        },
    };
    return (
        <div style={loaderContainerStyle}>
            <div className="box" style={boxStyle}>
                <div className="before" style={beforeStyle}></div>
            </div>

            <style jsx>
                {`
                        @keyframes bounce {
                            ${Object.entries(bounceKeyframes)
                        .map(([key, value]) => `${key} { ${Object.entries(value).map(([prop, val]) => `${prop}: ${val};`).join(' ')} }`)
                        .join('\n')}
                        }
                
                        @keyframes shadow {
                            ${Object.entries(shadowKeyframes)
                        .map(([key, value]) => `${key} { ${Object.entries(value).map(([prop, val]) => `${prop}: ${val};`).join(' ')} }`)
                        .join('\n')}
                        }
                `}
            </style>
        </div>
    );


    // return (
    //     <div className='loader-wrapper'>

    //     </div>
    // );
    // return (
    //     <div className='loader-wrapper mt-5'>
    //         <LinearProgress variant="buffer" value={ProgressEvent} valueBuffer={Buffer} />
    //     </div>
    // );
};