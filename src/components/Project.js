import React from 'react'
import './project.css'

export default function Project() {
    return (
        <div>
            <div className="container" id="projects">
                <span>
                <h3>Projects</h3>
                </span>
                <hr />
               <div className="row">
                    <div className="col-md-4 d-flex align-items-stretch" >
                        <div className="card">
                            <div className="card-body text-center d-flex flex-column">
                                <p>
                                <img src="../assets/' + card.imgSrc" style="border-radius:50%;" height="150px" width="150px"/>
                                </p>
                                <h4 className="card-title"></h4>
                                <hr />
                                <p className="card-text"></p>
                                <span className="mt-auto">
                                <a className="github-icon" href="card.repoLink" target="_blank" title="Repository" style="margin:10px 15px 10px 15px" >
                                    <img height="40" src="../assets/github.svg" />
                                </a>
                                <a className="github-icon" href="card.deployLink" target="_blank" title="Repository" style="margin:10px 15px 10px 15px" >
                                    <img height="32" src="../assets/link.svg" />
                                </a>
                                </span>
                            </div>
                        </div> 
                    </div>
                </div>
           </div>
        </div>
    )
}
