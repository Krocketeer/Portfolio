import React from "react"
import { LinkedinOutlined, GithubOutlined, MailOutlined } from "@ant-design/icons";

export default function Footer() {
    return <div style={{padding: "120px 0 75px"}}>
        <div style={styles.centerDiv}>
            <div style={{marginLeft: "30px"}} />
            <a className="LinkedIn" href={links.linkedIn}>
                <LinkedinOutlined style={styles.iconSpacing}/>
            </a>
            <a className="Github" href={links.github}>
                <GithubOutlined style={styles.iconSpacing}/>
            </a>
            <a className="Mail" href={links.email}>
                <MailOutlined style={styles.iconSpacing}/>
            </a>
        </div>
        <div style={styles.centerDiv}>
            <p style={{color: "rgb(102, 102, 102)", fontWeight: "500", fontSize: "13px"}}> Kenny Le &copy; 2021
                {" "}<a href={links.CC} style={{color: "#1890ff"}}>CC BY-NC-SA 4.0</a>
            </p>
        </div>
    </div>
}

const links = {
    linkedIn: "https://www.linkedin.com/in/kmdle/",
    github: "https://github.com/krocketeer",
    email: "mailto:kmdle@uw.edu",
    CC: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
}

const styles = {
    centerDiv: {
        display: "flex",
        justifyContent: "center"
    },
    iconSpacing: {
        margin: "0 20px 30px 0"
    }
}