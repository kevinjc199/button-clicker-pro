import React, { useState } from 'react'

import cat1 from '../cat1.jpg'
import cat2 from '../cat2.jpg'
import cat3 from '../cat3.jpg'
import Button from './button'

function Carousel() {
    const images = [cat1, cat2, cat3]
    const [cur, setCur] = useState(0)

    const handleLeft = () => {
        setCur(0)
    }

    const handleRight = () => {
        if (cur === 2) {
            setCur(0)
        } else {
            setCur(cur + 1)
        }
    }

    return (
        <div className='is-flex is-align-items-center is-justify-content-center' style={{'height': '300px'}}>
            <Button name='<' click={handleLeft} />
            <img width='200' height='auto' src={images[cur]} alt='cat' />
            <Button name='>' click={handleRight} />
        </div>
    )
}

export default Carousel