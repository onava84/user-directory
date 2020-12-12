import React, { Component } from 'react'
import './CardComponent.css'
import data from '../data'
import MemberComponent from './MemberComponent'
import CounterComponent from './CounterComponent'
import ButtonsComponent from './ButtonsComponent'

class CardComponent extends Component {
    constructor() {
        super()
        this.state = {
            members: [...data],
            index: 0,
        }
        this.handleNextClick = this.handleNextClick.bind(this)
        this.handlePreviousClick = this.handlePreviousClick.bind(this)
    }

    handleNextClick() {
        if (this.state.index < this.state.members.length - 1) {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    handlePreviousClick() {
        if (this.state.index === 0) {

        } else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }
    render() {
        // const mapMembers = this.props.members.map(e => 
        //     return <MemberComponent />)
        return (
            <div>
                <div className='card-component'>
                    <div className="member-info">
                        <MemberComponent member={this.state.members[this.state.index]} />
                        {/* <button onClick={(e) => this.handlePreviousClick()}>Previous</button>
                        <button onClick={(e) => this.handleNextClick()}>Next</button> */}
                    </div>
                    <div className="counter-div">
                        <CounterComponent counter={this.state.index + 1} />
                    </div>
                </div>
                <div>
                    <ButtonsComponent previous={this.handlePreviousClick} next={this.handleNextClick} />
                </div>
            </div>
        )
    }

}

export default CardComponent