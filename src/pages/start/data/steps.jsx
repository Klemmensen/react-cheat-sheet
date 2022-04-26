import StepOne from '../components/steps/StepOne';
import StepTwo from '../components/steps/StepTwo';
import StepThree from '../components/steps/StepThree';
import StepFour from '../components/steps/StepFour';
import StepFive from '../components/steps/StepFive';
import StepSix from '../components/steps/StepSix';
import StepSeven from '../components/steps/StepSeven';
import StepEight from '../components/steps/StepEight';

export const Steps = [{
    id: 1,
    name: '1) Install create-react-app',
    description: 'To get an easy start, we will use the create-react-app npm package',
    component: StepOne
}, {
    id: 2,
    name: '2) Create & scaffold the application',
    description: 'We will use create-react-app to get an application structure scaffolded out. This will also create a development environment with HMR',
    component: StepTwo
}, {
    id: 3,
    name: '3) Install React Router',
    description: 'We also need the React Router npm package, so we can utilize navigation and make the application work like a real SPA',
    component: StepThree
}, {
    id: 4,
    name: '4) Create folder structure',
    description: 'In this step we will create directories where we can keep our PAGES & componentS',
    component: StepFour
}, {
    id: 5,
    name: '5) Enable React Router',
    description: 'Wrap the App inside the BrowserRouter from React Router. By doing this, we enable routing throughout the application',
    component: StepFive
}, {
    id: 6,
    name: '6) Create pages',
    description: 'Now we are ready to create a few simple pages, which we will be using when we set up routing in the next step',
    component: StepSix
}, {
    id: 7,
    name: '7) Add routes & navigation',
    description: 'At this step we are defining the routes and creating the navigation which will load the pages we just created',
    component: StepSeven
}, {
    id: 8,
    name: '8) Run the application',
    description: 'Start the application and go to localhost:3000 in your preferred browser',
    component: StepEight
}, /*{
    id: 8,
    name: '8) Output an array of data',
    description: 'See how multiple DOM elements can be added to a page, based on an array of objects'
}*/];
