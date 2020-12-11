import React from 'react'

function MemberComponent(props) {
    return (
        <div>
            <h2>{`${props.member.name.first} ${props.member.name.last}`}</h2>
            <p>From: {`${props.member.city} ${props.member.country}`}</p>
            <p>Job Title: {props.member.title}</p>
            <p>Employer: {props.member.employer}</p>
            <p>Favorites Movies</p>
            <ol>
                {props.member.favoriteMovies.map(movie => {
                    return <li>{movie}</li>
                })}
            </ol>
        </div>
    )
}

export default MemberComponent