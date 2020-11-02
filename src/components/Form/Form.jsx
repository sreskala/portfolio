import React from 'react';

import emailjs from 'emailjs-com';

import './form-styles.scss';

const Form = () => {

    const sendEmail = e => {
        e.preventDefault();

        emailjs
            .sendForm('service_vz19pfj', 'template_3v207mv', e.target, 'user_P7OwsZ4Ei0lLCwozDf4ow')
            .then((result) => {
                alert("Message successfully sent!");
            }, (error) => {
                console.log(error.text);
            });
        e
            .target
            .reset();

    }

    return (
        <div className="form-main-container">
            <h1 className="form-header-title">Get In Touch</h1>
            <div className="form-sub-container">
                <form onSubmit={sendEmail}>

                    <div className="input-form-container">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="John Doe"/>
                    </div>

                    <div className="input-form-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="john@example.com"/>
                    </div>

                    <div className="input-form-container">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Hello!"/>
                    </div>

                    <div className="text-area-container">
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Type your message..."></textarea>
                        <input type="submit" value="Send" id="submit-button"/>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Form;