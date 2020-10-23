import React from 'react';
import {useLaxElement} from 'use-lax';

const ImageComponent = (props) => {

    const ref = useLaxElement();

    return (
        <div ref={ref} className={props.className} data-lax-translate-y={props.ycoords}>
            <img src={props.image} alt="image"/>
        </div>
    )
}

export default ImageComponent;