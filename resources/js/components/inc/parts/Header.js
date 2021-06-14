import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="sidebar-menu">
                <header className="logo1"><a href="#" className="sidebar-icon"> <span className="fa fa-bars"></span> </a></header>
                <div style={{borderTop:"1px ridge rgba(255, 255, 255, 0.15)"}}></div>
                <div className="menu">
                    <ul id="menu">
                        <li id="menu-academico" ><a href="#"><i className="fa fa-list-ul" aria-hidden="true"></i><span> Coding</span><span className="fa fa-angle-right" style={{float: "right"}}></span><div className="clearfix"></div></a>
                            <ul id="menu-academico-sub" >
                                <li><a className="dropdown-item" href="/gyan/nodeJS">Node JS</a></li>
                                <li><a className="dropdown-item" href="/gyan/reactJS">React JS</a></li>
                                <li><a className="dropdown-item" href="/gyan/Laravel">Laravel</a></li>
                                <li><a className="dropdown-item" href="/gyan/Wordpress">Wordpress</a></li>
                                <li><a className="dropdown-item" href="/gyan/Bootstrap">Bootstrap</a></li>
                                <li><a className="dropdown-item" href="/gyan/Frontend">Frontend</a></li>
                                <li><a className="dropdown-item" href="/gyan/DigitalOcean">Digital Ocean</a></li>
                                <li><a className="dropdown-item" href="/gyan/django">Django</a></li>
                                <li><a className="dropdown-item" href="/gyan/python">Python</a></li>
                                <li><a className="dropdown-item" href="/gyan/Flutter">Flutter</a></li>
                                <li><a className="dropdown-item" href="/gyan/ReactNative">React Native</a></li>
                                <li><a className="dropdown-item" href="/gyan/Quasar">Quasar</a></li>
                            </ul>
                        </li>
                        <li id="menu-academico" ><a href="#"><i className="fa fa-list-ul" aria-hidden="true"></i><span> Graphics</span><span className="fa fa-angle-right" style={{float: "right"}}></span><div className="clearfix"></div></a>
                            <ul id="menu-academico-sub" >
                                <li><a className="dropdown-item" href="/photoshop">Photoshop</a></li>
                                <li><a className="dropdown-item" href="/illustrator">Illustrator</a></li>
                                <li><a className="dropdown-item" href="/corel-draw">CorelDraw</a></li>
                            </ul>
                        </li>
                        <li id="menu-academico" ><Link className="dropdown-item" to={{pathname: "/clients", state: { active: true }}}><i className="fa fa-list-ul" aria-hidden="true"></i><span> Clients</span><span className="fa fa-angle-right" style={{float: "right"}}></span><div className="clearfix"></div></Link>
                            <ul id="menu-academico-sub" >
                                <li><Link className="dropdown-item" to={{pathname: "/clients", state: { active: true }}}>Active Clients</Link></li>
                                <li><Link className="dropdown-item" to={{pathname: "/clients", state: { active: false }}}>Not Active Clients</Link></li>
                            </ul>
                        </li>
                        <li ><a href="/financials"><i className="fa fa-list-ul" aria-hidden="true"></i><span> Financials</span></a></li>
                        <li ><a href="/leads"><i className="fa fa-list-ul" aria-hidden="true"></i><span> Leads</span></a></li>
                        <li ><a href="/offPage"><i className="fa fa-list-ul" aria-hidden="true"></i><span> Off Page</span></a></li>
                    </ul>
                </div>
                <div className="clearfix"></div>	
            </div>
        )
    }
}
export default Header