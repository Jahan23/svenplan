import React from 'react'; 
import { connect } from 'react-redux';
import './AdminHome.css'
import AdminNav from './AdminNav/AdminNav';
import CreateWorkflow from './CreateWorkflow/CreateWorkflow';
import ExistingWorkflows from './ExistingWorkflows/ExistingWorkflows'
import ExistingProjects from './ExistingProjects/ExistingProjects'
import ClientAlerts from './ClientAlerts/ClientAlerts';
import ClientList from './ClientList/ClientList';
import UserProfile from '../UserProfile/UserProfile';



function AdminHome(props) {
    return (
        <>       
            <AdminNav />
            {props.reduxState.admin.adminDisplay.displayOldWorkFlow && <ExistingWorkflows/>}
            {props.reduxState.admin.adminDisplay.displayNewWorkFlow && <CreateWorkflow/>}
            {props.reduxState.admin.adminDisplay.displayOldProjects && <ExistingProjects/>}
            {props.reduxState.admin.adminDisplay.displayAlerts && <ClientAlerts/>}
            {props.reduxState.admin.adminDisplay.displayClients && <ClientList/>}
            {props.reduxState.admin.adminDisplay.displayProfile && <UserProfile/>} 
        </>
    );
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default connect(putReduxStateOnProps)(AdminHome);