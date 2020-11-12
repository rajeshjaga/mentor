import React from 'react';


const Card = ({ src, alt, title, github, netlify }) => {
    return (
        <div className="card">
            <img
                src={src}
                alt={alt}
            />
            <div className="container">
                <h3>{title}</h3>
                <div className="links">
                    <a href={github} className="button" >Code</a>
                    <a href={netlify} className="button" >Live</a>
                </div>
            </div>
        </div>
    )
}

export default Card
