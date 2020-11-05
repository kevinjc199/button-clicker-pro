import React, { useState } from 'react'
import Button from './button'

function Counter() {
    const [count, setCount] = useState(0)
    const [formVal, setFormVal] = useState('')
    const handleClick = (num) => {
        const newCount = count + num
        if (newCount >= 0 && newCount < 11)
            setCount(newCount)
    }
    const handleSet = () => {
        setCount(parseInt(formVal))
        setFormVal('')
    }
    return (
        <div>
            <h3 id='current-count' className='title is-2'>{count}</h3>
            <div className='field is-grouped'>
                <Button name='-' click={() => handleClick(-1)}/>
                <Button name='+' click={() => handleClick(1)}/>
            </div>
            <div className="field has-addons" style={{ 'width': '100px'}}>
                <div className="control">
                    <input
                        value={formVal}
                        onChange={(evt) => setFormVal(evt.target.value)}
                        className="input is-small" type="text" />
                </div>
                <div className="control">
                    <button id='set-button' onClick={handleSet} className="button is-info is-small">
                        Set
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter