import React, { useState } from "react"
import { Link } from "react-router-dom";
import { MDBMask, MDBView } from "mdbreact";
import Airbnb from "../images/AirBnb Logo w Name.png";
import SeaTransitCover from "../images/Cover.png"

export default function Design() {
    const path = window.location.pathname
    const [activeProject, setActiveProject] = useState(path)
    const projectName = ["nullHolder", "Seattle Transit Rebrand", "Project 2", "Project 3", "Project 4"]

    return <div className="designProjects" onClick={e => setActiveProject(e.key)}>
        <Link to="/design/seattleTransit">
            <MDBView hover>
                <div id={projectName[1]} style={styles.projectBox} onClick={e => setActiveProject("/design/seattleTransit")}>
                    <img style={styles.imageModified} src={SeaTransitCover} alt="Seattle Transit Rebrand" />
                    <MDBMask overlay="black-strong">
                        <div style={styles.hoverText}>
                            <p>{projectName[1]}</p>
                            <p style={{fontSize: ".75em"}}>Visual Design</p>
                        </div>
                    </MDBMask>
                </div>
            </MDBView>
        </Link>

        <Link to="/design/project2">
            <MDBView hover>
                <div id="project2" style={styles.projectBox} onClick={e => setActiveProject("/code/project2")}>
                    <img style={styles.image} src={Airbnb} alt="airbnb logo" />
                    <MDBMask overlay="black-strong">
                        <div style={styles.hoverText}>
                            <p>Project 2 title</p>
                            <p style={{fontSize: ".75em"}}>Project 2 Description</p>
                        </div>
                    </MDBMask>
                </div>
            </MDBView>
        </Link>

        <Link to="/design/project3">
            <MDBView hover>
                <div id="project3" style={styles.projectBox} onClick={e => setActiveProject("/code/project3")}>
                    <img style={styles.image} src={Airbnb} alt="airbnb logo" />
                    <MDBMask overlay="black-strong">
                        <div style={styles.hoverText}>
                            <p>Project 3 title</p>
                            <p style={{fontSize: ".75em"}}>Project 3 Description</p>
                        </div>
                    </MDBMask>
                </div>
            </MDBView>
        </Link>

        <Link to="/design/project4">
            <MDBView hover>
                <div id="project4" style={styles.projectBox} onClick={e => setActiveProject("/code/project4")}>
                    <img style={styles.image} src={Airbnb} alt="airbnb logo" />
                    <MDBMask overlay="black-strong">
                        <div style={styles.hoverText}>
                            <p>Project 4 title</p>
                            <p style={{fontSize: ".75em"}}>Project 4 Description</p>
                        </div>
                    </MDBMask>
                </div>
            </MDBView>
        </Link>
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
        border: "1px solid rgba(0, 0, 0, 0.65)",
        margin: "10px",
        minHeight: "200px",
        height: "21vw",
        maxHeight: "21vw",
        minWidth: "450px",
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