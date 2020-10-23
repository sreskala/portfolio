import React, {Fragment} from 'react';
import './homepage-styles.scss';

//images
import sky from '../../assets/Background.png';
import mountains from '../../assets/MiddleImage.png';
import city from '../../assets/FrontImage.png';

import {useLaxElement} from 'use-lax';

const HomePage = () => {

    const ref = useLaxElement();

    return (
        <Fragment>
        <div className="container">

            <div ref={ref} data-lax-translate-y="0 1, 400 -50" className="sky lax">
                <img src={sky} alt="sky"/>
            </div>

            <div ref={ref} data-lax-translate-y="0 1, 400 -200" className="mountains lax">
                <img src={mountains} alt="mountains"/>
            </div>

            <div ref={ref} data-lax-translate-y="0 1, 400 -340" className="city lax">
                <img src={city} alt="city" />
            </div>

            

        </div>

        </Fragment>
    )
}

export default HomePage;