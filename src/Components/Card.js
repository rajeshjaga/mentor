import React from 'react';


const Card = ({ data: { imgurl, status, cardTitle, github, netlify } }) => {
    return (
        <div className="card" id={status} >
            <img src={imgurl} alt="img-project" />
            <div className="container">
                <h3>{cardTitle}</h3>
                <div className="links">
                    <a href={github} className="button" >Code</a>
                    <a href={netlify} className="button" >Live</a>
                </div>
            </div>
        </div>
    )
}

export default Card
