import React, {createContext} from 'react';
import './HooksPageShell.css';

const HooksPageShell = () => {
    const stateHookExample =
`// Create a file called UpdateUserNameComponent.jsx:
import React, {useState} from 'react';

const StateHookExample = () => {
   const [name, setName] = React.useState('Unknown');
   
   const updateUserName = () => {
    setName('John Doe');
   }
   
   return (
        <>
            <p>Hi {name}</p>
            <br />
            <button onClick={updateUserName}>Update user name via state</button>
        </>
   );
}`;

    const effectHookExample =
`// Create a file called ToDoListComponent.jsx:
import React, {useState, useEffect} from 'react';

const EffectHookExample = () => {
   
   const [todos, setTodos] = useState([]);
   
   /**
    * @description
    *   - 1st param: The side effect you want to trigger (Dom changes, HTTP requests).
    *   - 2nd param: Dependencies -> [] = Run once. A local scoped flag can also be passed in as an effect trigger -> [loadData: boolean].
    *
    * @return 
    *   - Return (optional) a function from the effect, to run some logic just before the component is removed from the UI.
    */
   useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => setTodos(data))
            .catch((error) => console.log(error.message));
            
        // Teardown function
        return () => console.log('Unmounting the component - Tear down function was invoked');
    }, []); // Dependency list
   
   return (
        <>
            {
                todos.map(todo => (
                    <p key={todo.id}>{todo.title}</p>
                ))
            }
        </>
   );
}`;

    const contextHookExample =
`// Create a file called AuthUserContext.jsx, and add the following contents to it:
import React, {createContext} from 'react';

export const AuthUserContext = createContext({name: null});


// Create a file called AuthUserWelcomeComponent.jsx, which should consume the data from the context:
import React, {useContext} from 'react';
import {AuthUserContext} from './AuthUserContext';

export const AuthUserWelcomeComponent = () => {
    const authUserContext = useContext(AuthUserContext);
    
    return (
        <>
            Hi {authUserContext.name}
        </>
    );
}
   
// Finally inside I.eg App.js, provide the context so child components can consume the data passed to it directly:
import React from 'react';
import {AuthUserContext} from './AuthUserContext';
import {AuthUserWelcomeComponent} from './AuthUserWelcomeComponent';

export const App = () => {
   return (
       <>
            <AuthUserContext.Provider value={name: 'John Doe'}>
                <header>
                    <AuthUserWelcomeComponent />
                </header>
            <AuthUserContext.Provider />
       </>
   );
}`;

    const reducerHookExample =
`import React, {useReducer} from 'react';

const ReducerHookExample = () => {
   
   return (
        <>
            ...
        </>
   );
}`;

    const refHookExample =
`Create a file called RefExample.jsx
import React, {useRef} from 'react';

const RefHookExample = () => {
   const inputElementReference = useRef(null);
   
   // ... Logic
   
   // You now have access to the input element where ever you need it via: inputElementReference.current
   
   return (
        <>
            <input ref={inputElementReference} type="text" />
        </>
   );
}`;

    return (
        <>
            <h2>React Hooks - Functional programming with state and lifecycle methods</h2>
            <p>
                React hooks enables us to "hook into" life cycle methods and state handling via <i>functions</i>.
                This type of functionality was initially only available when implementing React with Classes.
            </p>
            <p>
                Below are some examples of the most common ones.
            </p>
            <br />
            <details>
                <summary>The "useState" hook</summary>
                <div>
                    <code>
                        {stateHookExample}
                    </code>
                </div>
            </details>
            <br />
            <details>
                <summary>The "useEffect" hook</summary>
                <div>
                    <code>
                        {effectHookExample}
                    </code>
                </div>
            </details>
            <br />
            <details>
                <summary>The "useContext" hook</summary>
                <div>
                    <code>
                        {contextHookExample}
                    </code>
                </div>
            </details>
            <br />
            <details>
                <summary>The "useReducer" hook</summary>
                <div>
                    <code>
                        {reducerHookExample}
                    </code>
                </div>
            </details>
            <br />
            <details>
                <summary>The "useRef" hook</summary>
                <div>
                    <code>
                        {refHookExample}
                    </code>
                </div>
            </details>
        </>
    );
}

export default HooksPageShell;
