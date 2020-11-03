import React from 'react';

//Icons
import {FaGithub as Github} from 'react-icons/fa';
import {DiHeroku as Heroku} from 'react-icons/di';

//styles
import './portfolio-component-styles.scss';


const PortfolioComponent = (props) => {
    return (
        <div className="portfolio-component">
            <h1 className="portfolio-component-title">{props.name}</h1>
            <div className="portfolio-content-container">
                <img src={props.imageUrl} alt="image for portfolio"/>
                <p>{props.description}</p>
                <a href={props.githubLink}>
                    <Github />
                </a>
                {
                    props.heroku && (<a href={props.herokuLink}>
                        <Heroku />
                    </a>)
                }
            </div>
            <hr />
        </div>
    )
}

export default PortfolioComponent;