import React from 'react'
import './card.css'

export default function Cards(props) {
    return (
            <div className="card-container">
                    <div className='image-container'>
                    <img src={`../assets/${props.name}.png`} alt="project"/>
                    </div>
                    <div className='card-content'>
                    <h3 className="card-title">{props.name}</h3>
                    <hr />
                    <p className="card-text">{props.description}</p>
                    </div>
                    <a className="btn" href={`${props.repolink}`}  title="Repository" style={{margin: '10px 15px 10px 15px'}} >
                        <img height="40" src="../assets/github.svg" alt="github"/>
                    </a>
                    <a className="btn" href={`${props.deploylink}`}  title="Deploy link" style={{margin: '10px 15px 10px 15px'}} >
                        <img height="32" src="../assets/link.svg" alt="link"/>
                    </a>
                </div>                     
    )
}
