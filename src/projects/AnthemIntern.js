import React, {useEffect} from "react"
import { SRLWrapper } from "simple-react-lightbox"
import ScrollArrow from "../components/ScrollArrow";
import AnthemCover from "../images/Anthem/Anthem.png"
import MobileScreens from "../images/Anthem/MobileScreenshots.png"

export default function AnthemIntern() {
    useEffect(()  =>  {
        window.scrollTo(0, 0)
    }, [])

    return <SRLWrapper options={lightboxOptions}>
        <ScrollArrow />
        <div className="pageLayout">
            <div className="pageCover">
                <img src={AnthemCover} alt="Anthem, Inc."
                     style={{width: "100%", height: "100%", cursor: "zoom-in"}} />
            </div>
            <div className="pageHeader">
                <h3>Anthem, Inc.</h3>
                <h6>Web Development Internship</h6>

                <div className="details" style={{marginTop: "50px"}}>
                    <div className="info" style={{paddingRight: "0"}}>
                        <div style={{paddingBottom: "25px"}}>
                            <h6>Duration</h6>
                            <p>June - Sept. 2020</p>
                        </div>
                        <div>
                            <h6>Team</h6>
                            <p>Anthem Creative Studio</p>
                        </div>
                    </div>
                    <div style={{paddingBottom: "50px"}}>
                        <h6>Overview</h6>
                        <p> I spent the summer of 2020 as a Design Intern in Anthem's Creative Studio, which focused on
                            producing many of Anthem's digital-media projects. While creating both internal and external
                            facing websites, I learned about web development principles, best practices, accessibility,
                            and 508 compliance. (Note: due to the nature of my work, I am unable to disclose all the
                            details about my projects. For more information, please contact me at&nbsp;
                            <a href="mailto:kmdle@uw.edu">kmdle@uw.edu</a>).
                        </p>
                    </div>
                </div>
                <div>
                    <h6>Background</h6>
                    <div style={styles.centerDiv50}>
                        <p> When I got the offer for my internship, I was excited that I would have the opportunity to
                            apply my UX design knowledge and skills in a professional setting. This would be the perfect
                            opportunity as well to gain valuable work experience that I would not receive through
                            classes. To prep for my first day, I brushed up on a number of design principles that I
                            thought would be useful like color theory and accessibility best practices. However, when
                            the first day arrived, I was pleasantly surprised to learn that my design internship was
                            actually a web development internship! I should have figured this out earlier when I was
                            asked about my coding and web development experience during the interview. At that point,
                            most of my experience came from one React crash course I took over the summer (3 months)
                            the year before and building two web apps since then. Nevertheless, I felt confident enough
                            in my abilities and was ready to take on my first task.
                        </p>
                    </div>
                </div>
                <div>
                    <h6>Getting Started with Smaller Tasks</h6>
                    <div style={styles.centerDiv50}>
                        <p style={{paddingBottom: "25px"}}>
                            Unlike other companies where interns would primarily work on one project for 3 months, I
                            had tasks from various projects assigned to me daily like I was another associate on the
                            team. Most of my work consisted of implementing changes and new features to existing
                            websites on the team's portfolio. I started off with implementing HTML and CSS changes as
                            the team's UX Designer created more wireframes and as existing designs went through review.
                            These tasks mostly consisted of changing a few lines of HTML and CSS. However, as I got more
                            tasks finished, the team assigned me more complex tasks that also required me to leverage
                            Javascript to get the proper functionality. I had a rocky start with my first JS task since
                            I never formally learned vanilla JS for web development. Most of my React experience didn't
                            help either as React functionally worked differently than vanilla JS for manipulating DOM
                            elements. Instead, I spent a few hours looking through the existing codebase and playing
                            around with the elements to get enough of an understanding for my tasks. This in addition to
                            helpful feedback that my mentor provided me with every code commit built my JS knowledge
                            over the length of my internship.
                        </p>
                    </div>
                </div>
                <div>
                    <h6>Moving on to More Expansive Projects!</h6>
                    <div style={styles.centerDiv50}>
                        <p>
                            After clearing out most of the simpler tasks, my mentor pulled me into a few bigger projects
                            to work on, most of which consisted of creating new websites and reusable components from
                            scratch. The most notable project I had the opportunity to work on was creating a mobile
                            version of a new Anthem initiative branding site. While a majority of the main site had
                            already been built out, we also needed to implement a mobile version to make sure that the
                            site was accessible by all users. This was not out of my wheelhouse since I've implemented
                            mobile versions of websites before for my own projects. However, one thing I did not realize
                            until a few hours in on the project was that when I designed my own websites, I generally
                            had an idea of what the mobile version would look like in the back of my mind. That ensured
                            that I wouldn't need too much overhead to create the mobile version. Coming into this, I saw
                            that a majority of the elements weren't originally created to be mobile-conversion friendly.
                            As a result, I had to rewrite a number of sections of the project's source code so that a
                            mobile version could be created while still maintaining a similar formatting to how it was
                            originally. (View the full website <a href={links.anthemSpendingAccounts}
                                                                  target="_blank">here</a>).
                        </p>
                        <img src={MobileScreens}
                             alt="Mobile screenshots of Anthem Spending Accounts" />
                    </div>
                </div>
                <div>
                    <h6>Reflection</h6>
                    <div>
                        <p> My time at Anthem, Inc. has been a challenging, yet rewarding experience where I got to
                            learn so much about web development. Working in a team that produced both internal and
                            external products for a national company gave me a glimpse of what it takes to design for
                            a diverse user group. Specifically, accounting for different browsers and versions, devices,
                            as well as user abilities.
                        </p>
                        <p>
                            A big thanks to Joan Weber, Gaia Neftci, my mentor Eric Bentley, my manager Ben Rangel, and
                            the Anthem Creative Studio team for their guidance and support during my internship. I
                            enjoyed my 3 months with the team and will continue to apply my learning to future endeavours.
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
    anthemSpendingAccounts: "https://spendingaccounts.anthem.com/",
}