import React from 'react'
import Teams from './Teams'
import '../styles/matchResult.css'

const MatchResult = () => {
    return (
        <div className='wrapper'>
            <h2>Live Score</h2>
            <Teams/>
        </div>
    )
}

export default MatchResult