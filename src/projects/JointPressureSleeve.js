import React from "react"
import { SRLWrapper } from "simple-react-lightbox"
import MetaTags from "react-meta-tags"

import JPSCover from "../images/JointPressureSleeve/JPS Cover.png"
import sketchV1 from "../images/JointPressureSleeve/InitialSketches.png"
import sleeveParts from "../images/JointPressureSleeve/SleeveParts.jpeg"
import sleeveProto from "../images/JointPressureSleeve/SleeveProto.jpg"
import pouch from "../images/JointPressureSleeve/Pouch.jpeg"
import circuit from "../images/JointPressureSleeve/Circuit.jpeg"
import pouchSleeve from "../images/JointPressureSleeve/PouchOnSleeve.jpeg"
import sleeveV1 from "../images/JointPressureSleeve/SleeveV1.jpeg"
import sketchV2 from "../images/JointPressureSleeve/SketchV2.jpeg"
import velcroPins from "../images/JointPressureSleeve/VelcoPins.jpeg"
import velcroSewing from "../images/JointPressureSleeve/VelcoSewing.jpeg"
import circuitV2a from "../images/JointPressureSleeve/CircuitV2a.jpeg"
import circuitV2b from "../images/JointPressureSleeve/CircuitV2b.jpeg"
import circuitV2c from "../images/JointPressureSleeve/CircuitV2c.jpeg"
import circuitPocket from "../images/JointPressureSleeve/CircuitPocket.jpeg"
import circuitV2d from "../images/JointPressureSleeve/CircuitV2d.jpeg"
import sleeveLED from "../images/JointPressureSleeve/SleeveLED.jpeg"
import ScrollArrow from "../components/ScrollArrow";

export default function JointPressureSleeve() {
    return <SRLWrapper options={lightboxOptions}>
        <MetaTags>
            <meta content="noindex" />
        </MetaTags>
        <ScrollArrow />
        <div className="pageLayout">
            <div className="pageCover">
                <img src={JPSCover} alt="Joint Pressure Sleeve"
                     style={{width: "100%", height: "100%", cursor: "zoom-in"}} />
            </div>
            <div className="pageHeader">
                <h3>Joint Pressure Sleeve</h3>
                <h6>Physical Prototyping & Product Design</h6>

                <div className="details" style={{marginTop: "50px"}}>
                    <div className="info">
                        <h6>Techniques</h6>
                        <div>Analog Modeling</div>
                        <div>Circuit Design</div>
                        <div>Sewing</div>
                    </div>
                    <div id="JPSConcept" style={{paddingBottom: "25px"}}>
                        <h6>Product Concept</h6>
                        <p> The Joint Pressure Sleeve is a wearable device aimed at users who have injured muscles
                            or joints through the overuse of them. Wearing the sleeve let users know when they are
                            exerting too much pressure on their injured muscles or joints so that they don’t
                            re-aggravate their injury. </p>
                    </div>
                </div>
                <div id="JPSBackstory" style={{paddingBottom: "25px"}}>
                    <h6>Backstory</h6>
                    <p> As I walked through Seward Park while talking to my swim coaches about possible ideas for a
                        wearable IOT device, it felt like all of my ideas were not super feasible. Originally, I
                        wanted to create an IOT device for swimmers (hence me talking to my swim coaches), but that
                        idea was quickly scrapped once my coach asked if I was trying to recreate the Fitbit. My
                        other coach was quick to say that no idea was an original idea, but rather just iterations
                        on already existing designs. What my coach said really resonated with me and dispelled any
                        notions that I had to come up with a revolutionary new idea. </p>

                    <p> Later that night, I was having a hard time understanding why my knee was still hurting when
                        I injured it well over six months ago. It was then that the idea for my analog 3D model came
                        to fruition. I wanted to design a device that could measure how much pressure a person was
                        putting on an injured muscle/joint so that the device can let them know if what they are
                        doing would cause them to re-injure their muscle/joint. </p>
                </div>
                <div>
                    <h6>Design Sketches</h6>
                    <div style={styles.centerDiv50}>
                        <p style={{paddingBottom: "50px"}}>
                            Before I could create a physical prototype of my idea, I wanted to quickly sketch out what
                            the sleeve could look like. I tried not to spend too much time in the sketching phase as I
                            did not end up limiting myself to what the product should look like. After roughly 30
                            minutes sketching, I came up with two different sketches, one of the physical manifestation
                            of the sleeve and the other of the electronic circuit as well in order to indicate to users
                            when to stop exerting pressure on their muscle/joint. </p>
                        <img id="JPSSketchV1" src={sketchV1} alt="Analog and Electronic Circuit Sketches" />
                    </div>
                </div>
                <div>
                    <h6>Building the Prototype</h6>
                    <div style={styles.centerDiv50}>
                        <p style={{paddingBottom: "25px"}}>
                            After weeks of saving up cardboard boxes from Amazon and finding a pair of worn out jeans,
                            I was ready to build my prototype. I decided to cut out one of the legs on the pair of jeans
                            to use as the part because I realized that I didn’t necessarily need to build everything
                            from scratch. If there was something that functionally already existed as a sleeve, I would
                            avoid reinventing the wheel by utilizing one of jean’s legs in my prototype. The next part
                            of the sleeve that I had to build was the support brackets on both sides of the sleeve
                            since injury rehabilitation is a main component of injury prevention as well. Cardboard was
                            the best choice for the low fidelity prototype because it was easy to form it into brackets
                            but was also structurally sound enough to be physically used.
                        </p>
                        <div className="JPSDualPhotoLayout">
                            <img className="JPSDualPhoto" src={sleeveParts}
                                 alt="Parts and pieces for the Joint Pressure Sleeve" />
                            <img className="JPSDualPhoto" src={sleeveProto}
                                 alt="Assembled prototype sleeve with cardboard support brackets and tape to indicate sensors" />
                        </div>
                        <p style={{paddingBottom: "25px", marginTop: "25px"}}>
                            Using the same pair of jeans that the sleeve was created from — so that the whole sleeve
                            would be of the same material — I cut off another piece of fabric and removed all the
                            stitches so that I had one long piece of fabric. After taking some measurements to ensure
                            that the pouch would fit on the sleeve, I made some cuts and was now ready to sew it
                            together. I then used a running stitch to sew up the sides of the piece of fabric to create
                            a small pouch to house the battery. A snap-in button was also included in order to allow
                            the pouch to close and secure the battery in place during usage. Moving on to the circuit,
                            I never had used aluminum foil in a circuit before but I was optimistic about it. I
                            originally wanted to use conductive thread in the construction of my circuit, but I found
                            in my previous testing that the conductive thread was too finicky to reliably use — the
                            conductive thread would often kink on itself and create a short circuit. Instead, I opted
                            to use some spare wires I had laying around the house as they worked more reliably in the
                            circuit.
                        </p>
                        <div className="JPSDualPhotoLayout">
                            <img className="JPSDualPhoto" src={pouch}
                                 alt="Sewing together the pouch to hold the battery" />
                            <img className="JPSDualPhoto" src={circuit}
                                 alt="Completed circuit for the LED indicator" />
                        </div>
                        <p style={{paddingBottom: "25px", marginTop: "25px"}}>
                            With all the parts created, it was I was now ready to put it all together. I honestly
                            thought that this would be the easiest part of the process, but it turned out to take a
                            grueling long two hours as I had to make adjustments to make everything fit despite my
                            prior planning. The biggest source of trouble came from trying to integrate the additional
                            parts around the bracket that existed on the side of the sleeve. The bracket was in the way
                            of where I wanted to place the LED, so instead I modified the bracket to hold the LED and
                            sorted the wires around it. </p>
                        <div className="JPSDualPhotoLayout">
                            <img className="JPSDualPhoto" src={pouchSleeve}
                                 alt="The pouch would be attached to the sleeve with a snap-on button" />
                            <img className="JPSDualPhoto" src={sleeveV1}
                                 alt="Completed prototype with brackets and circuit" />
                        </div>
                    </div>
                </div>
                <div>
                    <h6>User Testing</h6>
                    <div style={styles.centerDiv25}>
                        <p> Working on this project during the COVID-19 pandemic meant that my ability to find people
                            to test my prototype was very limited. Luckily, I've been quarantining with some other
                            people which meant that I would have at least one person to test my prototype. At a first
                            glance, my housemate noted how intuitive it was to use; it was pretty clear to him that
                            he had to slip it on one of his muscle/joint areas. Once it was on, he was surprised by
                            how physically functional the prototype was — not having a restricted range of motion once
                            it was on. When using the sleeve, the LED indicator system worked like it was intended to —
                            turning on when a user bends their knee. </p>

                        <p> However, one area that he ran into trouble with the prototype was its fixed sizing. Because
                            I used a pair of jeans and the pair of jeans happened to fit over my knee, I didn’t think
                            of making the size adjustable to people with different body sizes. In addition, my housemate
                            noted how careful he had to be with the prototype because he thought he would mess up the
                            electronic circuit.
                        </p>
                    </div>
                </div>
                <div>
                    <h6>Analysis and Plans for Revision</h6>
                    <div style={styles.centerDiv25}>
                        <p style={{paddingBottom: "25px"}}>
                            After receiving feedback from user testing and an in-class virtual critique section, I
                            realized that while I had successfully created a usable, physical manifestation of my design
                            idea, my thought process and selection of some materials could be improved. Many people
                            applauded my choice in using a pair of jeans for the main sleeve as it was comfortable and
                            functional, yet a draw back of that would be its non-adjustable sizing. In regards to the
                            electronic component, a few others pointed out that the location of the LED might make it
                            hard for users to notice, especially if they're not paying attention to the sleeve all the
                            time. However, one area that he ran into trouble with the prototype was its fixed sizing.
                            Because I used a pair of jeans and the pair of jeans happened to fit over my knee, I didn’t
                            think of making the size adjustable to people with different body sizes. In addition, my
                            housemate  noted how careful he had to be with the prototype because he thought he would
                            mess up the electronic circuit.
                        </p>
                        <p> Overall, I was happy that the first prototype turned out and had met the original goal of
                            usability. Though, there were some areas where the prototype could be improved. Going
                            forward, the next iteration of the Joint Pressure Sleeve would most likely keep the
                            same jean material for the main sleeve but would incorporate straps of some kind so that
                            it could be used by a variety of people. I also wanted to see if I could improve the
                            electronic circuit so that the sleeve could be used more easily without worries of the
                            circuit breaking. After taking a few days to think about it and talking it out with others,
                            I decided that the next iteration would incorporate an Arduino and a flex sensor for the
                            electronic component.
                        </p>
                    </div>
                </div>
                <div>
                    <h6>Design Sketches for Version 2</h6>
                    <div style={styles.centerDiv50}>
                        <p> Making a second version of the sleeve meant that I would go through the entire design
                            process once again, starting with sketches. My primary focus in this sketch was to plan out
                            how could everything fit onto the sleeve as I would be adding considerable more things —
                            an Arduino and flex sensor to control the LEDs, velcro straps, and metal brackets — than the
                            first version.
                        </p>
                        <div style={styles.centerDiv}>
                            <img id="JPSSketchV2" src={sketchV2}
                                 alt="Sketch for the second version to include an Arduino and flex sensor,
                                  metal brackets, and velcro straps" />
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Creating the Second Version</h6>
                    <div style={styles.centerDiv25}>
                        <p> As opposed to the first prototype, I decided to start the second version with the electronic
                            component consisting of an Arduino, a flex sensor, and LEDs. After a bit of googling and
                            and looking at some publicly available guides on Instructables, I was able to create the
                            basic electronic circuit where a LED will get brighter when the flex sensor is bent. I then
                            went on add on two additional LEDs so that the lights are more visible to the user when
                            using the sleeve.
                        </p>
                        <div className="JPSDualPhotoLayout">
                            <img className="JPSDualPhoto" src={circuitV2a}
                                alt="First working electronic circuit with an Arduino and a flex sensor" />
                            <img className="JPSDualPhoto" src={circuitV2b}
                                 alt="Added additional LEDs to the circuit for greater user visibility" />
                        </div>
                        <p> Knowing that the main component of the electronic circuit was working, I moved on to start
                            work on the physical sleeve itself as I wanted to know how much space I would have before
                            integrating the circuit. I decided to keep the material of the sleeve the same as it
                            functionally worked well in the first prototype. Drawing from the feedback in my user
                            testing, I wanted to include velcro straps so that the sleeve could be adjustable to anyone
                            who wore it. I started off by pinning the straps to the sleeve and hand sewing them on, but
                            I quickly switched to a sewing machine after I realized that the velcro straps weren't being
                            secured well enough.
                        </p>
                        <div className="JPSDualPhotoLayout">
                            <img className="JPSDualPhoto" src={velcroPins}
                                 alt="Velcro straps pinned to the sleeve before sewing" />
                            <img className="JPSDualPhoto" src={velcroSewing}
                                 alt="Attaching the velcro straps to the sleeve with a sewing machine" />
                        </div>
                        <p> It was then that I realized that the breadboard I had built the electronic circuit on was
                            too big for the sleeve if it was attached. My goal for the second prototype was usability of
                            of the sleeve so it did not make too much sense to have the circuit be separate from the
                            sleeve. As a result, I decided to transfer the entire electronic circuit to a half bread
                            board, which would be more compact and fit much better on the sleeve. Once that was done,
                            cut out another piece of fabric from the original pair of jeans to create a small pocket
                            on the sleeve that the Arduino and its external battery could sit in.
                        </p>
                        <div className="JPSDualPhotoLayout">
                            <img className="JPSDualPhoto" src={circuitV2c}
                                 alt="Compact version of the electronic circuit" />
                            <img className="JPSDualPhoto" src={circuitPocket}
                                 alt="Electronic circuit and external battery secured in a pouch" />
                        </div>
                        <p> Finally it was time to put everything together. I had to replace the plugin wires that comes
                            with the Arduino kit because they would not fit in the pouch. In place, I cut some hookup
                            wire, stripped the ends, and then plugged them directly into the breadboard. The smaller
                            LEDs were replaced by two bigger, colored ones so that they would be more noticeable and the
                            user can interpret what each color meant — green meant the it was power on and red meant
                            the user is exerting too much pressure on their muscle/joint. The LEDs were sewn onto the
                            sleeve directly for easy visibility, and then soldered to resistors and wires so that the
                            whole circuit would be complete. I decided to solder the LEDs to the wires instead of using
                            alligator clips so that the circuit wouldn't be as fragile when people are using it.
                        </p>
                        <div className="JPSDualPhotoLayout">
                            <img className="JPSDualPhoto" src={circuitV2d}
                                 alt="The underside of the sleeve with the flex sensor, the external battery, and the Arduino" />
                            <img className="JPSDualPhoto" src={sleeveLED}
                                 alt="LEDs attached to the top of the sleeve" />
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Reflection and Demo Video</h6>
                    <div>
                        <p style={{paddingBottom: "25px"}}>
                            After spending what felt like two long weeks on the second version, it was all complete! I
                            was successfully able to create a second version of the Joint Pressure Sleeve that addressed
                            the feedback from the first version. The velcro straps allowed the sleeve to be adjustable
                            to different body sizes and body parts. The inclusion of the Arduino based electronic
                            circuit allowed me to solder most of the connections which made the circuit less prone to
                            breaking during usage. However, there was one part that I wanted to incorporate but did not
                            get a chance to because of time constraints which was the metal hinges. While I would have
                            loved to include them in the second version, I realized that I would have had to change the
                            placement of the electronic circuit too much that it was not worth including. If I had a
                            chance to create another version of the sleeve again, I would find a way to fit everything
                            onto the sleeve. In the end though, I had achieved most of what I set out to accomplish,
                            which was creating a usable prototype of the Joint Pressure Sleeve.
                         </p>
                        <div style={styles.centerDiv}>
                            <iframe id="JPSVideo"
                                    title="Joint Pressure Sleeve Version 2 Demo"
                                    src="https://www.youtube.com/embed/uirDy4rB1cc"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen />
                        </div>
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