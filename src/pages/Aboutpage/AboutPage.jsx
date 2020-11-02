import React, {Fragment} from 'react';

//styles
import './aboutpage-styles.scss';

//image
import sam from '../../assets/sam_Reskala_li.png';

const AboutPage = () => {

    // resume link:
    // https://drive.google.com/file/d/1CjLn7nVNrMSh5xdvwh63dGlv2MyD4z8T/view?usp=sh
    // a ring

    return (
        <Fragment>
            <div className="about-container">
                <div className="about-header">
                    <h1>About Sam</h1>
                    <hr/>
                    <h3>
                        Technology Enthusiast
                    </h3>
                </div>
                <div className="about-content">
                    <div className="image-container">
                        <img src={sam} alt="picture" className="sams-picture"/>
                        <a
                            href="https://drive.google.com/file/d/1CjLn7nVNrMSh5xdvwh63dGlv2MyD4z8T/view?usp=sh"
                            target="blank">Resume</a>
                    </div>
                    <div className="paragraph-container">
                        <p>
                            Growing up I’ve always had an innate curiosity about the world around me. Living
                            in several countries before the age of eleven gave me the opportunity to
                            explore, and learn skills in order to adapt to any place – along with the added
                            perk of trying many delicious dishes and foods.
                        </p>
                        <p>
                            Even though my passion for learning expanded across several subjects, I
                            ultimately ended up studying Finance and graduating from Indiana University.
                            While I enjoyed much of what I learned there, I didn’t discover my true passion
                            until as of recently. Other than French, I learned there was another type of
                            language I wanted to learn as much as possible about: coding.
                        </p>
                        <p>
                            My experiences throughout my latter years, both professional and personal, have
                            given me a glimpse into the amazing potential technology has. Wanting to get as
                            involved as I possibly can, I set lofty goals for myself; I am currently
                            completing a Master’s degree in Business Analytics along with an immersive
                            Software Development Bootcamp.
                        </p>
                        <p>
                            Along the way, I’ve picked up new technical skills ranging from data science
                            programming (Python, R) to software development (C#, JavaScript, etc..), as well
                            as other specialized technologies. My biggest strength is my ability to learn
                            quickly, which has propelled my desire to master as much as possible.
                        </p>
                        <p>
                            After completing my studies and bootcamp, I plan on continually improving my
                            skills as well as joining a company in which I can make a positive impact at.
                        </p>
                    </div>

                </div>

            </div>
            <div className="contribution">Header Logo generated by
                <a href="https://www.designevo.com/logo-maker/" title="Free Online Logo Maker">DesignEvo free logo designer</a>
            </div>
        </Fragment>
    )
}

export default AboutPage;