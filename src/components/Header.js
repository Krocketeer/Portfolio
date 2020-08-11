import React, {useState} from "react"
import {Menu, Row, Col} from "antd";
import { MailOutlined} from '@ant-design/icons';

function Header() {
    const [state, setState] = useState("Design");
    const [showDesign, setShowDesign] = useState(false);
    const [showCode, setShowCode] = useState(false);
    const {SubMenu} = Menu;
    // onMouseOver={() => {setShowDesign(!showDesign)}}
    return <header className="site_header">
        <p>Kenny Le</p>
        <div className="header_menu">
            <Menu selectedKeys={[state]} mode="horizontal">
                <Menu.Item key="Design" icon={ <MailOutlined/> }>
                    <a href="https://www.google.com">Design</a>
                </Menu.Item>
                <Menu.Item key="Code">
                    <a href="https://www.google.com">Code</a>
                </Menu.Item>
                <Menu.Item key="About">
                    <a href="https://www.google.com">About</a>
                </Menu.Item>
            </Menu>
        </div>
    </header>
    {/*    <p>Kenny Le</p>*/}
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
}

export default Header

//     <div className="header_menu">
//         <Menu onMouseOver = {e => { setIsShown(true) }}
//               onMouseLeave = { e => { setIsShown(false)}}
//               selectedKeys={[state]} mode="horizontal">
//             <SubMenu title="Design" key="Design" href="https://www.google.com">
//                 <Menu.Item key="Project_1">Project 1</Menu.Item>
//                 <Menu.Item key="Project_2">Project 2</Menu.Item>
//             </SubMenu>
//             <SubMenu title="Code" key="Code">
//                 <a href="https://www.google.com">Code</a>
//                 <Menu.Item key="Code_1">Code 1</Menu.Item>
//                 <Menu.Item key="Code_2">Code 2</Menu.Item>
//             </SubMenu>
//             <Menu.Item key="About">
//                 <a href="https://www.google.com">About</a>
//             </Menu.Item>
//         </Menu>
//     </div>
// </header>