import React, {useState} from "react"
import { Link, useHistory } from "react-router-dom";
import {Menu} from "antd";


function Header() {
    // const history = useHistory();
    const path = window.location.pathname
    const [state, setState] = useState(path);
    console.log(path)
    // if (path.includes("design")) {
    //     setState("/")
    // }
    return <header className="site_header">
        <Link to="/">
            <p style={{color: "black"}} onClick={e => setState("/")}>Kenny Le</p>
        </Link>
        <div className="header_menu">
            <Menu selectedKeys={[state]} mode="horizontal" onClick={e => setState(e.key)}>
                <Menu.Item key="/" onClick={e => setState("/")}>
                    <Link to="/">Design</Link>
                </Menu.Item>
                <Menu.Item key="/code" onClick={e => setState("/code")}>
                    <Link to="/code">Code</Link>
                </Menu.Item>
                <Menu.Item key="/about" onClick={e => setState("/about")}>
                    <Link to="/about">About</Link>
                </Menu.Item>
            </Menu>
        </div>
    </header>
}

export default Header
