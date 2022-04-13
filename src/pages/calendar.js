import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Component } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../App.css";

class MyCalendar extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.setState({
      user: this.props.user,
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
