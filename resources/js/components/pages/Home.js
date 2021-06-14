import React, { Component } from 'react'
// import {BrowserRouter as Router, Link, Route, withRouter, Switch} from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div className="left-content">
                <div className="mother-grid-inner">
                    <div className="header-main">
                        <div className="logo-w3-agile">
                            <h1><a href="index.html">Pooled</a></h1>
                        </div>
                        <div className="w3layouts-left">
                            <div className="w3-search-box">
                                <form action="#" method="post">
                                    <input type="text" placeholder="Search..." required=""/>	
                                    <input type="submit" value=""/>					
                                </form>
                            </div>
                            <div className="clearfix"> </div>
                            </div>
                        <div className="w3layouts-right">
                            <div className="profile_details_left">
                                <ul className="nofitications-dropdown">
                                    <li className="dropdown head-dpdn">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-envelope"></i><span className="badge">3</span></a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <div className="notification_header">
                                                    <h3>You have 3 new messages</h3>
                                                </div>
                                            </li>
                                            <li><a href="#">
                                                <div className="user_img"><img src="images/in11.jpg" alt=""/></div>
                                                <div className="notification_desc">
                                                <p>Lorem ipsum dolor</p>
                                                <p><span>1 hour ago</span></p>
                                                </div>
                                                <div className="clearfix"></div>	
                                            </a></li>
                                            <li className="odd"><a href="#">
                                                <div className="user_img"><img src="images/in10.jpg" alt=""/></div>
                                                <div className="notification_desc">
                                                <p>Lorem ipsum dolor </p>
                                                <p><span>1 hour ago</span></p>
                                                </div>
                                                <div className="clearfix"></div>	
                                            </a></li>
                                            <li><a href="#">
                                                <div className="user_img"><img src="images/in9.jpg" alt=""/></div>
                                                <div className="notification_desc">
                                                <p>Lorem ipsum dolor</p>
                                                <p><span>1 hour ago</span></p>
                                                </div>
                                                <div className="clearfix"></div>	
                                            </a></li>
                                            <li>
                                                <div className="notification_bottom">
                                                    <a href="#">See all messages</a>
                                                </div> 
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown head-dpdn">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-bell"></i><span className="badge blue">3</span></a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <div className="notification_header">
                                                    <h3>You have 3 new notification</h3>
                                                </div>
                                            </li>
                                            <li><a href="#">
                                                <div className="user_img"><img src="images/in8.jpg" alt=""/></div>
                                                <div className="notification_desc">
                                                <p>Lorem ipsum dolor</p>
                                                <p><span>1 hour ago</span></p>
                                                </div>
                                                <div className="clearfix"></div>	
                                                </a></li>
                                                <li className="odd"><a href="#">
                                                <div className="user_img"><img src="images/in6.jpg" alt=""/></div>
                                                <div className="notification_desc">
                                                <p>Lorem ipsum dolor</p>
                                                <p><span>1 hour ago</span></p>
                                                </div>
                                                <div className="clearfix"></div>	
                                                </a></li>
                                                <li><a href="#">
                                                <div className="user_img"><img src="images/in7.jpg" alt=""/></div>
                                                <div className="notification_desc">
                                                <p>Lorem ipsum dolor</p>
                                                <p><span>1 hour ago</span></p>
                                                </div>
                                                <div className="clearfix"></div>	
                                                </a></li>
                                                <li>
                                                <div className="notification_bottom">
                                                    <a href="#">See all notifications</a>
                                                </div> 
                                            </li>
                                        </ul>
                                    </li>	
                                    <li className="dropdown head-dpdn">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-tasks"></i><span className="badge blue1">9</span></a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <div className="notification_header">
                                                    <h3>You have 8 pending task</h3>
                                                </div>
                                            </li>
                                            <li><a href="#">
                                                <div className="task-info">
                                                    <span className="task-desc">Database update</span><span className="percentage">40%</span>
                                                    <div className="clearfix"></div>	
                                                </div>
                                                <div className="progress progress-striped active">
                                                    <div className="bar yellow" style={{width:"40%"}}></div>
                                                </div>
                                            </a></li>
                                            <li><a href="#">
                                                <div className="task-info">
                                                    <span className="task-desc">Dashboard done</span><span className="percentage">90%</span>
                                                    <div className="clearfix"></div>	
                                                </div>
                                                <div className="progress progress-striped active">
                                                        <div className="bar green" style={{width:"90%"}}></div>
                                                </div>
                                            </a></li>
                                            <li><a href="#">
                                                <div className="task-info">
                                                    <span className="task-desc">Mobile App</span><span className="percentage">33%</span>
                                                    <div className="clearfix"></div>	
                                                </div>
                                                <div className="progress progress-striped active">
                                                        <div className="bar red" style={{width:" 33%"}}></div>
                                                </div>
                                            </a></li>
                                            <li><a href="#">
                                                <div className="task-info">
                                                    <span className="task-desc">Issues fixed</span><span className="percentage">80%</span>
                                                    <div className="clearfix"></div>	
                                                </div>
                                                <div className="progress progress-striped active">
                                                        <div className="bar  blue" style={{width:" 80%"}}></div>
                                                </div>
                                            </a></li>
                                            <li>
                                                <div className="notification_bottom">
                                                    <a href="#">See all pending tasks</a>
                                                </div> 
                                            </li>
                                        </ul>
                                    </li>	
                                    <div className="clearfix"> </div>
                                </ul>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="clearfix"> </div>				
                        </div>
                        <div className="profile_details w3l">		
                            <ul>
                                <li className="dropdown profile_details_drop">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                        <div className="profile_img">	
                                            <span className="prfil-img"><img src="images/in4.jpg" alt=""/> </span> 
                                            <div className="user-name">
                                                <p>Malorum</p>
                                                <span>Administrator</span>
                                            </div>
                                            <i className="fa fa-angle-down"></i>
                                            <i className="fa fa-angle-up"></i>
                                            <div className="clearfix"></div>	
                                        </div>	
                                    </a>
                                    <ul className="dropdown-menu drp-mnu">
                                        <li> <a href="#"><i className="fa fa-cog"></i> Settings</a> </li> 
                                        <li> <a href="#"><i className="fa fa-user"></i> Profile</a> </li> 
                                        <li> <a href="#"><i className="fa fa-sign-out"></i> Logout</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>							
                        <div className="clearfix"> </div>	
                    </div>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a> <i className="fa fa-angle-right"></i></li>
                    </ol>
                    <div className="four-grids">
                        <div className="col-md-3 four-grid">
                            <div className="four-agileits">
                                <div className="icon">
                                    <i className="glyphicon glyphicon-user" aria-hidden="true"></i>
                                </div>
                                <div className="four-text">
                                    <h3>User</h3>
                                    <h4> 24,420  </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 four-grid">
                            <div className="four-agileinfo">
                                <div className="icon">
                                    <i className="glyphicon glyphicon-list-alt" aria-hidden="true"></i>
                                </div>
                                <div className="four-text">
                                    <h3>Clients</h3>
                                    <h4>15,520</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 four-grid">
                            <div className="four-w3ls">
                                <div className="icon">
                                    <i className="glyphicon glyphicon-folder-open" aria-hidden="true"></i>
                                </div>
                                <div className="four-text">
                                    <h3>Projects</h3>
                                    <h4>12,430</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 four-grid">
                            <div className="four-wthree">
                                <div className="icon">
                                    <i className="glyphicon glyphicon-briefcase" aria-hidden="true"></i>
                                </div>
                                <div className="four-text">
                                    <h3>Old Projects</h3>
                                    <h4>14,430</h4>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                        <div className="agileinfo-grap">
                            <div className="agileits-box">
                                <header className="agileits-box-header clearfix">
                                    <h3>Statistics</h3>
                                    <div className="toolbar">
                                        <div className="pull-left">
                                            <div className="btn-group">
                                                <a href="#" className="btn btn-default btn-xs">Daily</a>
                                                <a href="#" className="btn btn-default btn-xs active">Monthly</a>
                                                <a href="#" className="btn btn-default btn-xs">Yearly</a>
                                            </div>
                                        </div>
                                        <div className="pull-right">
                                            <div className="btn-group">
                                                <a aria-expanded="false" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">Export <i className="fa fa-angle-down"></i></a>
                                                <ul className="dropdown-menu pull-right" role="menu">
                                                    <li><a href="#">Export as PDF</a></li>
                                                    <li><a href="#">Export as CSV</a></li>
                                                    <li><a href="#">Export as PNG</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <a href="#" className="btn btn-primary btn-xs"><i className="fa fa-cog"></i></a>
                                        </div>
                                    </div>
                                </header>
                                <div className="agileits-box-body clearfix">
                                    <div id="hero-area"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 wthree-crd">
                            <div className="card">
                                <div className="card-body">
                                    <div className="widget widget-report-table">
                                        <header className="widget-header m-b-15">
                                        </header>
                                        <div className="row m-0 md-bg-grey-100 p-l-20 p-r-20">
                                            <div className="col-md-6 col-sm-6 col-xs-6 w3layouts-aug">
                                                <h3>August 2016</h3>
                                                <p>REPORT</p>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-6 ">
                                                <h2 className="text-right c-teal f-300 m-t-20">$21,235</h2>
                                            </div>
                                        </div>
                                        <div className="widget-body p-15">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>2356</td>
                                                        <td>dummy text </td>
                                                        <td>6,200.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4589</td>
                                                        <td>Lorem Ipsum</td>
                                                        <td>6,500.00</td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td>3269</td>
                                                        <td>specimen book</td>
                                                        <td>6,800.00</td>
                                                    </tr>                                                    
                                                    <tr>
                                                        <td>5126</td>
                                                        <td>Letraset sheets</td>
                                                        <td>7,200.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7425</td>
                                                        <td>PageMaker</td>
                                                        <td>5,900.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                        <div className="col-sm-4 w3-agileits-crd">						
                            <div className="card card-contact-list">
                                <div className="agileinfo-cdr">
                                    <div className="card-header">
                                        <h3>Contacts</h3>
                                    </div>
                                    <div className="card-body p-b-20">
                                        <div className="list-group">
                                            <a className="list-group-item media" href="">
                                                <div className="pull-left">
                                                    <img className="lg-item-img" src="images/in1.jpg" alt=""/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="pull-left">
                                                        <div className="lg-item-heading">Lorem</div>
                                                        <small className="lg-item-text">lorem@gmail.com</small>
                                                    </div>
                                                    <div className="pull-right">
                                                        <div className="lg-item-heading">Ceo</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="list-group-item media" href="">
                                                <div className="pull-left">
                                                    <img className="lg-item-img" src="images/in2.jpg" alt=""/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="pull-left">
                                                        <div className="lg-item-heading">Ipsum</div>
                                                        <small className="lg-item-text">ipsum@hotmail.com</small>
                                                    </div>
                                                    <div className="pull-right">
                                                        <div className="lg-item-heading">Director</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="list-group-item media" href="">
                                                <div className="pull-left">
                                                    <img className="lg-item-img" src="images/in3.jpg" alt=""/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="pull-left">
                                                        <div className="lg-item-heading">Unknown</div>
                                                        <small className="lg-item-text">unknown@gmail.com</small>
                                                    </div>
                                                    <div className="pull-right">
                                                        <div className="lg-item-heading">Manager</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="list-group-item media" href="">
                                                <div className="pull-left">
                                                    <img className="lg-item-img" src="images/in4.jpg" alt=""/>
                                                </div>
                                                <div className="media-body">
                                                    <div className="pull-left">
                                                        <div className="lg-item-heading">Specimen</div>
                                                        <small className="lg-item-text">specimen@hotmail.com</small>
                                                    </div>
                                                    <div className="pull-right">
                                                        <div className="lg-item-heading">Assistan</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 w3-agile-crd">
                            <div className="card">
                                <div className="card-body card-padding">
                                    <div className="widget">
                                        <header className="widget-header">
                                            <h4 className="widget-title">Activities</h4>
                                        </header>
                                        <hr className="widget-separator"/>
                                        <div className="widget-body">
                                            <div className="streamline">
                                                <div className="sl-item sl-primary">
                                                    <div className="sl-content">
                                                        <small className="text-muted">5 mins ago</small>
                                                        <p>Williams has just joined Project X</p>
                                                    </div>
                                                </div>
                                                <div className="sl-item sl-danger">
                                                    <div className="sl-content">
                                                        <small className="text-muted">25 mins ago</small>
                                                        <p>Jane has sent a request for access</p>
                                                    </div>
                                                </div>
                                                <div className="sl-item sl-success">
                                                    <div className="sl-content">
                                                        <small className="text-muted">40 mins ago</small>
                                                        <p>Kate added you to her team</p>
                                                    </div>
                                                </div>
                                                <div className="sl-item">
                                                    <div className="sl-content">
                                                        <small className="text-muted">45 minutes ago</small>
                                                        <p>John has finished his task</p>
                                                    </div>
                                                </div>
                                                <div className="sl-item sl-warning">
                                                    <div className="sl-content">
                                                        <small className="text-muted">55 mins ago</small>
                                                        <p>Jim shared a folder with you</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="w3-agileits-pane">
                            <div className="col-md-4 wthree-pan">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <i className="fa fa-bell fa-fw"></i> Notifications Panel
                                    </div>
                                    <div className="panel-body">
                                        <div className="list-group"> 
                                            <a href="#" className="list-group-item"> <i className="fa fa-comment fa-fw"></i> New Comment <span className="pull-right text-muted small"><em>4 minutes ago</em> </span> </a> 
                                            <a href="#" className="list-group-item"> <i className="fa fa-twitter fa-fw"></i> 3 New Followers <span className="pull-right text-muted small"><em>12 minutes ago</em> </span> </a> 
                                            <a href="#" className="list-group-item"> <i className="fa fa-envelope fa-fw"></i> Message Sent <span className="pull-right text-muted small"><em>27 minutes ago</em> </span> </a> 
                                            <a href="#" className="list-group-item"> <i className="fa fa-tasks fa-fw"></i> New Task <span className="pull-right text-muted small"><em>43 minutes ago</em> </span> </a> 
                                            <a href="#" className="list-group-item"> <i className="fa fa-upload fa-fw"></i> Server Rebooted <span className="pull-right text-muted small"><em>11:32 AM</em> </span> </a>
                                            <a href="#" className="list-group-item"> <i className="fa fa-bolt fa-fw"></i> Server Crashed! <span className="pull-right text-muted small"><em>11:13 AM</em> </span> </a> 
                                            <a href="#" className="list-group-item"> <i className="fa fa-tasks fa-fw"></i> New Task <span className="pull-right text-muted small"><em>43 minutes ago</em> </span> </a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 agile-info-stat">
                                <div className="stats-info stats-last widget-shadow">
                                    <table className="table stats-table ">
                                        <thead>
                                            <tr>
                                                <th>S.NO</th>
                                                <th>PRODUCT</th>
                                                <th>STATUS</th>
                                                <th>PROGRESS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Lorem ipsum</td>
                                                <td><span className="label label-success">In progress</span></td>
                                                <td><h5>85% <i className="fa fa-level-up"></i></h5></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Aliquam</td>
                                                <td><span className="label label-warning">New</span></td>
                                                <td><h5>35% <i className="fa fa-level-up"></i></h5></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Lorem ipsum</td>
                                                <td><span className="label label-danger">Overdue</span></td>
                                                <td><h5 className="down">40% <i className="fa fa-level-down"></i></h5></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Aliquam</td>
                                                <td><span className="label label-info">Out of stock</span></td>
                                                <td><h5>100% <i className="fa fa-level-up"></i></h5></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Lorem ipsum</td>
                                                <td><span className="label label-success">In progress</span></td>
                                                <td><h5 className="down">10% <i className="fa fa-level-down"></i></h5></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>Aliquam</td>
                                                <td><span className="label label-warning">New</span></td>
                                                <td><h5>38% <i className="fa fa-level-up"></i></h5></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        
                        <div className="inner-block"></div>
                        <div className="copyrights">
                            <p>© 2016 Pooled. All Rights Reserved | Design by  <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
                        </div>
                </div>
            </div>
        )
    }
}

export default Home
