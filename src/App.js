import * as React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './reset.css';
import './App.css';

// Lazy load pages
const StartPageShell = React.lazy(() => import('./pages/start/StartPageShell'));
const HooksPageShell = React.lazy(() => import('./pages/hooks/HooksPageShell'));
const NotFoundPageShell = React.lazy(() => import('./pages/not-found/NotFoundPageShell'));
const CheatSheetPageShell = React.lazy(() => import('./pages/cheat-sheet/CheatSheetPageShell'));
const ContactPageShell = React.lazy(() => import('./pages/contact/ContactPageShell'));

function App() {
    return (
        <div className="app-container">
            <header>
                <nav>
                    <NavLink to='/' activeclassname="active">Start</NavLink>
                    <h1>Create React App - SPA</h1>
                    <NavLink to='/hooks' activeclassname="active">Hooks</NavLink>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={
                        <React.Suspense>
                            <StartPageShell />
                        </React.Suspense>
                    }/>
                    <Route path="hooks" element={
                        <React.Suspense>
                            <HooksPageShell />
                        </React.Suspense>
                    }/>
                    <Route path="react-cheat-sheet" element={
                        <React.Suspense>
                            <CheatSheetPageShell />
                        </React.Suspense>
                    }/>
                    <Route path="contact" element={
                        <React.Suspense>
                            <ContactPageShell />
                        </React.Suspense>
                    }/>
                    <Route path="*" element={
                        <React.Suspense>
                            <NotFoundPageShell />
                        </React.Suspense>
                    }/>
                </Routes>
            </main>

            <footer>
                <NavLink to='/react-cheat-sheet'>React Cheat Sheet</NavLink> |&nbsp;
                <NavLink to='/contact'>Contact</NavLink>
            </footer>
        </div>
    );
}

export default App;
