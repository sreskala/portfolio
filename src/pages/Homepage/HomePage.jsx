import React, {Fragment} from 'react';
import './homepage-styles.scss';

//test
import Skills from '../../components/Skills/Skills';
import Form from '../../components/Form/Form';

//images
import sky from '../../assets/Background.png';
import mountains from '../../assets/MiddleImage.png';
import city from '../../assets/FrontImage.png';

import {useLax, useLaxElement} from 'use-lax';

const HomePage = () => {
    

    useLax();

    const ref = useLaxElement();

    return (
        <Fragment>
            <div className="container">

                <div
                    className="lax header-div-title"
                    data-lax-scale="0 1, vh 0.2"
                    data-lax-translate-y="0 0, vh 1200"
                    data-lax-opacity="0 1, (vh*0.5) 0">
                    <h1 className="test-style">
                        Sam Reskala
                    </h1>
                    
                </div>


                <div ref={ref} data-lax-translate-y="0 1, 400 -50" className="sky lax">
                    <img src={sky} alt="sky"/>
                </div>

                <div ref={ref} data-lax-translate-y="0 1, 400 -200" className="mountains lax">
                    <img src={mountains} alt="mountains"/>
                </div>

                <div ref={ref} data-lax-translate-y="0 1, 400 -340" className="city lax">
                    <img src={city} alt="city"/>
                </div>

            </div>

            <Skills />
            <Form />

        </Fragment>
    )
}

export default HomePage;