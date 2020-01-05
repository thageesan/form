import React from 'react';
import './style.less'

const Hero = () => {
    return (
        <>
            <div className="hero">
                <h5>
                    THE WEDDING OF
                </h5>
                <h1>
                    {process.env.COUPLE_NAME}
                </h1>
                <h2>
                    {process.env.SPECIAL_DATE}
                </h2>
            </div>
            <div className='bg-image'>
            </div>
        </>
    )
};

export default Hero;