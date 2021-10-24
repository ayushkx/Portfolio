import React from "react";
import Particles from "react-particles-js";
import particleConfig from "./particle_confi";
import "./Particlebackground.css";

export default function Particlebackground() {
  return (
    <div class="particleBackground">
      <Particles params={particleConfig}></Particles>
    </div>
  );
}
