import React from "react"
import profile_pic from "../images/IMG_3352.jpeg";
import Typical from "react-typical"

export default function About() {
    return <div className="bio">
        <img src={profile_pic} alt="Kenny Le"/>
        <div id="text">
            <h1 style={{fontWeight: 350}}>Hello there —</h1>
            <h3 style={{fontWeight: 350}}>I'm Kenny, a
                <Typical
                    steps={[
                        "n user experience designer", 1250,
                        "n interaction designer", 1250,
                        "n user experience researcher", 1250,
                        " full stack developer", 1250,
                        " maker of things", 1250,
                        " lifelong learner.", 1250.
                    ]}
                    loop={1}
                    wrapper="span"
                />
            </h3>
            {/*<h3 style={{fontWeight: 350}}>based in Seattle, Washington.</h3>*/}
            <p> I am currently an undergraduate studying
                <a href="https://www.hcde.washington.edu/"> Human Centered Design & Engineering </a>
                at the University of Washington. My journey in design first started when I took an introductory course
                about inclusive design. It wasn't until then that I started to think about how important designing for
                all users is. As someone who grew up in a very diverse neighborhood of different
                ages, races, and abilities, I realized that each of us were unique in our own ways. Our backgrounds and
                lived experiences ultimately make us who we are and as a result, I strive to create equitable
                and inclusive experiences for all.
            </p>
            <p> When I'm not designing, you can find me outside taking photographs, swimming, or exploring what it
                means to be a human :)

            </p>
        </div>
    </div>
}