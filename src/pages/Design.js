import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import SeaTransitCoverHover from "../images/SeattleTransit/STAltCover.png"
import SeaTransitCover from "../images/SeattleTransit/STCover.png"
import BaseCampCoverHover from "../images/BaseCamp/CalendarSmaller.gif"
import BaseCampCover from "../images/BaseCamp/BaseCampCoverAlt.png"
import WSWSCoverHover from "../images/WildlifeShelter/WSWSCover.png"
import WSWSCover from "../images/WildlifeShelter/WSWSCoverGreen.png"
import PortfolioCover from "../images/ReactPortfolio/PortfolioCover.png"
import PortfolioCoverHover from "../images/ReactPortfolio/PortfolioCoverHover2.png"

export default function Design() {
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, []);

    useEffect(()=> {
        document.getElementById("project1").addEventListener("mouseover", () => {
            hover("project1-cover");
        });
        document.getElementById("project1").addEventListener("mouseout", () => {
            hover("project1-cover");
        });
    });

    useEffect(()=> {
        document.getElementById("project2").addEventListener("mouseover", ()=>{
            hover("project2-cover");
        });
        document.getElementById("project2").addEventListener("mouseout", ()=>{
            hover("project2-cover");
        });
    });

    useEffect(()=> {
        document.getElementById("project3").addEventListener("mouseover", ()=>{
            hover("project3-cover");
        });
        document.getElementById("project3").addEventListener("mouseout", ()=>{
            hover("project3-cover");
        });
    });

    useEffect(()=> {
        document.getElementById("project4").addEventListener("mouseover", ()=>{
            hover("project4-cover");
        });
        document.getElementById("project4").addEventListener("mouseout", ()=>{
            hover("project4-cover");
        });
    });

    const path = window.location.pathname;
    const [activeProject, setActiveProject] = useState(path);
    const projectName = ["nullHolder", "Seattle Transit Rebrand", "Base Camp", "West Sound Wildlife Shelter",
                        "Portfolio Redesign"];

    return <div className="designProjects" onClick={e => setActiveProject(e.key)}>
        <Link to="/design/SeattleTransit">
            <div className="projectBox" id="project1">
                <img id="project1-cover" className="coverImage" src={SeaTransitCover} alt="Seattle Transit Rebrand" />
                <div className="hover-overlay">
                    <img className="coverImage" src={SeaTransitCoverHover} alt="Seattle Transit Rebrand" />
                    <div className="hoverText overlay-text">
                        <p>{projectName[1]}</p>
                        <p style={{fontSize: ".75em"}}>Visual Design & Brand Identity</p>
                    </div>
                </div>
            </div>
        </Link>

        <Link to="/design/BaseCamp">
            <div className="projectBox" id="project2">
                <img id="project2-cover" className="coverImage" src={BaseCampCover} alt="Seattle Transit Rebrand" />
                <div className="hover-overlay">
                    <img className="coverImage" src={BaseCampCoverHover} alt="Seattle Transit Rebrand" />
                    <div className="hoverText overlay-text">
                        <p>{projectName[2]}</p>
                        <p style={{fontSize: ".75em"}}>UX Design</p>
                    </div>
                </div>
            </div>
        </Link>

        <Link to="/design/WestSoundWildlifeShelter">
            <div className="projectBox" id="project3">
                <img id="project3-cover" className="coverImage" src={WSWSCover} alt="Seattle Transit Rebrand" />
                <div className="hover-overlay">
                    <img className="coverImage" src={WSWSCoverHover} alt="Seattle Transit Rebrand" />
                    <div className="hoverText overlay-text">
                        <p>{projectName[3]}</p>
                        <p style={{fontSize: ".75em"}}>Visual Design & Brand Identity</p>
                    </div>
                </div>
            </div>
        </Link>

        <Link to="/design/PortfolioRedesign">
            <div className="projectBox" id="project4">
                <img id="project4-cover" className="coverImage" src={PortfolioCover} alt="Seattle Transit Rebrand" />
                <div className="hover-overlay">
                    <img className="coverImage" src={PortfolioCoverHover} alt="Seattle Transit Rebrand" />
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