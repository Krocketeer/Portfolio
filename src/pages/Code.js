import React, { useState } from "react"
import { Link } from "react-router-dom";
import { MDBMask, MDBView } from "mdbreact";
import Airbnb from "../images/AirBnb Logo w Name.png";
import PortfolioCover from "../images/ReactPortfolio/MacBookMockUp.png"
import PortfolioCoverHover from "../images/ReactPortfolio/MacBookMockUpHover.png"

export default function Code() {
    const path = window.location.pathname
    const [activeProject, setActiveProject] = useState(path)
    const [p1Image, setP1Image] = useState(Airbnb)
    const [p2Image, setP2Image] = useState(PortfolioCover)
    const projectName = ["nullHolder", "Insights into AirBnb & Cities", "Portfolio Redesign", "Project 3", "Project 4"]

    return <div className="codeProjects" onClick={e => setActiveProject(e.key)}>
        <Link to="/code/airbnb">
            <MDBView hover>
                <div className="projectBox"
                     onClick={() => setActiveProject("/code/airbnb")}
                     onMouseOver={() => setP1Image(Airbnb)}
                     onMouseOut={() => setP1Image(Airbnb)}>
                    <img className="coverImage"
                         src={p1Image}
                         alt="Airbnb" />
                    <MDBMask overlay="black-strong">
                        <div className="hoverText">
                            <p>{projectName[1]}</p>
                            <p style={{fontSize: ".75em"}}>Data Visualization</p>
                        </div>
                    </MDBMask>
                </div>
            </MDBView>
        </Link>

        <Link to="/design/PortfolioRedesign">
            <MDBView hover>
                <div className="projectBox"
                     onClick={() => setActiveProject("/design/PortfolioRedesign")}
                     onMouseOver={() => setP2Image(PortfolioCoverHover)}
                     onMouseOut={() => setP2Image(PortfolioCover)}>
                    <img className="coverImage"
                         src={p2Image}
                         alt="Portfolio Cover" />
                    <MDBMask overlay="black-strong">
                        <div className="hoverText">
                            <p>{projectName[2]}</p>
                            <p style={{fontSize: ".75em"}}>Web Design & React.js Development</p>
                        </div>
                    </MDBMask>
                </div>
            </MDBView>
        </Link>

    {/*    <Link to="/code/project2">*/}
    {/*        <MDBView hover>*/}
    {/*            <div id="project2" style={styles.projectBox} onClick={() => setActiveProject("/code/project2")}>*/}
    {/*                <img style={styles.image} src={Airbnb} alt="airbnb logo" />*/}
    {/*                <MDBMask overlay="black-strong">*/}
    {/*                    <div style={styles.hoverText}>*/}
    {/*                        <p>Project 2 title</p>*/}
    {/*                        <p>Project 2 Description</p>*/}
    {/*                    </div>*/}
    {/*                </MDBMask>*/}
    {/*            </div>*/}
    {/*        </MDBView>*/}
    {/*    </Link>*/}

    </div>
}

// const styles= {
//     hoverText: {
//         display: "flex",
//         flexDirection: "column",
//         flexWrap: "wrap",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//         color: "white",
//         fontWeight: "500",
//         fontSize: "1.45em",
//         lineHeight: "16px",
//         marginTop: "24px"
//     },
//     projectBox: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         // border: "1px solid rgba(0, 0, 0, 0.65)",
//         margin: "10px",
//         minHeight: "200px",
//         height: "21vw",
//         maxHeight: "21vw",
//         minWidth: "450px",
//         maxWidth: "47vw",
//         width: "47vw",
//         fontSize: "24px"
//     },
//     image: {
//         minHeight: "198px",
//         height: "20.75vw",
//         maxHeight: "20.75vw",
//         minWidth: "448px",
//         maxWidth: "47vw",
//         width: "47vw",
//     },
//     imageModified: {
//         minHeight: "198px",
//         height: "20.85vw",
//         maxHeight: "20.85vw",
//         minWidth: "448px",
//         maxWidth: "47vw",
//         width: "47vw",
//     }
// }


