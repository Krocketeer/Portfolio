import React from "react"
import { SRLWrapper } from "simple-react-lightbox"

import SeaTransitCover from "../images/SeattleTransit/STBigCover.png"
import moodBoard from "../images/SeattleTransit/Moodboard.png"
import colors from "../images/SeattleTransit/Colors.png"
import type from "../images/SeattleTransit/Type.png"
import userFlow from "../images/SeattleTransit/UserFlow.pdf"
import lowFi from "../images/SeattleTransit/LowFiWireframes.pdf"
import icons from "../images/SeattleTransit/Icons.png"
import busMockup from "../images/SeattleTransit/Bus Stop Mockup.png"
import busMockup2 from "../images/SeattleTransit/Bus Stop Mockup 2.png"
import lightRailSign from "../images/SeattleTransit/Light Rail Sign.png"
import railStationMockup from "../images/SeattleTransit/Rail Station Mockup.png"
import ORCA from "../images/SeattleTransit/Orca Card Mockup.png"
import ScrollArrow from "../components/ScrollArrow";

import BaseCampCover from "../images/BaseCamp/BaseCampCoverGray.png"
import findings from "../images/BaseCamp/Findings.png"
import primary from "../images/BaseCamp/Primary.png"
import secondary from "../images/BaseCamp/Secondary.png"
import tertiary from "../images/BaseCamp/Tertiary.png"
import anti from "../images/BaseCamp/Anti.png"
import journeyMap from "../images/BaseCamp/Journey Map.png"
import designSpec from "../images/BaseCamp/Design Spec.png"

export default function BaseCamp() {
    return <SRLWrapper options={lightboxOptions}>
        <ScrollArrow/>
        <div className="pageLayout">
            <div className="pageCover">
                <img src={BaseCampCover} alt="Base Camp"
                     style={{width: "100%", height: "auto", cursor: "zoom-in"}}/>
            </div>
            <div className="pageHeader">
                <h3>Base Camp</h3>
                <h6>UX Design</h6>

                <div className="details" style={{marginTop: "50px"}}>
                    <div className="info">
                        <div style={{paddingBottom: "25px"}}>
                            <h6>Tools</h6>
                            <div>Adobe Illustrator</div>
                            <div>Adobe Photoshop</div>
                            <div>Figma</div>
                            <div>Final Cut Pro X</div>
                            <div>Lucid Chart</div>
                        </div>
                        <div>
                            <h6>Collaborators</h6>
                            <div>Isabel Klein</div>
                            <div>Yvonne Huang</div>
                        </div>
                    </div>

                    <div id="problemSpace" style={{paddingBottom: "50px"}}>
                        <div style={{paddingBottom: "25px"}}>
                            <h6>Problem Space</h6>
                            <p> One of the easiest ways to start working out or participating in a sport is to do it with
                                other people. Whether it’s on a team, a club, or just a dedicated group of friends,
                                exercising with other people is how a lot of people stay committed. However, when people
                                aren’t able to exercise with their team, they usually fall off the boat — aren’t able to
                                stay committed to exercising — relatively fast. </p>
                        </div>
                        <div>
                            <h6>The Challenge</h6>
                            <p>How might we provide team-based athletes with a tool to help them train remotely?</p>
                        </div>
                    </div>
                </div>
                <div id="goal" style={{paddingBottom: "50px"}}>
                    <h6>The Goal</h6>
                    <p> Design an app platform that allows people to organize team goals, training plans, and
                        inter-team competition to facilitate structure, foster community, and motivate team athletes
                        to perform their best, even when alone. </p>
                </div>
                <div id="moodBoard">
                    <h6>Understanding Users</h6>
                    <div style={styles.centerDiv50}>
                        <p> As a team, we conducted 7 qualitative, semi-structured interviews in order to identify pain
                            points, motivations, and needs of coaches & athletes while they’re away from their team.
                            Our interviewees spanned 5 different sports — rowing, football, water polo, sailing, and
                            swimming — at the high school, collegiate club, Division-1, and National Team levels. After
                            a thematic analysis of our interviews, we identified these 5 key findings:
                        </p>
                        <img id="SeaTransMoodBoard" src={findings} alt="Key findings of interviews with athletes and coaches"/>
                        <p>
                            We then took our findings to create 4 personas (primary, secondary, tertiary, & anti) and
                            a user journey map to ground our design. The personas and journey map captured the pain
                            points, motivations, and needs of athletes & coaches identified in our interviews.
                        </p>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className="personaLayout">
                                <img className="personas" src={primary} alt="Primary Persona" />
                                <img className="personas" src={secondary} alt="Secondary Persona" />
                            </div>
                            <div className="personaLayout">
                                <img className="personas" src={tertiary} alt="Tertiary Persona" />
                                <img className="personas" src={anti} alt="Anti Persona" />
                            </div>
                            <img id="journeyMap" src={journeyMap} alt="User journey map for primary persona"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Design Spec</h6>
                    <div style={styles.centerDiv50}>
                        <p style={{paddingBottom: "25px"}}>
                            The first step in the ideation phase was creating a design spec to outline what our solution
                            would entail. After reflecting on our user research, we identified several problems that our
                            design should address to meet the needs of our persona archetypes. </p>
                        <img id="SeaTransColor" src={designSpec} alt="Color palette for rebrand"/>
                    </div>
                </div>
                <div>
                    <h6>Storyboards</h6>
                    <div style={styles.centerDiv50}>
                        <p>
                            Next, our team set out to create storyboards to highlight key interactions between users
                            and our design solution. Depicted is my storyboard that shows a coach using the design
                            solution to send workouts to their team.
                        </p>
                        <img id="SeaTransType" src={type} alt="Typography layout for rebrand"/>
                    </div>
                </div>
                <div>
                    <h6>User Flows & Low-Fi Designs</h6>
                    <div style={styles.centerDiv}>
                        <p style={{paddingBottom: "25px"}}>
                            Before designing a mobile and kiosk application for Seattle public transit, a user flow was
                            created out of interviews and observations to reflect the needs of riders. User flows focused
                            on core functionalities of a mobile and kiosk application that could best serve riders in their
                            commutes. The user flows then served as a grounding base for me as I created low-fidelity
                            designs of the mobile and kiosk applications.
                        </p>
                        <div id="SeaTransPDFs">
                            <div style={styles.centerDiv50}>
                                <embed id="SeaTransUserFlow" src={userFlow} allowFullScreen/>
                                <i>User Flow Diagram</i>
                            </div>
                            <div style={styles.centerDiv50}>
                                <embed id="SeaTransLowFi" src={lowFi} allowFullScreen/>
                                <i>Low-fidelity mockups of App and Kiosk tasks</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Iconography</h6>
                    <div style={styles.centerDiv50}>
                        <p>
                            One of the core visual aspects of a design is the usage of icons. Icons were selected based
                            on their clarity in helping riders understand information at a quick glance, either in person
                            or on an application.
                        </p>
                        <div style={styles.centerDiv}>
                            <img id="SeaTransIcons" src={icons} alt="list of icons used in high fidelity wireframes"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Hi-Fi Wireframes</h6>
                    <div style={styles.centerDiv50}>
                        <p> Equipped with a visual system and low-fidelity designs, I then created high-fidelity wireframes
                            of a mobile and kiosk application for Seattle public transit. These wireframes focused on
                            functionality, while maintaining a simple and elegant design. (Not working? Click here to
                            view the <a href={links.figmaAppWireframe}>App Wireframe</a> or the
                            <a href={links.figmaKioskWireframe}> Kiosk Wireframe</a> in Figma)
                        </p>
                        <div style={styles.centerDiv}>
                            <iframe id="figmaAppFrame"
                                    src={links.figmaAppEmbed}
                                    allowFullScreen title="Seattle Transit Rebrand App"/>
                            <iframe id="figmaKioskFrame"
                                    src={links.figmaKioskEmbed}
                                    allowFullScreen title="Seattle Transit Rebrand Kiosk"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Wayfinding System</h6>
                    <div>
                        <p style={{paddingBottom: "25px"}}>
                            An essential part of public transit is the usage of wayfinding in order to help riders navigate
                            the public transit system. Wayfinding signs were created to be big and visually distinct so
                            that riders can easily understand the information on the signs as they are heading to their
                            destination. In addition, the ORCA card was updated to a more modern and simplistic design to
                            compliment the styles shown in the rebrand. </p>
                        <div style={styles.centerDiv}>
                            <img id="SeaTransWayfinding" src={busMockup} alt="Mockup of Signs at a Bus Stop"/>
                            <img id="SeaTransWayfinding" src={busMockup2} alt="Mockup of Signs at a Bus Stop"/>
                            <img id="SeaTransWayfinding" src={lightRailSign} alt="Mockup of Light Rail navigational signs"/>
                            <img id="SeaTransWayfinding" src={railStationMockup} alt="Mockup of Light Rail navigational signs"/>
                            <img id="SeaTransWayfinding" src={ORCA} alt="Mockup of front and back of ORCA card"/>
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

const links = {
    figmaAppWireframe: "https://www.figma.com/proto/HxQYDPyEaua4wPOzOtMWkc/Seattle-Transit-Rebrand-App?node-id=2%3A10&scaling=min-zoom",
    figmaKioskWireframe: "https://www.figma.com/proto/9pk8hfFcEeL6X3KRpe91Cd/Seattle-Transit-Rebrand-Kiosk?node-id=168%3A489&scaling=min-zoom",
    figmaAppEmbed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHxQYDPyEaua4wPOzOtMWkc%2FSeattle-Transit-Rebrand-App%3Fnode-id%3D2%253A10%26viewport%3D78%252C241%252C0.29441380500793457%26scaling%3Dscale-down&chrome=DOCUMENTATION",
    figmaKioskEmbed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9pk8hfFcEeL6X3KRpe91Cd%2FSeattle-Transit-Rebrand-Kiosk%3Fnode-id%3D168%253A489%26viewport%3D-154%252C680%252C0.17509283125400543%26scaling%3Dscale-down&chrome=DOCUMENTATION"
}

const lightboxOptions = {
    showDownloadButton: false,
}