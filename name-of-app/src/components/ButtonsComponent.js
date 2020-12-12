import React, { Component } from 'react'
import './ButtonsComponent.css'

class ButtonsComponent extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handlePreviousClick() {
        this.setState({

        })
    }

    handleNextClick() {
        this.setState({

        })
    }

    render() {
        return (
            <div className='buttons'>
                <button className='button1' onClick={(e) => this.props.previous()}>&#60; Previous</button>
                <button className='button2' onClick={(e) => this.props.next()}>Next &#62;</button>
            </div>
        )
    }
}
export default ButtonsComponent