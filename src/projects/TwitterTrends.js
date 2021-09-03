import React, {useEffect} from "react"
import { SRLWrapper } from "simple-react-lightbox"
import ScrollArrow from "../components/ScrollArrow";
import TwitterCover from "../images/TwitterTrends/TwitterTrendsCover.png"

export default function TwitterTrends() {
    useEffect(()  =>  {
        window.scrollTo(0, 0)
    }, [])

    return <SRLWrapper options={lightboxOptions}>
        <ScrollArrow />
        <div className="pageLayout">
            <div className="pageCover">
                <img src={TwitterCover} alt="Twitter Trends Mapper"
                     style={{width: "100%", height: "100%", cursor: "zoom-in"}} />
            </div>
            <div className="pageHeader">
                <h3>Twitter Trends Mapper</h3>
                <h6>Full Stack Development</h6>

                <div className="details" style={{marginTop: "50px"}}>
                    <div className="info">
                        <div style={{paddingBottom: "25px"}}>
                            <h6>Tools</h6>
                            <div>Python</div>
                            <div>React</div>
                            <div>HTML + CSS</div>
                        </div>
                        <div>
                            <h6>Collaborators</h6>
                            <div>
                                <a href={links.carolPortfolio}>Carol Lei</a>
                            </div>
                        </div>
                    </div>
                    <div style={{paddingBottom: "50px"}}>
                        <h6>Overview</h6>
                        <p> Twitter Trends Mapper is a web app that utilizes both the Twitter and Google Maps API,
                            to display trending hashtags based on location. Users can view information about cities
                            with trending hashtags or search up trends by a specific city. This project uses Python as
                            the backend and React as the frontend.
                        </p>
                    </div>
                </div>
                <div>
                    <h6>Background</h6>
                    <div style={styles.centerDiv50}>
                        <p> As a part of a class project, we were asked to leverage the data from two different APIs
                            and add value to them — creating an app that did more than just displaying data from an API.
                            During a brainstorming session with my teammate where we were just throwing around ideas, we
                            eventually realized that Twitter did not offer a native way to see what was trending in a
                            specific city. Since Twitter Trends are heavily dependent on what's happening around the
                            world, it would be an interesting insight to see how trends vary depending on where a user
                            is in the world. After getting more concrete details on how this could be accomplished, we
                            were ready to create our web app.
                        </p>
                    </div>
                </div>
                <div>
                    <h6>Programming the Web App</h6>
                    <div style={styles.centerDiv50}>
                        <p style={{paddingBottom: "25px"}}>
                            My partner was primarily in charge of working with the Twitter API and creating the frontend
                            design of the web app while I took the lead of working with the Google Maps API and linking
                            together the React frontend with the Flask (Python) backend. This was the first time I had
                            ever created a Flask-React app so the first part of the problem was figuring out how to send
                            data from the backend to the frontend. The backend utilized the Google Maps API to convert
                            city names to longitude & latitude coordinates or vice versa while the frontend utilized a
                            different part of the Google Maps API to actually plot those locations on a map. I
                            eventually discovered that I could send this data as a JSON using Flask's web routes and
                            React's fetches. Once I successfully was able to retrieve the backend data, I was then able
                            to pass that data to different React components, created by my partner, in order to make our
                            web app worked as intended. After problem solving the remaining bugs in the web app's
                            functionality, we published our web app to Heroku (the web app can be viewed
                            <a href={links.twitterMap}> here</a> and the full code can be found on my {" "}
                            <a href={links.github}> Github</a>).
                        </p>
                        <div style={styles.centerDiv}>
                            <iframe id="JPSVideo"
                                    title="Twitter Trends Mapper Demo"
                                    src="https://www.youtube.com/embed/HAahmbTK64Q"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen />
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Reflection</h6>
                    <div>
                        <p> While I had programmed various projects either in the frontend using React or in the backend
                            using Python or Java, I never had actually created a Full Stack application before, much
                            less one that utilized two different frameworks. Since creating a Full Stack application was
                            beyond the scope of the project (which just asked that the project be done in Python), a lot
                            of learning how to create a Flask-React app was through reading blogs and StackOverFlow
                            posts. Though after countless nights of us working through bugs to get our web app to work,
                            we were able to walk away with new skills in our toolset.
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
    carolPortfolio: "https://www.carollei.com/",
    twitterMap: "https://twittertrendsmapper.herokuapp.com/",
    github: "https://github.com/Krocketeer/Twitter-Trends-Mapper"
}