import React, { useState } from "react"
import { Link } from "react-router-dom";
import { MDBMask, MDBView } from "mdbreact";

import Airbnb from "../images/AirBnb Logo w Name.png";
import SeaTransitCoverHover from "../images/SeattleTransit/STAltCover.png"
import SeaTransitCover from "../images/SeattleTransit/STCover.png"
import BaseCampCover from "../images/BaseCamp/BaseCampCover.png"
import BaseCampCoverHover from "../images/BaseCamp/Calendar.gif"
import WSWSCoverHover from "../images/WildlifeShelter/WSWSCover.png"
import WSWSCover from "../images/WildlifeShelter/WSWSCoverGreen.png"

export default function Design() {
    const path = window.location.pathname
    const [activeProject, setActiveProject] = useState(path)
    const [p1Image, setP1Image] = useState(SeaTransitCover)
    const [p2Image, setP2Image] = useState(BaseCampCover)
    const [p3Image, setP3Image] = useState(WSWSCover)
    const projectName = ["nullHolder", "Seattle Transit Rebrand", "Base Camp", "West Sound Wildlife Shelter", "Project 4"]

    return <div className="designProjects" onClick={e => setActiveProject(e.key)}>
        <Link to="/design/SeattleTransit">
            <MDBView hover>
                <div className="projectBox"
                     onClick={() => setActiveProject("/design/SeattleTransit")}
                     onMouseOver={() => setP1Image(SeaTransitCoverHover)}
                     onMouseOut={() => setP1Image(SeaTransitCover)}>
                    {/*style={styles.imageModified}*/}
                    <img className="coverImage"
                        src={p1Image}
                         alt="Seattle Transit Rebrand" />
                    <MDBMask overlay="black-strong">
                        <div className="hoverText">
                            <p>{projectName[1]}</p>
                            <p style={{fontSize: ".75em"}}>Visual Design & Brand Identity</p>
                        </div>
                    </MDBMask>
                </div>
            </MDBView>
        </Link>

        <Link to="/design/BaseCamp">
            <MDBView hover>
                <div className="projectBox"
                     onClick={() => setActiveProject("/design/BaseCamp")}
                     onMouseOver={() => setP2Image(BaseCampCoverHover)}
                     onMouseOut={() => setP2Image(BaseCampCover)}>
                    {/*Gif recording at 1908x876*/}
                    <img className="coverImage" src={p2Image} alt="Base Camp" />
                    <MDBMask overlay="black-strong">
                        <div className="hoverText">
                            <p >Base Camp</p>
                            <p style={{fontSize: ".75em"}}>UX Design</p>
                        </div>
                    </MDBMask>
                </div>
            </MDBView>
        </Link>

        <Link to="/design/WestSoundWildlifeShelter">
            <MDBView hover>
                <div className="projectBox"
                     onClick={() => setActiveProject("/design/WestSoundWildlifeShelter")}
                     onMouseOver={() => setP3Image(WSWSCoverHover)}
                     onMouseOut={() => setP3Image(WSWSCover)}>
                    <img className="coverImage"
                         src={p3Image}
                         alt="West Sound Wildlife Shelter" />
                    <MDBMask overlay="black-strong">
                        <div className="hoverText">
                            <p>{projectName[3]}</p>
                            <p style={{fontSize: ".75em"}}>Visual Design & Brand Identity</p>
                        </div>
                    </MDBMask>
                </div>
            </MDBView>
        </Link>

        {/*<Link to="/design/project4">*/}
        {/*    <MDBView hover>*/}
        {/*        <div id="project4" style={styles.projectBox} onClick={() => setActiveProject("/code/project4")}>*/}
        {/*            <img style={styles.image} src={Airbnb} alt="airbnb logo" />*/}
        {/*            <MDBMask overlay="black-strong">*/}
        {/*                <div style={styles.hoverText}>*/}
        {/*                    <p>Project 4 title</p>*/}
        {/*                    <p style={{fontSize: ".75em"}}>Project 4 Description</p>*/}
        {/*                </div>*/}
        {/*            </MDBMask>*/}
        {/*        </div>*/}
        {/*    </MDBView>*/}
        {/*</Link>*/}
    </div>
}

const styles= {
    hoverText: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        fontWeight: "500",
        fontSize: "1.45em",
        lineHeight: "16px",
        marginTop: "24px"
    },
    projectBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid rgba(0, 0, 0, 0.65)",
        margin: "10px",
        minHeight: "200px",
        height: "21vw",
        maxHeight: "21vw",
        minWidth: "275px",
        maxWidth: "47vw",
        width: "47vw",
        fontSize: "24px"
    },
    image: {
        minHeight: "198px",
        height: "20.75vw",
        maxHeight: "20.75vw",
        minWidth: "448px",
        maxWidth: "47vw",
        width: "47vw",
    },
    imageModified: {
        minHeight: "198px",
        height: "20.85vw",
        maxHeight: "20.85vw",
        minWidth: "448px",
        maxWidth: "47vw",
        width: "47vw",
    }
}