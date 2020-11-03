import React from 'react'
import Button from './components/button'
import './App.css'
import BlueButton from './components/blue-button'
import RedButton from './components/red-button'
import Counter from './components/counter'
import Carousel from './components/Carousel'

function App() {
    return (
        <div className='container has-background-grey-lighter'>
            <h3 className='title pt-4 pb-4 has-text-centered has-background-primary-light'>Button Clicker Pro</h3>
            <div className='columns is-centered'>
                <div className='column p-2 is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
                    <BlueButton/>
                    <RedButton/>
                </div>
                <div className='column p-2 is-flex is-justify-content-center is-align-items-center'>
                    <Carousel/>
                </div>
                <div className='column p-2 is-flex is-justify-content-center is-align-items-center'>
                    <Counter/>
                </div>
            </div>
        </div>
    )
}

export default App
