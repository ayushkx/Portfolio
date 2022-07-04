import React from 'react'
import './home.css'

export default function home() {
    return (
        <div id='home'>
            <div id="landing-intro">
              <div >Hi, I'm</div>
              <div id="my-name"><span className='name'>Ayush</span> kushwaha</div>
              <div id="sub-intro">
                  Student | Developer | Tech Enthusiast
              </div>
              <span style={{fontSize: '1.5rem'}}>Welcome to my website!</span>
            </div>   
        </div>
    )
}
