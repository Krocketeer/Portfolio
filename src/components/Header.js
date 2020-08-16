import React, {useState} from "react"
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Menu} from "antd";

import About from "../pages/About";
import Code from "../pages/Code";
import Design from "../pages/Design"

function Header() {
    const [state, setState] = useState("Design");
    console.log(state)
    return  <Router>
        <header className="site_header">
            <p>Kenny Le</p>
            <div className="header_menu">
                <Menu selectedKeys={[state]} mode="horizontal" onClick={e => setState(e.key)}>
                    <Menu.Item key="Design" onClick={e => setState("Design")}>
                        <Link to="">Design</Link>
                    </Menu.Item>
                    <Menu.Item key="Code" onClick={e => setState("Code")}>
                        <Link to="/code">Code</Link>
                    </Menu.Item>
                    <Menu.Item key="About" onClick={e => setState("About")}>
                        <Link to="/about">About</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </header>
    </Router>
}

export default Header

// <Menu.Item key="Design" onClick={e => setState("Design")}>
// <Link to="">Design</Link>
// </Menu.Item>
// <Menu.Item key="Code" onClick={e => setState("Code")}>
// <Link to="/code">Code</Link>
// </Menu.Item>
// <Menu.Item key="About" onClick={e => setState("About")}>
// <Link to="/about">About</Link>
// </Menu.Item>

{/*<div className="header_menu" onMouseLeave = {() => {setState(null)}}>*/}
{/*    <Menu selectedKeys={[state]} mode="horizontal" onMouseEnter={e => setState(e.key)}*/}
{/*           onClick={e => setState(e.key)}>*/}
{/*        <SubMenu title="Design">*/}
{/*            <Menu.Item key="Project_1">Project 1</Menu.Item>*/}
{/*            <Menu.Item key="Project_2">Project 2</Menu.Item>*/}
{/*        </SubMenu>*/}
{/*        <SubMenu title="Code">*/}
{/*            <Menu.Item key="Code_1">Code 1</Menu.Item>*/}
{/*            <Menu.Item key="Code_2">Code 2</Menu.Item>*/}
{/*        </SubMenu>*/}
{/*        <Menu.Item key="About">*/}
{/*            <a href="https://www.google.com">About</a>*/}
{/*        </Menu.Item>*/}
{/*    </Menu>*/}
{/*</div>*/}


{/*</header>*/}
{/*    <div className="header_menu">*/}
{/*        <Menu selectedKeys={[state]} mode="horizontal">*/}
{/*            {!showDesign && <>*/}
{/*                <SubMenu title="Design" key="Design" href="https://www.google.com"*/}
{/*                         onMouseOver = {() => {setShowDesign(!showDesign)}}*/}
{/*                         onMouseLeave = {() => {setShowDesign(!showDesign)}}*/}
{/*                >*/}
{/*                    <Menu.Item key="Project_1">Project 1</Menu.Item>*/}
{/*                    <Menu.Item key="Project_2">Project 2</Menu.Item>*/}
{/*                </SubMenu>*/}
{/*            </>*/}
{/*            }*/}
{/*            {!showCode && <>*/}
{/*                <SubMenu title="Code" key="Code"*/}
{/*                         onMouseOver = {() => {setShowCode(!showDesign)}}*/}
{/*                         onMouseLeave = {() => {setShowCode(!showDesign)}}*/}
{/*                >*/}
{/*                    <Menu.Item key="Code_1">Code 1</Menu.Item>*/}
{/*                    <Menu.Item key="Code_2">Code 2</Menu.Item>*/}
{/*                </SubMenu>*/}
{/*            </>*/}
{/*            }*/}
{/*            <Menu.Item key="About">*/}
{/*                <a href="https://www.google.com">About</a>*/}
{/*            </Menu.Item>*/}
{/*        </Menu>*/}
{/*    </div>*/}
{/*</header>*/}
