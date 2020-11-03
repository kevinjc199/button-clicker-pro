import React, { useState } from 'react';

const BlueButton = () => {
    const [color, setColor] = useState({})
    function clickHandler(evt) {
        setColor({ 'backgroundColor': '#3474eb' })
    }
    return (
        <button
            id='blue-button'
            className='button'
            onClick={clickHandler}
            style={color}
        >Blue button</button>
    )
}

export default BlueButton;