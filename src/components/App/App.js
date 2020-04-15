import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import AdminHome from '../AdminHome/AdminHome';
import ClientHome from '../ClientHome/ClientHome';
import LandingPage from '../LandingPage/LandingPage';

import Footer from '../Footer/Footer'
import AddTask from '../AddTask/AddTask';
import Container from '../AddTask/Container';
import ClientList from '../AdminHome/ClientList/ClientList';
import ExistingProjects from '../AdminHome/ExistingProjects/ExistingProjects';
import ClientAlerts from '../AdminHome/ClientAlerts/ClientAlerts';
import CreateWorkflow from '../AdminHome/CreateWorkflow/CreateWorkflow'
import ExistingWorkflows from '../AdminHome/ExistingWorkflows/ExistingWorkflows';

import LoginPage from '../LoginPage/LoginPage';//haley added to test auth


// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* component view if not logged in */}
          <Route exact path="/" component={LandingPage} />
          {/* be sure to protect this route */}
          <Route exact path="/adminHome" component={AdminHome} />
          <Route exact path="/clientHome" component={ClientHome} />
          <Route exact path="/createWorkflow" component={CreateWorkflow} />
          <Route exact path="/existingWorkflows" component={ExistingWorkflows} />
          <Route exact path="/add-task" component={AddTask} />
          <Route exact path="/container" component={Container} />
          <Route exact path="/clientList" component={ClientList} />
          <Route exact path="/existingProjects" component={ExistingProjects} />
          <Route exact path="/clientAlerts" component={ClientAlerts} />
          <Route exact path="/login-register" component={LoginPage} />
          {/* 404 page creation below */}
          <Route render={() => 
            <div className="fourOfour">
              <a href="#add-task" ><img src="/images/NEOOPartnersLogo.png" alt="neoo"/></a>
            </div>
          } />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App;
