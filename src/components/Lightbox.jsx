import PropTypes from 'prop-types';
import * as React from 'react';

const LightboxBackgroundStyles = {
    position: 'fixed',
    zIndex: 100,
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    background: 'rgba(0, 0, 0, .7)',
    gridTemplateColumns: '50%',
    justifyContent: 'center',
    alignItems: 'center'
}

const LightboxContentStyles = {
    position: 'relative',
    minHeight: '100px',
    maxHeight: '75%',
    padding: '0px 85px 25px 25px',
    background: '#FFF',
    overflowY: 'auto'
}

const LightboxCloseStyles = {
    position: 'absolute',
    display: 'block',
    top: 0,
    right: 0,
    width: '75px',
    padding: '10px 0 10px 0',
    background: '#000',
    color: '#FFF',
    textAlign: 'center',
    cursor: 'pointer'
}

const LightBox = (props) => {

    const onClickCloseEmit = (event) => {
        if (event.target.classList.contains('lightbox-background') || event.target.classList.contains('lightbox-close')) {
            props.emit(false);
        }
    }

    return (
        <div className='lightbox-background' style={{
            ...LightboxBackgroundStyles,
            display: props.isOpen ? 'grid' : 'none'
        }} onClick={onClickCloseEmit}>
            <div style={LightboxContentStyles}>
                <span className='lightbox-close' style={LightboxCloseStyles}>Close</span>
                <h2>{props.title}</h2>
                {props.children}
            </div>
        </div>
    )

}

LightBox.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    emit: PropTypes.func.isRequired
}

LightBox.defaultProps = {
    isOpen: false
}

export default LightBox;
