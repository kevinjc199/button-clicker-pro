import React, { useState } from 'react';

const RedButton = () => {
    const [color, setColor] = useState({})
    function clickHandler(evt) {
        setColor({ 'backgroundColor': '#80e87b' })
    }
    return (
        <button
            id='red-button'
            className='button'
            onClick={clickHandler}
            style={color}
        >Red button</button>
    )
}

export default RedButton;