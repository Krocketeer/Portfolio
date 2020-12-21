import React from "react"
import { SRLWrapper } from "simple-react-lightbox"
import ScrollArrow from "../components/ScrollArrow";

import pillars from "../images/WildlifeShelter/Pillars.png"
import logo from "../images/WildlifeShelter/Logo.png"
import type from "../images/WildlifeShelter/Type.png"
import colors from "../images/WildlifeShelter/Colors.png"
import mockups from "../images/WildlifeShelter/Mockups.png"

import PRCover from "../images/ReactPortfolio/MacBookMockUp.png"
import frontPage from "../images/ReactPortfolio/OldPortfolio/Front Page.png"
import projectLayout from "../images/ReactPortfolio/OldPortfolio/Page Layout.png"


export default function PortfolioRedesign() {
    return <SRLWrapper options={lightboxOptions}>
        <ScrollArrow />
        <div className="pageLayout">
            <div className="pageCover">
                <img src={PRCover} alt="Portfolio Redesign"
                     style={{width: "100%", height: "100%", cursor: "zoom-in"}} />
            </div>
            <div className="pageHeader">
                <h3>Portfolio Redesign</h3>
                <h6>Web Design & React.js Development</h6>

                <div className="details" style={{marginTop: "50px"}}>
                    <div className="info">
                        <h6>Tools</h6>
                        <div>Figma</div>
                        <div>React.js</div>
                    </div>
                    <div style={{paddingBottom: "50px"}}>
                        <h6>Background</h6>
                        <p> As a design student, I knew I needed to create a portfolio to showcase my design work. Over
                            the course of a few weeks during the winter break of my sophomore year, I quickly built my
                            portfolio using Wordpress and Elementor. However, I eventually became dissatisfied with the
                            design of my portfolio because it became outdated and did not reflect the style and skills
                            I had developed since originally building my portfolio.
                        </p>
                    </div>
                </div>
                <div id="goal" style={{paddingBottom: "50px"}}>
                    <h6>The Goal</h6>
                    <p> Recreate and redesign my portfolio to reflect the style and skills I have developed as a
                        designer. </p>
                </div>
                <div>
                    <h6>Old Portfolio Takeaways</h6>
                    <div style={styles.centerDiv50}>
                        <p> Before recreating my portfolio, I first took a look at my old portfolio and noted things
                            that I liked and did not like about the design. While I fundamentally wanted to redesign my
                            portfolio from scratch, there were aspects of my old portfolio that I wanted to keep going
                            forward. Mainly, I liked the simplicity of my rectangular layout since it struck a nice
                            balance between maximizing content per page and without feeling too overwhelming. However,
                            one thing I noticed that I didn't like was the varied amount of spacing and general lack of
                            grid structure for things on the website. (The old portfolio can be viewed at
                            <a href={links.oldPortfolio}> https://krocketeer.github.io/old-portfolio/</a>. Note: parts
                            of the site are broken because site was transferred from Wordpress to Github).
                        </p>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className="WSWSBrandAudit">
                                <img className="WSWSWebDesign" src={frontPage}
                                     alt="Successful design includes usage of organic colors and ways to get involved" />
                                <img className="WSWSWebDesign" src={projectLayout} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Sketching and Wireframing</h6>
                    <div style={styles.centerDiv50}>
                        <p> After conducting a brand audit, the team established four pillars to keep us grounded in
                            the organization's mission and identity while we were creating our redesigns. In particular,
                            my redesign emphasizes three things: wildlife, human-friendliness, and simplicity. </p>
                        <img id="WSWSPillars" src={pillars}
                             alt="Our designs aimed to empower, communicate, focus, and implement" />
                    </div>
                </div>
                <div>
                    <h6>Logo</h6>
                    <div style={styles.centerDiv50}>
                        <p> The logo and word mark work together to integrate a wildlife and a human aspect while still
                            remaining simple. Modeled after a harpy eagle, the logo consists of an S as the body and
                            a W as the ears. The bird sits inside a hour to portray how humans and animals can exist
                            together as a part of the community. </p>
                        <img id="WSWSLogo" src={logo} alt="Logo and word mark" />
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
                        <img id="WSWSType" src={type} alt="Typography layout for rebrand" />
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
                        <img id="WSWSColor" src={colors} alt="Color palette for rebrand" />
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
                            <img id="WSWSMockups" src={mockups} alt="list of icons used in high fidelity wireframes" />
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

const links = {
    oldPortfolio: "https://krocketeer.github.io/old-portfolio/"
}