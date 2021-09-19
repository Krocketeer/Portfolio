import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
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
            hover("code-project1-cover");
        });
        document.getElementById("code-project1").addEventListener("mouseout", () => {
            hover("code-project1-cover");
        });
    });

    useEffect(()=> {
        document.getElementById("code-project2").addEventListener("mouseover", ()=>{
            hover("code-project2-cover");
        });
        document.getElementById("code-project2").addEventListener("mouseout", ()=>{
            hover("code-project2-cover");
        });
    });

    useEffect(()=> {
        document.getElementById("code-project3").addEventListener("mouseover", ()=>{
            hover("code-project3-cover");
        });
        document.getElementById("code-project3").addEventListener("mouseout", ()=>{
            hover("code-project3-cover");
        });
    });

    useEffect(()=> {
        document.getElementById("code-project4").addEventListener("mouseover", ()=>{
            hover("code-project4-cover");
        });
        document.getElementById("code-project4").addEventListener("mouseout", ()=>{
            hover("code-project4-cover");
        });
    });

    const path = window.location.pathname
    const [activeProject, setActiveProject] = useState(path)
    const projectName = ["nullHolder", "Twitter Trends Mapper", "LED Light Bar", "Insights into AirBnb & Cities",
                        "Portfolio Redesign"]

    return <div className="codeProjects" onClick={e => setActiveProject(e.key)}>
        <Link to="/code/twittertrends">
            <div className="projectBox" id="code-project1">
                <img id="code-project1-cover" className="coverImage" src={TwitterCover} alt="Twitter Trends" />
                <div className="hover-overlay">
                    <img className="coverImage" src={TwitterCoverHover} alt="Twitter Trends" />
                    <div className="hoverText overlay-text">
                        <p>{projectName[1]}</p>
                        <p style={{fontSize: ".75em"}}>Full Stack Development</p>
                    </div>
                </div>
            </div>
        </Link>

        <Link to="/code/LightBar">
            <div className="projectBox" id="code-project2">
                <img id="code-project2-cover" className="coverImage" src={ArduinoCover} alt="LED Light Bar" />
                <div className="hover-overlay">
                    <img className="coverImage" src={ArduinoCoverHover} alt="LED Light Bar" />
                    <div className="hoverText overlay-text">
                        <p>{projectName[2]}</p>
                        <p style={{fontSize: ".75em"}}>Physical Computing</p>
                    </div>
                </div>
            </div>
        </Link>

        <Link to="/code/airbnb">
            <div className="projectBox" id="code-project3">
                <img id="code-project3-cover" className="coverImage" src={AirbnbCover} alt="Insights into Airbnb & Cities" />
                <div className="hover-overlay">
                    <img className="coverImage" src={AirbnbCoverHover} alt="Insights into Airbnb & Cities" />
                    <div className="hoverText overlay-text">
                        <p>{projectName[3]}</p>
                        <p style={{fontSize: ".75em"}}>Data Visualization</p>
                    </div>
                </div>
            </div>
        </Link>

        <Link to="/design/PortfolioRedesign">
            <div className="projectBox" id="code-project4">
                <img id="code-project4-cover" className="coverImage" src={PortfolioCover} alt="Portfolio Redesign" />
                <div className="hover-overlay">
                    <img className="coverImage" src={PortfolioCoverHover} alt="Portfolio Redesign" />
                    <div className="hoverText overlay-text">
                        <p>{projectName[4]}</p>
                        <p style={{fontSize: ".75em"}}>Web Design & React Development</p>
                    </div>
                </div>
            </div>
        </Link>
    </div>
};

function hover(id) {
    let element = document.getElementById(id);
    if (element.classList.contains("active")) {
        element.style.display = "block";
        element.nextElementSibling.style.display = "none";
        element.classList.remove("active");
    } else {
        element.style.display = "none";
        element.nextElementSibling.style.display = "block";
        element.classList.add("active");
    }
}

