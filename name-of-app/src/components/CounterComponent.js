import React from 'react'
import './CounterComponent.css'

function CounterComponent(props) {
    return (
        <div>
            {/* <p>{`${}/25`}</p> */}
            <p className="counter-text">{`${props.counter}/25`}</p>
        </div>
    )
}

export default CounterComponent