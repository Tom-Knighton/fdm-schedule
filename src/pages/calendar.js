import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Component } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Users from "../models/Users";
import { UserService } from "../lib/UserService"


class MyCalendar extends Component{
    
    componentDidMount() {
        this.state = {
          user: UserService.GetUserByUsername("user2")
          //user: JSON.parse(localStorage.get("user"));
          //const user = JSON.parse(localStorage.get("user"));

        }
      }
    

    render() {
        const localizer = momentLocalizer(moment)

        return(
      
            <div>

{ this.state.user && <Calendar 
                localizer={localizer}
                events={this.state.user.modules}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
              />}
            </div>
        )
    } }



export default MyCalendar