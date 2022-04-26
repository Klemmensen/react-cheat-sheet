import React from 'react';

const StepSeven = () => {

    const contents =
`import * as React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// Lazy load pages
const StartPage = React.lazy(() => import('./pages/start/Start'));
const ServicesPage = React.lazy(() => import('./pages/services/Services'));
const AboutPage = React.lazy(() => import('./pages/about/About'));
const ContactPage = React.lazy(() => import('./pages/contact/Contact'));
const NotFoundPage = React.lazy(() => import('./pages/not-found/NotFound'));

function App() {
    return (
        <div className="app-container">
            <header>
                <nav>
                    <NavLink to='/' activeclassname="active">Start</NavLink>
                    <NavLink to='/services' activeclassname="active">Services</NavLink>
                    <NavLink to='/about' activeclassname="active">About</NavLink>
                    <NavLink to='/contact' activeclassname="active">Contact</NavLink>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={
                        <React.Suspense> <!-- Add spinner here -->
                            <StartPage />
                        </React.Suspense>
                    }/>
                    <Route path="services" element={
                        <React.Suspense> <!-- Add spinner here -->
                            <ServicesPage />
                        </React.Suspense>
                    }/>
                    <Route path="about" element={
                        <React.Suspense> <!-- Add spinner here -->
                            <AboutPage />
                        </React.Suspense>
                    }/>
                    <Route path="contact" element={
                        <React.Suspense> <!-- Add spinner here -->
                            <ContactPage />
                        </React.Suspense>
                    }/>
                    <Route path="*" element={
                        <React.Suspense> <!-- Add spinner here -->
                            <NotFoundPage />
                        </React.Suspense>
                    }/>
                </Routes>
            </main>

            <footer>
                <p>Footer</p>
            </footer>
        </div>
    );
}

export default App;`;

    return (
        <>
            <h3>7) Add routes & navigation</h3>
            <hr />
            <p>Open the file App.js, and add the following code:</p>
            <code>
                {contents}
            </code>
        </>
    );

}

export default StepSeven;
