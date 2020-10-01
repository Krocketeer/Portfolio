import React from "react"
import SeaTransitCover from "../images/STBigCover.png"
import moodBoard from "../images/Moodboard.png"
import colors from "../images/Colors.png"
import type from "../images/Type.png"
import userFlow from "../images/UserFlow.pdf"
import lowFi from "../images/LowFiWireframes.pdf"
import icons from "../images/Icons.png"
import icons2 from "../images/Icons2.png"

export default function SeattleTransit() {
    return <div className="pageLayout">
        <div className="pageCover">
            <img src={SeaTransitCover} alt="Seattle Transit Rebrand" style={{width: "100%", height: "auto"}}/>
        </div>
        <div className="pageHeader">
            <h3>Seattle Public Transit</h3>
            <h6>Visual Design & Brand Identity</h6>

            <div className="details" style={{marginTop: "50px"}}>
                <div className="info">
                    <h6>Tools</h6>
                    <div>Adobe Illustrator</div>
                    <div>Adobe Photoshop</div>
                    <div>Figma</div>
                    <div>Lucid Chart</div>
                </div>
                <div id="problemSpace" style={{paddingBottom: "50px"}}>
                    <h6>Problem Space</h6>
                    <p> Living in a high density city often means using public transportation as a way of commuting.
                        Whether it’s traveling to school, to work, or anything in between, a city’s public
                        transportation service must be extensive enough to support its community. For the city of
                        Seattle, two transit agencies — King County Metro and Sound Transit — fulfills the community’s
                        public transportation needs. King County Metro operates the majority of the local busses within
                        the city while Sound Transit operates regional busses in addition to the city’s rail service.
                        While both agencies serve the city of Seattle, they both maintain a different visual branding
                        on their buses and rail service from each other. This often causes confusion for out of city
                        visitors and generally those who are not familiar with how public transit works in Seattle. </p>
                </div>
            </div>
            <div id="goal" style={{paddingBottom: "50px"}}>
                <h6>The Goal</h6>
                <p> The rebrand of King County Metro and Sound Transit aims to unify the
                    two into one cohesive brand that represents Seattle public transit. </p>
            </div>
            <div id="moodBoard">
                <h6>Setting the Mood</h6>
                <div style={styles.centerDiv}>
                    <p> The first step in creating a rebrand for Seattle public transit was figuring out what feeling
                        the rebrand should embody. I chose images that represent the lively night life of Seattle and
                        the numerous rich-nature colors that exist in and around the city. Particularly, I wanted to
                        incorporate things and places that were iconic to Seattle, such as Pike Place Market, and be
                        able to represent them in the rebrand. </p>
                    <img src={moodBoard} alt="Mood board" style={{width: "75%", height: "auto"}}/>
                    <figcaption className="caption">Visual representation of the direction for the rebrand of Seattle public transit</figcaption>
                </div>
            </div>
            <div>
                <h6>Colors</h6>
                <div style={styles.centerDiv}>
                    <p style={{paddingBottom: "25px"}}> Inspired by the mood board, the color palette pulls from many
                        of the vibrant imagery that exists in and around the city. Midnight serves as a base color that
                        many Seattlites are used to while ocean blue, blizzard blue, and minty green act as an accent
                        that is visible in bright and dark environments. Pine green and slate pruple were chosen to
                        stand out against the other blues and greens while still being remaining cohesive with the
                        color scheme. </p>
                    <img id="SeaTransColor" src={colors} alt="Color palette for rebrand"/>
                </div>
            </div>
            <div>
                <h6>Typography</h6>
                <div style={styles.centerDiv}>
                    <p style={{paddingBottom: "25px"}}>
                        One of the main ways to communicate information towards riders of Seattle public transit is
                        through text. As a result, the typefaces of the text need to be visually distinct enough for
                        riders to be able to read, even if they are rushing to get where they are going. Cabin was
                        chosen for its modern look while being bold enough to catch riders’ eyes. Open Sans pairs
                        well with Cabin, creating a cohesive system.
                    </p>
                    <img id="SeaTransType" src={type} alt="Typography layout for rebrand"/>
                </div>
            </div>
            <div>
                <h6>User Flows & Low-Fi Designs</h6>
                <div style={styles.centerDiv25}>
                    <p style={{paddingBottom: "25px"}}>
                        Before designing a mobile and kiosk application for Seattle public transit, a user flow was
                        created out of interviews and observations to reflect the needs of riders. User flows focused
                        on core functionalities of a mobile and kiosk application that could best serve riders in their
                        commutes. The user flows then served as a grounding base for me as I created low-fidelity
                        designs of the mobile and kiosk applications.
                    </p>
                    <div id="SeaTransPDFs">
                        <embed id="SeaTransUserFlow" src={userFlow} allowFullScreen/>
                        <embed id="SeaTransLowFi" src={lowFi} allowFullScreen/>
                    </div>
                </div>
            </div>
            <div>
                <h6>Iconography</h6>
                <div style={styles.centerDiv25}>
                    <p style={{paddingBottom: "25px"}}>
                        One of the core visual aspects of a design is the usage of icons. Icons were selected based
                        on their clarity in helping riders understand information at a quick glance, either in person
                        or on an application.
                    </p>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <img id="SeaTransIcons" src={icons} alt="list of icons for rebrand"/>
                        <img id="SeaTransIcons" src={icons2} alt="second list of icons for rebrand"/>
                    </div>
                </div>
            </div>
            <div>
                <h6>Hi-Fi Wireframes</h6>
                <div style={styles.centerDiv25}>
                    <p style={{paddingBottom: "25px"}}>
                        Equipped with a visual system and low-fidelity designs, I then created high-fidelity wireframes
                        of a mobile and kiosk application for Seattle public transit. These wireframes focused on
                        functionality, while maintaining a simple and elegant design.
                    </p>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <iframe id="figmaFrame"
                                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHxQYDPyEaua4wPOzOtMWkc%2FSeattle-Transit-Rebrand-App%3Fnode-id%3D2%253A10%26viewport%3D78%252C241%252C0.29441380500793457%26scaling%3Dscale-down&chrome=DOCUMENTATION"
                                allowFullScreen title="Seattle Transit Rebrand App"/>
                        <iframe id="figmaFrame"
                                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9pk8hfFcEeL6X3KRpe91Cd%2FSeattle-Transit-Rebrand-Kiosk%3Fnode-id%3D168%253A489%26viewport%3D-154%252C680%252C0.17509283125400543%26scaling%3Dscale-down&chrome=DOCUMENTATION"
                                allowFullScreen title="Seattle Transit Rebrand Kiosk"/>
                    </div>
                </div>
            </div>
            <div>
                <h6>Wayfinding System</h6>
                <div>
                    <p> An essential part of public transit is the usage of wayfinding in order to help riders navigate
                        the public transit system. Wayfinding signs were created to be big and visually distinct so
                        that riders can easily understand the information on the signs as they are heading to their
                        destination. An ORCA card mock up was also created to visually represent the rebrand on
                        something that riders would be using everyday. </p>
                </div>
            </div>
        </div>
    </div>
}

const styles= {
    centerDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "50px"
    },
    centerDiv25: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "25px"
    }
}