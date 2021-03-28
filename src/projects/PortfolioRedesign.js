import React, {useEffect} from "react"
import { SRLWrapper } from "simple-react-lightbox"
import ScrollArrow from "../components/ScrollArrow";

import PortfolioCover from "../images/ReactPortfolio/PortfolioCover.png"
// import PRCover from "../images/ReactPortfolio/MacBookMockUp.png"
import frontPage from "../images/ReactPortfolio/OldPortfolio/Front Page.png"
import projectLayout from "../images/ReactPortfolio/OldPortfolio/Page Layout.png"
import wireframes from "../images/ReactPortfolio/PortfolioWireframes.png"


export default function PortfolioRedesign() {
    useEffect(()  =>  {
        window.scrollTo(0, 0)
    }, [])

    return <SRLWrapper options={lightboxOptions}>
        <ScrollArrow />
        <div className="pageLayout">
            <div className="pageCover">
                <img src={PortfolioCover} alt="Portfolio Redesign"
                     style={{width: "100%", height: "100%", cursor: "zoom-in"}} />
            </div>
            <div className="pageHeader">
                <h3>Portfolio Redesign</h3>
                <h6>Web Design & React Development</h6>

                <div className="details" style={{marginTop: "50px"}}>
                    <div className="info">
                        <h6>Tools</h6>
                        <div>Figma</div>
                        <div>React.js</div>
                    </div>
                    <div style={{paddingBottom: "50px"}}>
                        <h6>Background</h6>
                        <p> As a design student, I knew I needed to create a portfolio to showcase my design work. Over
                            the course of a few weeks during the winter break of my sophomore year, I quickly built my
                            portfolio using Wordpress and Elementor. However, I eventually became dissatisfied with the
                            design of my portfolio because it became outdated and did not reflect the style and skills
                            I had developed since originally building my portfolio.
                        </p>
                    </div>
                </div>
                <div id="goal" style={{paddingBottom: "50px"}}>
                    <h6>The Goal</h6>
                    <p> Recreate and redesign my portfolio to reflect the style and skills I have developed as a
                        designer. </p>
                </div>
                <div>
                    <h6>Old Portfolio Takeaways</h6>
                    <div style={styles.centerDiv50}>
                        <p> Before recreating my portfolio, I first took a look at my old portfolio and noted things
                            that I liked and did not like about the design. While I fundamentally wanted to redesign my
                            portfolio from scratch, there were aspects of my old portfolio that I wanted to keep going
                            forward. Mainly, I liked the simplicity of my rectangular layout since it struck a nice
                            balance between maximizing content per page and without feeling too overwhelming. However,
                            one thing I noticed that I didn't like was the varied amount of spacing and general lack of
                            a grid structure for various components on the website. While I have taken down my old
                            portfolio, I a static version of it can be viewed
                            <a href={links.oldPortfolio}> here</a>. (Note: parts of the site are broken because it was
                            transferred from Wordpress to Github).
                        </p>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className="WSWSBrandAudit">
                                <img className="WSWSWebDesign" src={frontPage}
                                     alt="Rectangular layout of different projects" />
                                <img className="WSWSWebDesign" src={projectLayout}
                                    alt="Layout format for a project page" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Sketching and Wireframing</h6>
                    <div style={styles.centerDiv50}>
                        <p> With a general sense of what I wanted in the redesign, I sketched out some ideas to see how
                            those ideas would physically look like. I generally tried to maintain a modern and
                            simplistic design as most of my projects thus far have reflected this style though the use
                            of white space and key placements of color. After juggling a few ideas on paper, I then
                            created some wireframes — both a desktop and mobile version — of the most promising sketch.
                        </p>
                        <img id="WSWSPillars" src={wireframes}
                             alt="Desktop and Mobile Wireframe for portfolio" />
                    </div>
                </div>
                <div>
                    <h6>Programming the Portfolio & Reflection</h6>
                    <div style={styles.centerDiv50}>
                        <p> One of the main reasons why I decided to redesign my portfolio was because I wanted a more
                            granular control of what my portfolio would look like. While Wordpress and Elementor was
                            great for getting my starting portfolio going, I knew it wouldn't serve me well into the
                            future since my ability to customize various components was limited. Fortunately enough, I
                            was beginning to learn React as my first framework for web development. Although my
                            experience in React was limited to the one class I took at the time, I was determined to
                            code my entire portfolio. My progress in creating my portfolio in React was slow at first
                            due to me working out the technical details of how everything came together. I never
                            had a strong foundation in Javascript, HTML, or CSS and so being thrown into React
                            development meant I had to learn all of these at once. At times I still am unsure about
                            certain things that come up that are essential to React. However, over time I was able to
                            better understand how React worked — through trial and error as well as googling various
                            things. As of now, my portfolio is up and running, fully built in React (full code can be
                            found on my <a href={links.github}> Github</a>). I am continually updating my portfolio but
                            overall I am proud that I was able to create something from scratch using a totally new
                            framework that I have never used before.
                        </p>
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
}

const lightboxOptions = {
    showDownloadButton: false,
}

const links = {
    oldPortfolio: "https://krocketeer.github.io/old-portfolio/",
    github: "https://github.com/Krocketeer/Portfolio"
}