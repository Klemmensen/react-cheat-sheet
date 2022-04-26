import React from 'react';

const StepSix = () => {

    const contentsHome =
`import React from 'react';

const Home = () => {
    return (
        <>
            <h1>Home page</h1>
        </>
    );
}
export default Home;`;

const contentsServices =
`import React from 'react';

const Service = () => {
    return (
        <>
            <h1>Services page</h1>
        </>
    );
}
export default Services;`;

const contentsAbout =
`import React from 'react';

const About = () => {
    return (
        <>
            <h1>About page</h1>
        </>
    );
}
export default About;`;

const contentsContact =
`import React from 'react';

const Contact = () => {
    return (
        <>
            <h1>Contact page</h1>
        </>
    );
}
export default Contact;`;

const contentsNotFound =
`import React from 'react';

const NotFound = () => {
    return (
        <>
            <h1>Not found page</h1>
        </>
    );
}
export default NotFound;`;

    return (
        <>
            <h3>6) Create pages</h3>
            <hr />
            <p>Open the terminal and type in the following commands:</p>
            <code>
                cd my-app/pages<br /><br />
                touch home/Home.jsx<br /><br />
                touch services/Services.jsx<br /><br />
                touch about/About.jsx<br /><br />
                touch contact/Contact.jsx<br /><br />
                touch not-found/NotFound.jsx
            </code>
            <small>Create the files manually, if the touch command is not supported in your terminal.</small>
            <p>Add the following contents to each new file we have just created.</p>
            <p><strong>Home.jsx</strong></p>
            <code>
                {contentsHome}
            </code>
            <br />
            <p><strong>Services.jsx</strong></p>
            <code>
                {contentsServices}
            </code>
            <br />
            <p><strong>About.jsx</strong></p>
            <code>
                {contentsAbout}
            </code>
            <br />
            <p><strong>Contact.jsx</strong></p>
            <code>
                {contentsContact}
            </code>
            <br />
            <p><strong>NotFound.jsx</strong></p>
            <code>
                {contentsNotFound}
            </code>
        </>
    );

}

export default StepSix;
