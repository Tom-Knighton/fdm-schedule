import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Component } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { UserService } from "../lib/UserService";
import "../App.css";

class MyCalendar extends Component {
  state = {
    user: null,
  };

  componentDidMount(props) {
    this.setState({
      user: props?.user ? props?.user : UserService.CurrentUser(),
    });
  }

  render() {
    const localizer = momentLocalizer(moment);

    return (
      <>
        {this.state.user && (
          <Calendar
            className="calendar"
            localizer={localizer}
            events={this.state.user.modules}
            startAccessor="start"
            endAccessor="end"
            eventPropGetter={(event, start, end, isSelected) => {
              return { style: { backgroundColor: event.moduleColour }}
            }}
          />
        )}
      </>
    );
  }
}

export default MyCalendar;
