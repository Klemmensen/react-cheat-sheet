import React, { useState } from 'react';
import './StartPageShell.css'
import { Steps } from './data/steps';
import Intro from './components/Intro';
import Card from './components/Card';
import LightBox from '../../components/Lightbox';

const StartPageShell = () => {

    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [lightboxComponent, setLightboxComponent] = useState(null);

    const onClickStepCard = (step) => {
        setLightboxComponent(step.component);
        setLightboxIsOpen(true);
    }

    const onClickHandleLightboxOpenState = (isOpen) => {
        setLightboxIsOpen(isOpen);
        setLightboxComponent(null);
    }

    return (
        <>
            <LightBox
                isOpen={lightboxIsOpen}
                emit={onClickHandleLightboxOpenState}>
                {lightboxComponent}
            </LightBox>

            <Intro />

            <div className="react-steps-container">{
                Steps.map(step => (
                    <Card
                        key={step.id}
                        step={step}
                        emit={onClickStepCard}
                    />
                ))
            }</div>
        </>
    );
}

export default StartPageShell;
