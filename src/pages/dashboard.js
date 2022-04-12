import React from 'react';
import {UserService} from '../lib/UserService'
import {Trainer, Admin, Scheduler} from "../models/Users";
import PersonalInfoPage from './updatePersonalInfo.js'

const Dashboard = () =>{
const user = UserService.CurrentUser()

    if(user instanceof Trainer){
        return(
            <div className="animate__animated animate__fadeIn">
                <PersonalInfoPage/>
            </div>
        )
    }
    else if (user instanceof Admin){
        return(
            <h1>ADMIN DASHBOARD HERE</h1>
        )
    }
    else{
        return(
            <h1>SCHEDULER DASHBOARD HERE</h1>
        )
    }
}
export default Dashboard