import React, {useState} from "react"
import {MDBBtn, MDBMask, MDBView} from "mdbreact"

function Design(props) {
    console.log(props.match.params.projects)
    console.log("Hello world")
    return <MDBView hover>
        <img src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
             className="img-fluid " alt="smaple image"/>
        <MDBMask overlay="red-slight">
            <p>texty text</p>
        </MDBMask>
    </MDBView>
}

export default Design

