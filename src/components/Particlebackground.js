import React from 'react'
import Particles from 'react-particles-js'
import particleConfig from './particle_confi'

export default function Particlebackground() {
    return (
        <div>
           <Particles params = {particleConfig}></Particles>
            
        </div>
    )
}
