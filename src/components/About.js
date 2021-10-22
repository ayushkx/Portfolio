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
                    <p style={{textAlign: 'center' }}>
                        <img
                        style={{borderRadius: '50%' }}
                        src="../assets/ayush.jpg"
                        alt="Ayush Kushwaha"
                        height="200px"
                        width="200px"
                        />
                    </p>
                    <br />
                    <br />
                    <p align="center" id="readme-md">
                        💬 student, self-taught coder
                        <br />📙 studies at JSS Academy Of Technical Education, Noida
                        <br />🌱 learning ReactJS. NodeJS. Database. 
                        <br />🔭 interested in web-development, open-source, competitive programming ,<br />🖥
                        develops webapps. back-end works. <br />🧩 likes painting. reading.
                        watching movies. and coding
                        <br />
                    </p>
                    <p>
                        <br />
                        <br />
                    </p>
                    <p align="center">
                        <a className="contact-icon" href="socialLinks.github"  target="_blank" title="GitHub" >
                        <img height="32" src="../assets/github.svg"  alt='github'/>
                        </a>
                        <a className="contact-icon" href="socialLinks.linkedin" target="_blank" title="LinkedIn">
                        <img height="32" src="../assets/linkedin.svg" alt="linkedin" />
                        </a>
                        <a className="contact-icon" href="socialLinks.mail" target="_blank" title="Gmail">
                        <img height="32" src="../assets/mail.svg" alt='gmail' />
                        </a>
                        <a className="contact-icon" href="socialLinks.whatsapp" target="_blank" title="Whatsapp">
                        <img height="32" src="../assets/whatsapp.svg" alt='whatsapp' />
                        </a>
                        <a className="contact-icon" href="socialLinks.instagram" target="_blank" title="Instagram" >
                        <img height="32" src="../assets/instagram.svg"  alt='instagram'/>
                        </a>
                    </p>
                </div>
        </div>
    )
}
