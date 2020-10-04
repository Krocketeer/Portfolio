import React from "react"
import { LinkedinOutlined, GithubOutlined, MailOutlined } from "@ant-design/icons";

export default function Footer() {
    return <div style={{padding: "120px 0 75px"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
            <a href={links.linkedIn} style={{color: "black"}}>
                <LinkedinOutlined style={{margin: "0 20px 30px"}}/>
            </a>
            <a href={links.github} style={{color: "black"}}>
                <GithubOutlined style={{margin: "0 20px 30px 0"}}/>
            </a>
            <a href={links.email} style={{color: "black"}}>
                <MailOutlined style={{margin: "0 20px 30px 0"}}/>
            </a>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <p style={{color: "rgb(102, 102, 102)", fontWeight: "500", fontSize: "13px"}}> © 2020 Kenny Le Design</p>
        </div>
    </div>
}

const links = {
    linkedIn: "https://www.linkedin.com/in/kmdle/",
    github: "https://github.com/krocketeer",
    email: "mailto:kmdle@uw.edu"
}