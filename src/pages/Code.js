import React, {useState} from "react"
import {Menu} from "antd";
import {useHistory, Route, Link} from "react-router-dom";

// function Code() {
//     return <div className="codeProjects">
//         <div id="codeProject1">
//             <p>Project 1</p>
//         </div>
//
//         <div id="codeProject2">
//             <p>Project 2</p>
//         </div>
//
//         <div id="codeProject3">
//             <p>Project 3</p>
//         </div>
//     </div>
// }
//
// export default Code

export default function Code(props) {
    const history = useHistory()
    const path = history.location.pathname.substring(1)
    const [activeProject, setActiveProject] = useState(props.match.params.projects)
    // const [activeProject, setActiveProject] = useState(path)
    const projectName = ["nullHolder", "Project 1", "Project 2", "Project 3", "Project 4"]

    return <div className="codeProjects">

        <Link to="/code/codeProject1">
            <div id="codeProject1" style={styles.projectBox} onClick={e => setActiveProject("codeProject1")}>
                <p>Project 1</p>
                {/*<Link to="/code/codeProject1">{projectName[1]}</Link>*/}
            </div>
        </Link>

        <div id="codeProject2" style={styles.projectBox}>
            {/*<p>Project 2</p>*/}
            <Link to="/code/codeProject2">{projectName[2]}</Link>
        </div>

        <div id="codeProject3" style={styles.projectBox}>
            {/*<p>Project 3</p>*/}
            <Link to="/code/codeProject3">{projectName[3]}</Link>
        </div>

        <div id="codeProject4" style={styles.projectBox}>
            {/*<p>Project 4</p>*/}
            <Link to="/code/codeProject4">{projectName[4]}</Link>
        </div>
    </div>
}

const styles={
    pageLayout:{
        display: "flex",
        flexFlow: "rowWrap",
        justifyContent: "center",
        alignItems: "center"
    },
    projectBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid rgba(0, 0, 0, 0.65)",
        margin: "10px",
        minHeight: "200px",
        height: "21vw",
        maxHeight: "21vw",
        minWidth: "450px",
        maxWidth: "47vw",
        width: "47vw"
    }
}


