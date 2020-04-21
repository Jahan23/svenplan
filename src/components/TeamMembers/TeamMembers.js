import React, { Component } from 'react';
import {connect} from 'react-redux';


class TeamMembers extends Component{

state={ 
    
    }

    componentDidMount=()=>{
        this.props.dispatch({type: 'GET_CLIENT_LIST'})
    }

    accessChange=(id, level)=>{
        if (level === 1) {
            alert('Admin Access cannot be changed')
            return
        }
        else{
            this.props.dispatch({type:"EDIT_ACCESS", payload:{id,level}})
        }
        }
       

    render(){
    return (
        <div >

            <h2>Team Members using your workflows:</h2>
            <table id="clientTable">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Access Level</th>
                        <th>Permissions</th>
                        {/* <th>Address</th> */}
                    </tr>
                </thead>
                <tbody>
                    {this.props.reduxState.admin.clientList.map(subscriber => (
                        <tr key={subscriber.id}>
                            <td>{subscriber.company}</td>
                            <td>{subscriber.firstname} {subscriber.lastname}</td>
                            <td>{subscriber.email}</td>
                            <td>{subscriber.phone}</td>
                            <td>{subscriber.level}:
                            {subscriber.level === 4 &&
                                    'Base Account'} 
                            { subscriber.level ===3 &&
                            'Team Member'}
                            {subscriber.level ===2 &&
                            'Enterprise Admin'}
                                {subscriber.level === 1 &&
                                    'Application Administrator'}
                            </td>
                            <td><button key={subscriber.id} onClick={() => this.accessChange(subscriber.id, subscriber.level)} name='subscriber.clientid'>Grant/Revoke Enterprise Access</button></td>
                            {/* <td>{client.address}</td> */}
                        </tr>))}              
                </tbody>
            </table>
        </div>
    );
}
}

const putReduxStateOnProps=(reduxState)=>({
    reduxState
  });
  
export default connect(putReduxStateOnProps)(TeamMembers);