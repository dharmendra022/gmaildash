import React from 'react';
import { NavLink } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { CiStar } from "react-icons/ci";
import { FaInbox } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";
import { CiFileOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";


const Sidebar = (prop) => {
    const menuItem = [
        {
            name: "Inbox",
            icon: <FaInbox/>
        },
        {
            name: "Starred",
            icon: <CiStar/>
        },
        {
            name: "Snoozed",
            icon: <MdOutlineWatchLater/>
        },
        {
            name: "Sent",
            icon: <LuSendHorizonal/>
        },
        {
            name: "Drafts",
            icon: <CiFileOn/>
        },
        {
            name: "More",
            icon: <FaAngleDown/>
        }
    ]

    const emails = [
        { sender: 'John Doe', message: 'Lorem ipsum d....', time: '10:00 AM' },
        { sender: 'Alice Smith', message: 'Sed do eiusmod tempor.....', time: 'Yesterday' },
        { sender: 'Jane Doe', message: 'Ut enim ad minim veniam, quis ...', time: '2 days ago' }
    ];
    return (
        <div className='sidebar-container'>
            <div style={{ width: prop.isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <div style={{ marginLeft: prop.isOpen ? "50px" : "0px" }} className="bars">
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: prop.isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="home" title="Primary">
                        {/* Tab content for Home */}
                        <div>
                <table>
                    <tbody>
                        {emails.map((email, index) => (
                            <tr key={index} className="email-row">
                                <td>{email.sender}</td>
                                <td>{email.message}</td>
                                <td>{email.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                    </Tab>
                    <Tab eventKey="profile" title="Promotions">
                    <table>
                    <tbody>
                        {emails.map((email, index) => (
                            <tr key={index} className="email-row">
                                <td>{email.sender}</td>
                                <td>{email.message}</td>
                                <td>{email.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                    </Tab>
                    <Tab eventKey="longer-tab" title="Social">
                    <table>
                    <tbody>
                        {emails.map((email, index) => (
                            <tr key={index} className="email-row">
                                <td>{email.sender}</td>
                                <td>{email.message}</td>
                                <td>{email.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                    </Tab>
                </Tabs>
            </main>
        </div>
    );
};

export default Sidebar;