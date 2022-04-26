import PropTypes from 'prop-types';
import * as React from 'react';

const Card = (props) => {

    const onClickStepEmit = () => {
        props.emit(props.step);
    }

    return (
        <>
            <article onClick={onClickStepEmit}>
                <h3>{props.step.name}</h3>
                <small>{props.step.description}.</small>
            </article>
        </>
    )
}

Card.propTypes = {
    step: PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired
    }).isRequired,
    emit: PropTypes.func.isRequired
}

export default Card;
