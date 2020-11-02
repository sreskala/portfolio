import React, {Fragment} from 'react';

//data
import {portfolioComponents} from '../../data/portfolioComponents';

//components
import PortfolioComponent from '../../components/Portfolio/PortfolioComponent';

//styles
import './portfolio-page-styles.scss';

const PortfolioPage = () => {
    return (
        <Fragment>
            <div className="portfolio-container">
                <h1>Portfolio</h1>
                <hr />
                {portfolioComponents.map((item, index) => {
                    return (<PortfolioComponent
                        key={index}
                        name={item.name}
                        imageUrl={item.imageUrl}
                        description={item.description}
                        githubLink={item.githubLink}
                        heroku={item.heroku}
                        herokuLink={item.herokuLink}/>);
                })
}
            </div>
        </Fragment>
    )
}

export default PortfolioPage;