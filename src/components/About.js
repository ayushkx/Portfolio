import React from 'react'
import './about.css'

export default function About() {
    return (
        <div>
            <div className="container about" id="about" height="100vh" >
                    <span>
                    <h3 style={{textAlign: 'center' }}>About Me</h3>
                    </span>
                    <hr />
                    <br />
                    <br />
                    <div className='container'>
                        <div>
                            <img
                            src="../assets/ayush.jpg"
                            alt="Ayush Kushwaha"
                            height="200px"
                            width="200px"
                            />
                        </div>
                        <div>
                            <span id="readme-md">
                            💬 student, self-taught coder
                            <br />📙 studies at JSS Academy Of Technical Education, Noida
                            <br />🌱 learning ReactJS. NodeJS. Database. 
                            <br />🔭 interested in web-development, open-source, competitive programming ,<br />🖥
                            develops webapps. back-end works. <br />🧩 likes painting. reading.
                            watching movies. and coding
                            <br />
                            </span>
                        </div>
                    </div>
                    <p align="center">
                        <a className="contact-icon" href="https://github.com/ayushkx"  target="_blank" rel="noopener noreferrer" title="GitHub" >
                        <img height="32" src="../assets/github.svg"  alt='github'/>
                        </a>
                        <a className="contact-icon" href="https://www.linkedin.com/in/ayushkx/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <img height="32" src="../assets/linkedin.svg" alt="linkedin" />
                        </a>
                        <a className="contact-icon" href="mailto:ayushkushwaha855@gmail.com" target="_blank" rel="noopener noreferrer" title="Gmail">
                        <img height="32" src="../assets/mail.svg" alt='gmail' />
                        </a>
                        <a className="contact-icon" href="https://wa.me/919616580835" target="_blank" rel="noopener noreferrer" title="Whatsapp">
                        <img height="32" src="../assets/whatsapp.svg" alt='whatsapp' />
                        </a>
                        <a className="contact-icon" href="https://www.instagram.com/_ayushx._/" target="_blank" rel="noopener noreferrer" title="Instagram" >
                        <img height="32" src="../assets/instagram.svg"  alt='instagram'/>
                        </a>
                    </p>
                </div>
        </div>
    )
}
