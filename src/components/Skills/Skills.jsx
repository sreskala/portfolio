import React, {Fragment} from 'react';

import SVGcomponent from './SVGComponent';

import {svgArray} from '../../data/svgarray';

//styles
import './skillstyles.scss';

const Skills = () => {

    return (

        <Fragment>

            <div className="all-skills">
                <div className="skills-header-container">
                    <h1 className="skills-header">
                        Skills
                    </h1>
                </div>

                <div className="skills-container">
                    {svgArray.map((elName, index) => {
                        return (
                            <div className="skill-element" key={index}>
                                <SVGcomponent name={elName} height="100px"/>
                            </div>
                        );
                    })
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Skills;
