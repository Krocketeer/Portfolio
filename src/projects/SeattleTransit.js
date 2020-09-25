import React from "react"
import SeaTransitCover from "../images/STBigCover.png"
import Moodboard from "../images/Moodboard.png"

export default function SeattleTransit() {
    return <div className="intro">
        <div className="pageCover">
            <img src={SeaTransitCover} alt="Seattle Transit Rebrand" style={{width: "100%", height: "auto"}}/>
        </div>
        <div className="pageHeader">
            <h3>Seattle Public Transit</h3>
            <h6>Visual Design & Brand Identity</h6>

            <div className="details" style={{marginTop: "50px"}}>
                <div className="info">
                    <h6>Tools</h6>
                    <div>Adobe Illustrator</div>
                    <div>Adobe Photoshop</div>
                    <div>Figma</div>
                    <div>Lucid Chart</div>
                </div>
                <div id="goal" style={{paddingBottom: "50px"}}>
                    <h6>The Goal</h6>
                    <p> The rebrand of King County Metro and Sound Transit aims to unify the
                        two into one cohesive brand that represents Seattle public transit. </p>
                </div>
            </div>
            <div id="problemSpace" style={{paddingBottom: "50px"}}>
                <h6>Problem Space</h6>
                <p> Living in a high density city often means using public transportation as a way of commuting.
                    Whether it’s traveling to school, to work, or anything in between, a city’s public
                    transportation service must be extensive enough to support its community. For the city of
                    Seattle, two transit agencies — King County Metro and Sound Transit — fulfills the community’s
                    public transportation needs. King County Metro operates the majority of the local busses within
                    the city while Sound Transit operates regional busses in addition to the city’s rail service.
                    While both agencies serve the city of Seattle, they both maintain a different visual branding
                    on their buses and rail service from each other. This often causes confusion for out of city
                    visitors and generally those who are not familiar with how public transit works in Seattle. </p>
            </div>
            <div id="Moodboard">
                <h6>Setting the Mood</h6>
                <div style={styles.centerDiv}>
                    <p> The first step in creating a rebrand for Seattle public transit was figuring out what feeling
                        the rebrand should embody. I chose images that represent the lively night life of Seattle and
                        the numerous rich-nature colors that exist in and around the city. Particularly, I wanted to
                        incorporate things and places that were iconic to Seattle, such as Pike Place Market, and be
                        able to represent them in the rebrand. </p>
                    <img src={Moodboard} alt="Moodboard" style={{width: "75%", height: "auto"}}/>
                    <figcaption className="caption">Visual representation of the direction for the rebrand of Seattle public transit</figcaption>
                </div>
            </div>
            <div>
                <h6>Colors</h6>
                <div>

                </div>
            </div>
        </div>
    </div>
}

const styles= {
    centerDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "50px"
    }
}