import React from 'react';
import {UserService} from '../lib/UserService'
import {Trainer, Admin, Scheduler} from "../models/Users";

const Dashboard = () =>{
const user = UserService.CurrentUser()

    if(user instanceof Trainer){
        return(
            <div>
                <h1>TRAINER DASHBOARD HERE</h1>
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