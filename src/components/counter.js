import React, { useState } from 'react'
import Button from './button'

function Counter() {
    const [count, setCount] = useState(0)
    const [formVal, setFormVal] = useState('')
    const handleClick = (num) => {
        setCount(count + num)
    }
    const handleSet = () => {
        setCount(parseInt(formVal))
        setFormVal('')
    }
    return (
        <div>
            <h3 className='title is-2'>{count}</h3>
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
                    <button onClick={handleSet} className="button is-info is-small">
                        Set
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter