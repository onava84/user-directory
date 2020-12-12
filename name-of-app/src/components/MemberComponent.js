import React from 'react'
import './MemberComponent.css'

function MemberComponent(props) {
    return (
        <div className="member-information">
            <h2 className='name'>{`${props.member.name.first} ${props.member.name.last}`}</h2>
            <p><b>From:</b> {`${props.member.city} ${props.member.country}`}</p>
            <p><b>Job Title:</b> {props.member.title}</p>
            <p><b>Employer:</b> {props.member.employer}</p>
            <p className='favorite-movies'><b>Favorites Movies</b></p>
            <ol>
                {props.member.favoriteMovies.map(movie => {
                    return <li>{movie}</li>
                })}
            </ol>
        </div>
    )
}

export default MemberComponent