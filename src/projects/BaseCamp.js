import React, {useEffect} from "react"
import "../css/BaseCamp.css"
import { SRLWrapper } from "simple-react-lightbox"
import ScrollArrow from "../components/ScrollArrow"

import BaseCampCover from "../images/BaseCamp/BaseCampCoverGray.png"
import findings from "../images/BaseCamp/Findings.png"
import primary from "../images/BaseCamp/Primary.png"
import secondary from "../images/BaseCamp/Secondary.png"
import tertiary from "../images/BaseCamp/Tertiary.png"
import anti from "../images/BaseCamp/Anti.png"
import journeyMap from "../images/BaseCamp/Journey Map.png"
import designSpec from "../images/BaseCamp/Design Spec.png"
import storyboard from "../images/BaseCamp/Storyboard.png"
import infoArch from "../images/BaseCamp/InformationArchitectureGray.png"
import paperProto from "../images/BaseCamp/PaperPrototypeAnnotated.pdf"
import lowFi from "../images/BaseCamp/LowFiWireframes.pdf"
import wireframes from "../images/BaseCamp/Wireframes.pdf"
import designSys from "../images/BaseCamp/Design System.png"

export default function BaseCamp() {
    useEffect(()  =>  {
        window.scrollTo(0, 0)
    }, [])

    return <SRLWrapper options={lightboxOptions}>
        <ScrollArrow />
        <div className="pageLayout">
            <div className="pageCover">
                <img src={BaseCampCover} alt="Base Camp"
                     style={{width: "100%", height: "100%", cursor: "zoom-in"}} />
            </div>
            <div className="pageHeader">
                <h3>Base Camp</h3>
                <h6>UX Design</h6>

                <div className="details" style={{marginTop: "50px"}}>
                    <div className="info">
                        <div style={{paddingBottom: "25px"}}>
                            <h6>Tools</h6>
                            <div>Figma</div>
                            <div>Illustrator</div>
                            <div>Lucid Chart</div>
                            <div>Photoshop</div>
                        </div>
                        <div>
                            <h6>Collaborators</h6>
                            <div>
                                <a href={links.isabelPortfolio}>Isabel Klein</a>
                            </div>
                            <div>Yvonne Huang</div>
                        </div>
                    </div>

                    <div id="problemSpace" style={{paddingBottom: "50px"}}>
                        <div style={{paddingBottom: "25px"}}>
                            <h6>Problem Space</h6>
                            <p> One of the easiest ways to start working out or participating in a sport is to do it
                                with other people. Whether it’s on a team, a club, or just a dedicated group of friends,
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
                <div style={{paddingBottom: "50px"}}>
                    <h6>The Goal</h6>
                    <p> Design an app platform that allows people to organize team goals, training plans, and
                        inter-team competition to facilitate structure, foster community, and motivate team athletes
                        to perform their best, even when alone.
                    </p>
                </div>
                <div>
                    <h6>Understanding Users</h6>
                    <div style={styles.centerDiv50}>
                        <p> As a team, we conducted 7 qualitative, semi-structured interviews in order to identify pain
                            points, motivations, and needs of coaches & athletes while they’re away from their team.
                            Our interviewees spanned 5 different sports — rowing, football, water polo, sailing, and
                            swimming — at the high school, collegiate club, Division-1, and National Team levels. After
                            a thematic analysis of our interviews, we identified these 5 key findings:</p>
                        <img id="BaseCampUserFindings" src={findings} alt="Key findings of interviews with athletes and coaches" />
                        <p style={{paddingBottom: "25px"}}>
                            We then took our findings to create 4 personas (primary, secondary, tertiary, & anti) and
                            a user journey map to ground our design. The personas and journey map captured the pain
                            points, motivations, and needs of athletes & coaches identified in our interviews.
                        </p>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className="BaseCampPersonaLayout">
                                <img className="BaseCampPersona" src={primary} alt="Primary Persona" />
                                <img className="BaseCampPersona" src={secondary} alt="Secondary Persona" />
                            </div>
                            <div className="BaseCampPersonaLayout">
                                <img className="BaseCampPersona" src={tertiary} alt="Tertiary Persona" />
                                <img className="BaseCampPersona" src={anti} alt="Anti Persona" />
                            </div>
                            <img id="BaseCampJourneyMap" src={journeyMap} alt="User journey map for primary persona" />
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Design Spec</h6>
                    <div style={styles.centerDiv50}>
                        <p> The first step in the ideation phase was creating a design spec to outline what our solution
                            would entail. After reflecting on our user research, we identified several problems that our
                            design should address to meet the needs of our persona archetypes.
                        </p>
                        <img id="BaseCampDesignSpec" src={designSpec} alt="Problems and goals for design solution" />
                    </div>
                </div>
                <div>
                    <h6>Storyboards</h6>
                    <div style={styles.centerDiv50}>
                        <p style={{paddingBottom: "25px"}}>
                            Next, our team set out to create storyboards to highlight key interactions between users
                            and our design solution. Shown below, is my storyboard that shows a coach using the design
                            solution to send workouts to their team.
                        </p>
                        <img className="SingleImage" id="BaseCampStoryBoard" src={storyboard} alt="Storyboard of coaching using design solution" />
                    </div>
                </div>
                <div>
                    <h6>Information Architecture</h6>
                    <div style={styles.centerDiv50}>
                        <p style={{paddingBottom: "25px"}}>
                            Afterwards, the team came together to create a list of features that we would want to
                            include in our design. Grounding ourselves within our research, we brainstormed and then
                            narrowed down the list of features into 5 main sections: workout feed, leaderboards, add
                            workout, training, and communication. These were then mapped out with an information
                            architecture to show how each section would exist within our design.
                        </p>
                        <img id="BaseCampInfoArch" src={infoArch} alt="Information Architecture for app" />
                    </div>
                </div>
                <div>
                    <h6>Paper Prototypes & Wireframes</h6>
                    <div style={styles.centerDiv50}>
                        <p style={{paddingBottom: "25px"}}> Before we could start on the wireframes, each of us created
                            paper prototypes of the 5 different sections outlined in the information architecture. This
                            primarily allowed us materialize our ideas and experiment with what we wanted our design to
                            look like. Afterwards, we sketched out our paper prototypes into wireframes and they
                            eventually served as the basis for our digitalized wireframes. Of the 5 main sections, I
                            focused the feed and leaderboards.
                        </p>
                        <div id="BaseCampPDFs">
                            <div style={styles.centerDiv50}>
                                {/*<embed id="SeaTransUserFlow" src={paperProto} allowFullScreen/>*/}
                                {/*https://stackoverflow.com/questions/1244788/embed-vs-object*/}
                                <object id="BaseCampPaperProto" data={paperProto} type="application/pdf">Annotated paper prototypes</object>
                                <i>Annotated paper prototypes</i>
                            </div>
                            <div style={styles.centerDiv50}>
                                <object id="BaseCampLowFi" data={lowFi} type="application/pdf">Low-fidelity mockups of feed and leaderboard sections</object>
                                {/*<embed id="BaseCampLowFi" src={lowFi} allowFullScreen/>*/}
                                <i>Low-fidelity mockups of feed and leaderboard sections</i>
                            </div>
                            <div style={styles.centerDiv50}>
                                <object id="BaseCampWireFrames" data={wireframes} type="application/pdf">Digitalized wireframes of feed and leaderboard sections</object>
                                {/*<embed id="SeaTransLowFi" src={wireframes} allowFullScreen/>*/}
                                <i>Digitalized wireframes of feed and leaderboard sections</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Design System</h6>
                    <div style={styles.centerDiv50}>
                        <p> After some time working apart to create paper prototypes and wireframes, we then came
                            together to create a centralized design system to ensure that our high fidelity prototype
                            would be visually and functionally cohesive.
                        </p>
                        <p> The orange was chosen as our primary color because of its bright vibrancy and natural
                            energetic feeling. This in combination with its association with the seasons encourages
                            users to be active and achieve their goals. The main headings within our design use Futura
                            while everything else is in Open Sans. Futura conveys a sense of efficiency and forwardness
                            that many athletes are accustomed to while Open Sans was chosen for its welcoming and
                            friendly feeling.
                        </p>
                        <img id="BaseCampDesignSys" src={designSys} alt="Centralized design system for the app" />
                    </div>
                </div>

                <div>
                    <h6>Interactive Prototype</h6>
                    <div style={styles.centerDiv50}>
                        <p> After finishing our wireframes and design system, we then created high fidelity wireframes
                            and an interactive prototype of our design. (Not working?
                            <a href={links.figmaAppWireframe}> Click here</a> to view the prototype in Figma)
                        </p>
                        <div style={styles.centerDiv}>
                            <iframe id="figmaAppFrame"
                                    src={links.figmaAppEmbed}
                                    allowFullScreen title="Seattle Transit Rebrand App" />
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
    centerDiv50NoAlign: {
        display: "flex",
        flexDirection: "column",
        paddingBottom: "50px"
    },

}

const links = {
    isabelPortfolio: "https://www.isabelklein.com",
    figmaAppWireframe: "https://www.figma.com/proto/v356mAOOar9qnXXQyQIgs1/Base-Camp?node-id=527%3A2585&viewport=268%2C736%2C0.25&scaling=scale-down",
    figmaAppEmbed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fv356mAOOar9qnXXQyQIgs1%2FBase-Camp%3Fnode-id%3D527%253A2585%26viewport%3D268%252C736%252C0.25%26scaling%3Dscale-down&chrome=DOCUMENTATION",
}

const lightboxOptions = {
    showDownloadButton: false,
}