import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import hover from "../components/Hover.js"
import AirbnbCover from "../images/Airbnb/AirBnbCoverHover.png";
import AirbnbCoverHover from "../images/Airbnb/AirBnbCover.png";
import PortfolioCover from "../images/ReactPortfolio/PortfolioCover.png"
import PortfolioCoverHover from "../images/ReactPortfolio/PortfolioCoverHover.png"
import ArduinoCover from "../images/LightBar/LightBarCover.png";
import ArduinoCoverHover from "../images/LightBar/LightBarCoverHover.png";
import TwitterCover from "../images/TwitterTrends/TwitterTrendsCover.png"
import TwitterCoverHover from "../images/TwitterTrends/TwitterTrendsHover.png"


export default function Code() {
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    useEffect(()=> {
        document.getElementById("code-project1").addEventListener("mouseover", () => {
            hover("codeProject1Cover");
        });
        document.getElementById("code-project1").addEventListener("mouseout", () => {
            hover("codeProject1Cover");
        });
    });

    useEffect(()=> {
        document.getElementById("code-project2").addEventListener("mouseover", ()=>{
            hover("codeProject2Cover");
        });
        document.getElementById("code-project2").addEventListener("mouseout", ()=>{
            hover("codeProject2Cover");
        });
    });

    useEffect(()=> {
        document.getElementById("code-project3").addEventListener("mouseover", ()=>{
            hover("codeProject3Cover");
        });
        document.getElementById("code-project3").addEventListener("mouseout", ()=>{
            hover("codeProject3Cover");
        });
    });

    useEffect(()=> {
        document.getElementById("code-project4").addEventListener("mouseover", ()=>{
            hover("codeProject4Cover");
        });
        document.getElementById("code-project4").addEventListener("mouseout", ()=>{
            hover("codeProject4Cover");
        });
    });

    const path = window.location.pathname
    const [activeProject, setActiveProject] = useState(path)
    const projectName = ["nullHolder", "Twitter Trends Mapper", "LED Light Bar", "Insights into AirBnb & Cities",
                        "Portfolio Redesign"]

    return <div className="codeProjects" onClick={e => setActiveProject(e.key)}>
        <Link to="/code/twittertrends">
            <div className="projectBox" id="code-project1">
                <img id="codeProject1Cover" className="coverImage" src={TwitterCover} alt="Twitter Trends" />
                <div className="hoverOverlay">
                    <img className="coverImage" src={TwitterCoverHover} alt="Twitter Trends" />
                    <div className="hoverText overlayText">
                        <p>{projectName[1]}</p>
                        <p style={{fontSize: ".75em"}}>Full Stack Development</p>
                    </div>
                </div>
            </div>
        </Link>

        <Link to="/code/LightBar">
            <div className="projectBox" id="code-project2">
                <img id="codeProject2Cover" className="coverImage" src={ArduinoCover} alt="LED Light Bar" />
                <div className="hoverOverlay">
                    <img className="coverImage" src={ArduinoCoverHover} alt="LED Light Bar" />
                    <div className="hoverText overlayText">
                        <p>{projectName[2]}</p>
                        <p style={{fontSize: ".75em"}}>Physical Computing</p>
                    </div>
                </div>
            </div>
        </Link>

        <Link to="/code/airbnb">
            <div className="projectBox" id="code-project3">
                <img id="codeProject3Cover" className="coverImage" src={AirbnbCover} alt="Insights into Airbnb & Cities" />
                <div className="hoverOverlay">
                    <img className="coverImage" src={AirbnbCoverHover} alt="Insights into Airbnb & Cities" />
                    <div className="hoverText overlayText">
                        <p>{projectName[3]}</p>
                        <p style={{fontSize: ".75em"}}>Data Visualization</p>
                    </div>
                </div>
            </div>
        </Link>

        <Link to="/design/PortfolioRedesign">
            <div className="projectBox" id="code-project4">
                <img id="codeProject4Cover" className="coverImage" src={PortfolioCover} alt="Portfolio Redesign" />
                <div className="hoverOverlay">
                    <img className="coverImage" src={PortfolioCoverHover} alt="Portfolio Redesign" />
                    <div className="hoverText overlayText">
                        <p>{projectName[4]}</p>
                        <p style={{fontSize: ".75em"}}>Web Design & React Development</p>
                    </div>
                </div>
            </div>
        </Link>
    </div>
};
