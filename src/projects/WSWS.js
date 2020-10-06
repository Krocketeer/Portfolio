import React from "react"
import { SRLWrapper } from "simple-react-lightbox"
import ScrollArrow from "../components/ScrollArrow";

import WSWSCover from "../images/WildlifeShelter/WSWSCoverGreen.png"
import successful from "../images/WildlifeShelter/SuccessfulDesign.png"
import unsuccessful1 from "../images/WildlifeShelter/UnsuccessfulDesign1.png"
import unsuccessful2 from "../images/WildlifeShelter/UnsuccessfulDesign2.png"
import unsuccessful3 from "../images/WildlifeShelter/UnsuccessfulDesign3.png"
import pillars from "../images/WildlifeShelter/Pillars.png"
import logo from "../images/WildlifeShelter/Logo.png"
import type from "../images/WildlifeShelter/Type.png"
import colors from "../images/WildlifeShelter/Colors.png"
import mockups from "../images/WildlifeShelter/Mockups.png"


export default function WSWS() {
    return <SRLWrapper options={lightboxOptions}>
        <ScrollArrow/>
        <div className="pageLayout">
            <div className="pageCover">
                <img src={WSWSCover} alt="West Sound Wildlife Shelter"
                     style={{width: "100%", height: "100%", cursor: "zoom-in"}}/>
            </div>
            <div className="pageHeader">
                <h3>West Sound Wildlife Shelter</h3>
                <h6>Visual Design & Brand Identity</h6>

                <div className="details" style={{marginTop: "50px"}}>
                    <div className="info">
                        <h6>Tools</h6>
                        <div>Adobe Illustrator</div>
                        <div>Adobe Xd</div>
                    </div>
                    <div style={{paddingBottom: "50px"}}>
                        <h6>Background and Mission</h6>
                        <p> The West Sound Wildlife Shelter is a non-profit organization based in Washington that
                            provides “injured, orphaned, & sick wildlife a second chance at wildlife and promotes
                            the well-being of wildlife & their habitats through public outreach, education, and
                            involvement”. </p>
                    </div>
                </div>
                <div id="goal" style={{paddingBottom: "50px"}}>
                    <h6>The Goal</h6>
                    <p> Refresh and update the visual design of the West Sound Wildlife Shelter to match the
                        organization's current identity and mission. </p>
                </div>
                <div>
                    <h6>Understanding the Current Design</h6>
                    <div style={styles.centerDiv50}>
                        <p> The first step in redesigning and creating a visual refresh was doing a brand audit of the
                            organization. With a team of five others, we explored their website and noted several
                            instances of successful design as well as unsuccessful design (pain points) that a user
                            may encounter. Instances of successful design came from part of the website that directly
                            related to the organization's mission statement. Unsuccessful elements stemmed from parts
                            that drew users away. </p>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className="WSWSBrandAudit">
                                <img className="WSWSWebDesign" src={successful}
                                     alt="Successful design includes usage of organic colors and ways to get involved" />
                                <img className="WSWSWebDesign" src={unsuccessful1}
                                     alt="The website shows a lack of hierarchy, outdated information, and non-functional buttons" />
                            </div>
                            <div className="WSWSBrandAudit">
                                <img className="WSWSWebDesign" src={unsuccessful2}
                                     alt="There are various instances of too much information, broken links, and text inconsistencies" />
                                <img className="WSWSWebDesign" src={unsuccessful3}
                                     alt="The web design also shows inconsistent margins and navigation bar layouts" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Redesign Pillars & Communication Goals</h6>
                    <div style={styles.centerDiv50}>
                        <p> After conducting a brand audit, the team established four pillars to keep us grounded in
                            the organization's mission and identity while we were creating our redesigns. In particular,
                            my redesign emphasizes three things: wildlife, human-friendliness, and simplicity. </p>
                        <img id="WSWSPillars" src={pillars}
                             alt="Our designs aimed to empower, communicate, focus, and implement"/>
                    </div>
                </div>
                <div>
                    <h6>Logo</h6>
                    <div style={styles.centerDiv50}>
                        <p> The logo and word mark work together to integrate a wildlife and a human aspect while still
                            remaining simple. Modeled after a harpy eagle, the logo consists of an S as the body and
                            a W as the ears. The bird sits inside a hour to portray how humans and animals can exist
                            together as a part of the community. </p>
                        <img id="WSWSLogo" src={logo} alt="Logo and word mark"/>
                    </div>
                </div>
                <div>
                    <h6>Typography</h6>
                    <div style={styles.centerDiv50}>
                        <p> The two typefaces chosen reflect the messages of being friendly and welcoming while still
                            remaining simple and functional. Gibson is a nice blend of friendly and simple while
                            still being bold enough to catch people's attention. Paired with Gibson, is Poppins which
                            works well due to its softer, rounded font styling.
                        </p>
                        <img id="WSWSType" src={type} alt="Typography layout for rebrand"/>
                    </div>
                </div>
                <div>
                    <h6>Colors</h6>
                    <div style={styles.centerDiv50}>
                        <p style={{paddingBottom: "25px"}}>
                            Inspired by the mood board, the color palette pulls from many
                            of the vibrant imagery that exists in and around the city. Midnight serves as a base color that
                            many Seattlites are used to while ocean blue, blizzard blue, and minty green act as an accent
                            that is visible in bright and dark environments. Pine green and slate purple were chosen to
                            stand out against the other blues and greens while still being remaining cohesive with the
                            color scheme. </p>
                        <img id="WSWSColor" src={colors} alt="Color palette for rebrand"/>
                    </div>
                </div>
                <div>
                    <h6>Mobile Mockups</h6>
                    <div style={styles.centerDiv25}>
                        <p> In order to illustrate how various components of the redesign would be used, a mobile design
                            mockup was created. This example shows how a user would donate to the West Sound Wildlife
                            Shelter.
                        </p>
                        <div style={styles.centerDiv}>
                            <img id="WSWSMockups" src={mockups} alt="list of icons used in high fidelity wireframes"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SRLWrapper>
}

const styles = {
    centerDiv25: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "25px"
    },
    centerDiv50: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "50px"
    },
    centerDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}

const lightboxOptions = {
    showDownloadButton: false,
}