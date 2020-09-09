import React, { useState } from "react"
import { Link } from "react-router-dom";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Airbnb from "../images/AirBnb Logo w Name.png";


export default function Code() {
    const path = window.location.pathname
    const [activeProject, setActiveProject] = useState(path)
    const projectName = ["nullHolder", "Project 1", "Project 2", "Project 3", "Project 4"]

    return <div className="codeProjects" onClick={e => setActiveProject(e.key)}>
        <Link to="/code/project1">
            <MDBView hover>
                <div id="project1" style={styles.projectBox} onClick={e => setActiveProject("/code/project1")}>
                    <img style={styles.image} src={Airbnb} alt="airbnb logo" />
                    <MDBMask overlay="black-strong">
                        <div style={styles.hoverText}>
                            <p>Project 1 title</p>
                            <p>Project 1 Description</p>
                        </div>
                    </MDBMask>
                </div>
            </MDBView>
        </Link>

        <Link to="/code/project2">
            <MDBView hover>
                <div id="project2" style={styles.projectBox}>
                    <p>Project 2</p>
                    {/*<Link to="/code/codeProject2">{projectName[2]}</Link>*/}
                </div>
                <MDBMask className="flex-center" overlay="red-strong"></MDBMask>
            </MDBView>
        </Link>

        <Link to="/code/project3">
            <div id="project3" style={styles.projectBox}>
                <p>Project 3</p>
                {/*<Link to="/code/codeProject3">{projectName[3]}</Link>*/}
            </div>
        </Link>

        <div id="project4" style={styles.projectBox}>
            {/*<p>Project 4</p>*/}
            <Link to="/code/project4">{projectName[4]}</Link>
        </div>
    </div>
}

const styles={
    hoverText:{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        fontWeight: "500",
        fontSize: "24px",
        lineHeight: "24px",
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
        minHeight: "200px",
        height: "20.5vw",
        maxHeight: "20.5vw",
        minWidth: "450px",
        maxWidth: "47vw",
        width: "47vw",
    }
}


