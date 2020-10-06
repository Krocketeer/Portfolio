import React from "react"
import smile from "../images/odd1sout.png"

export default function Upcoming() {
    return <div style={{display: "flex",
                        flexDirection: "column" ,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "100px"}}>
        <p>Oh hey! It looks like you found a page that hasn't been finished yet.</p>
        <p>I'm working on it as fast as I can. Check back soon!</p>
        <img src={smile} alt="smiling face" style={{width: "30%", height: "30%"}}/>
    </div>
}