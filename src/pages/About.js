import React, {useState} from "react"
import profile_pic from "../images/Test2.png";
import {Menu} from "antd";
import {BrowserRouter, Link, Route} from "react-router-dom";

function About() {
    return <div className="bio">
        <div id="text">
            <h1 style={{fontWeight: 350}}>Hello there</h1>
            <p>I'm Kenny, an undergraduate studying
                <a href="https://www.hcde.washington.edu/"> Human Centered Design & Engineering </a>
                at the University of Washington. I am interested in how design and data can be leveraged
                in order to create inclusive experiences for all. I love working with new people and in new
                situations to find out what it means to be a human.
            </p>
        </div>
        <img src={profile_pic} alt="Kenny Le"/>
    </div>
}

export default About