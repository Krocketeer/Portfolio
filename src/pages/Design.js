import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom";
import { MDBMask, MDBView } from "mdbreact";

import SeaTransitCoverHover from "../images/SeattleTransit/STAltCover.png"
import SeaTransitCover from "../images/SeattleTransit/STCover.png"
import BaseCampCover from "../images/BaseCamp/BaseCampCover.png"
import BaseCampCoverHover from "../images/BaseCamp/CalendarSmaller.gif"
import BaseCampCoverAlt from "../images/BaseCamp/BaseCampCoverAlt.png"
import WSWSCoverHover from "../images/WildlifeShelter/WSWSCover.png"
import WSWSCover from "../images/WildlifeShelter/WSWSCoverGreen.png"
import PortfolioCoverHover from "../images/ReactPortfolio/MacBookMockUpHover.png";
import PortfolioCover from "../images/ReactPortfolio/MacBookMockUp.png";

export default function Design() {
    useEffect(()  =>  {
        window.scrollTo(0, 0)
    }, [])

    const path = window.location.pathname
    const [activeProject, setActiveProject] = useState(path)
    const [p1Image, setP1Image] = useState(SeaTransitCover)
    const [p2Image, setP2Image] = useState(BaseCampCoverAlt)
    const [p3Image, setP3Image] = useState(WSWSCover)
    const [p4Image, setP4Image] = useState(PortfolioCover)
    const projectName = ["nullHolder", "Seattle Transit Rebrand", "Base Camp", "West Sound Wildlife Shelter",
                        "Portfolio Redesign"]

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
                     onMouseOut={() => setP2Image(BaseCampCoverAlt)}>
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

        <Link to="/design/PortfolioRedesign">
            <MDBView hover>
                <div className="projectBox"
                     onClick={() => setActiveProject("/design/PortfolioRedesign")}
                     onMouseOver={() => setP4Image(PortfolioCoverHover)}
                     onMouseOut={() => setP4Image(PortfolioCover)}>
                    <img className="coverImage"
                         src={p4Image}
                         alt="Portfolio Cover" />
                    <MDBMask overlay="black-strong">
                        <div className="hoverText">
                            <p>{projectName[4]}</p>
                            <p style={{fontSize: ".75em"}}>Web Design & React.js Development</p>
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