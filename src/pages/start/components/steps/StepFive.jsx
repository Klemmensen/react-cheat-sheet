import React from 'react';

const StepFive = () => {

    const contents =
`import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();`;

    return (
        <>
            <h3>5) Enable React Router</h3>
            <hr />
            <p>Open the file index.js, and add the following code:</p>
            <code>
                {contents}
            </code>
        </>
    );

}

export default StepFive;
