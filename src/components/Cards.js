import React from 'react'
import './card.css'

export default function Cards(props) {
    return (
            <div className="card">
                    <p>
                    <img src={`../assets/${props.img}.jpg`} style={{borderRadius: '50%'}} height="150px" width="150px" alt="project"/>
                    </p>
                    <h4 className="card-title">{props.name}</h4>
                    <hr />
                    <p className="card-text">{props.description}</p>
                    <span className="mt-auto">
                    <a className="github-icon" href={`${props.repolink}`}  title="Repository" style={{margin: '10px 15px 10px 15px'}} >
                        <img height="40" src="../assets/github.svg" alt="github"/>
                    </a>
                    <a className="github-icon" href={`${props.deploylsink}`}  title="Deploy link" style={{margin: '10px 15px 10px 15px'}} >
                        <img height="32" src="../assets/link.svg" alt="link"/>
                    </a>
                    </span>
                </div>                     
    )
}
