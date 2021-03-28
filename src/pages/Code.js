import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom";
import { MDBMask, MDBView } from "mdbreact";
import AirbnbCover from "../images/Airbnb/AirBnbCover.png";
import AirbnbCoverHover from "../images/Airbnb/AirBnbCoverHover.png"
import PortfolioCover from "../images/ReactPortfolio/PortfolioCover.png"
import PortfolioCoverHover from "../images/ReactPortfolio/PortfolioCoverHover2.png"
import ArduinoCover from "../images/Arduino/IMG_2129.png";
import ArduinoCoverHover from "../images/Arduino/Blinking.gif";
import TwitterCover from "../images/TwitterTrends/TwitterTrendsCover.png"
import TwitterCoverHover from "../images/TwitterTrends/TwitterTrendsHover.png"

export default function Code() {
    useEffect(()  =>  {
        window.scrollTo(0, 0)
    }, [])

    const path = window.location.pathname
    const [activeProject, setActiveProject] = useState(path)
    const [p1Image, setP1Image] = useState(AirbnbCoverHover)
    const [p2Image, setP2Image] = useState(PortfolioCover)
    const [p3Image, setP3Image] = useState(ArduinoCover)
    const [p4Image, setP4Image] = useState(TwitterCover)
    const projectName = ["nullHolder", "Insights into AirBnb & Cities", "Portfolio Redesign", "Arduino Projects",
        "Twitter Trends Mapper"]

    return <div className="codeProjects" onClick={e => setActiveProject(e.key)}>
        <Link to="/code/twittertrends">
            <MDBView hover>
                <div className="projectBox"
                     onClick={() => setActiveProject("/code/twittertrends")}
                     onMouseOver={() => setP4Image(TwitterCoverHover)}
                     onMouseOut={() => setP4Image(TwitterCover)}>
                    <img className="coverImage"
                         src={p4Image}
                         alt="Twitter Trends" />
                    <MDBMask overlay="black-strong">
                        <div className="hoverText">
                            <p>{projectName[4]}</p>
                            <p style={{fontSize: ".75em"}}>Full Stack Development</p>
                        </div>
                    </MDBMask>
                </div>
            </MDBView>
        </Link>

        <a href="https://kmdle-hcde439.web.app/">
            <MDBView hover>
                <div className="projectBox"
                     onMouseOver={() => setP3Image(ArduinoCoverHover)}
                     onMouseOut={() => setP3Image(ArduinoCover)}>
                    <img className="coverImage"
                         src={p3Image}
                         alt="Arduino Circuit" />
                    <MDBMask overlay="black-strong">
                        <div className="hoverText">
                            <p>{projectName[3]}</p>
                            <p style={{fontSize: ".75em"}}>Physical Computing</p>
                        </div>
                    </MDBMask>
                </div>
            </MDBView>
        </a>

        <Link to="/code/airbnb">
            <MDBView hover>
                <div className="projectBox"
                     onClick={() => setActiveProject("/code/airbnb")}
                     onMouseOver={() => setP1Image(AirbnbCover)}
                     onMouseOut={() => setP1Image(AirbnbCoverHover)}>
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
                            <p style={{fontSize: ".75em"}}>Web Design & React Development</p>
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


