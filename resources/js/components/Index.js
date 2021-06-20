import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Link, Route, withRouter, Switch} from 'react-router-dom'

import Header from './inc/parts/Header'
import Home from './pages/Home'

import GyanDetails from './pages/Gyan'
import Clients from './pages/Clients'
import Financials from './pages/Financials'
import Leads from './pages/Leads'
import OffPage from './pages/OffPage' 

class Index extends Component {
    render() {
        return (
                <Router>
                    <div className="page-container sidebar-collapsed-back">
                    <Header/>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/gyan/:id" component={GyanDetails}/>                            
                            <Route exact path="/clients" component={Clients}/>
                            <Route exact path="/financials" component={Financials}/>
                            <Route exact path="/leads" component={Leads}/>
                            <Route exact path="/offPage" component={OffPage}/>
                        </Switch>
                    </div>
                </Router>
        )
    }
}

if (document.getElementById('root')) { ReactDOM.render(<Index />, document.getElementById('root')); }