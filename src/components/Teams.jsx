import React, { useEffect, useState } from 'react';
import '../styles/teams.css';

const Teams = () => {
    const [count, setCount] = useState(0);
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    // Increase match minute every 60 seconds
    useEffect(() => {
        if (isFinished) return; 

        const timer = setInterval(() => {
            setCount(prev => {
                if (prev >= 90) {
                    setIsFinished(true);
                    return 90; 
                }
                return prev + 1;
            });
        }, 60000);

        return () => clearInterval(timer);
    }, [isFinished]);

    // Random goal logic
    useEffect(() => {
        
        if (count === 0 || isFinished) return;
        const timer = setTimeout(() => {
            const chance = Math.random();
            if (chance < 0.05) {
                const scoringTeam = Math.random() < 0.5 ? "home" : "away";
                if (scoringTeam === "home") setHomeScore(prev => prev + 1);
                else setAwayScore(prev => prev + 1);
            }
        }, 0);
        return () => clearTimeout(timer); 
    }, [count, isFinished]);


    return (
        <div className="teams">
            <div className="match-time">
                <time dateTime="2025-12-08T14:30">
                {isFinished ? "FT" : `${count}'`}
                </time>
            </div>

            <div className="match-result">
                <div className="team home-team">
                    <div className="team-logo">
                        <img src="/city.jpg" alt="city" />
                    </div>
                    <h3 className="team-name">Manchester City</h3>
                </div>

                <div className="scores">
                    <span className="team-score">{homeScore}</span>
                    :
                    <span className="team-score">{awayScore}</span>
                </div>

                <div className="team away-team">
                    <div className="team-logo">
                        <img src="/united.jpg" alt="united" />
                    </div>
                    <h3 className="team-name">Manchester United</h3>
                </div>
            </div>

            {isFinished && (
                <p className="full-time-note">Full Time — Match Ended</p>
            )}
        </div>
    );
};

export default Teams;