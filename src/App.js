/* import logo from './logo.svg'; */
import { React, useState, useMemo } from "react";
import "./App.css";
import Navbar from "./header/Navbar";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    id: 0,
    title: "first day School",
    start: new Date(2023, 8, 5, 12, 10),
    end: new Date(2023, 8, 5, 17, 30),
  },

  {
    id: 1,
    title: "Welcome Visit for New Students",
    start: new Date(2023, 10, 9, 7, 30),
    end: new Date(2023, 10, 12, 15, 30),
  },

  {
    id: 2,
    title: "Lower Grade Tourism",
    start: new Date(2023, 11, 10, 12, 10),
    end: new Date(2023, 11, 22, 15, 30),
  },

  {
    id: 3,
    title: "Teachers Celebration Day",
    start: new Date(2024, 1, 6, 12, 45),
    end: new Date(2024, 1, 6, 17, 10),
  },

  {
    id: 4,
    title: "Youth Celebration Day",
    start: new Date(2024, 1, 11, 13, 30),
    end: new Date(2024, 1, 8, 17, 10),
  },

  {
    id: 5,
    title: "Graduate Students Week Visit",
    start: new Date(2024, 2, 14, 13, 30),
    end: new Date(2024, 2, 21, 17, 10),
  },

  {
    id: 6,
    title: "Student Olympiade Week",
    start: new Date(2024, 3, 2, 12, 10),
    end: new Date(2024, 3, 9, 14, 20),
  },

  {
    id: 7,
    title: "School BirthDay",
    start: new Date(2024, 3, 17, 14, 30),
    end: new Date(2024, 3, 17, 18, 10),
  },

  {
    id: 8,
    title: "Upper Grade Tourism",
    start: new Date(2024, 3, 21, 12, 10),
    end: new Date(2024, 4, 12, 15, 30),
  },

  {
    id: 9,
    title: "Sports Contest School",
    start: new Date(2024, 4, 5, 12, 10),
    end: new Date(2024, 4, 31, 17, 30),
  },

  {
    id: 10,
    title: "Farewell Pictures",
    start: new Date(2024, 5, 16, 12, 10),
    end: new Date(2024, 5, 17, 14, 30),
  },

  {
    id: 11,
    title: "Graduation Week",
    start: new Date(2024, 6, 21, 12, 10),
    end: new Date(2024, 6, 28, 16, 30),
  },
];

function App() {
  const [current, setCurrent] = useState(false);
  const [allEvents, setAllEvents] = useState(events);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const { defaultDate } = useMemo(
    () => ({
      defaultDate: new Date(2023, 8, 5, 7, 30),
    }),
    []
  );

  const handleViewIcon = () => {
    setCurrent(!current);
  };

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <div className="App">
      <div className="App_container">
        <Navbar current={current} handleViewIcon={handleViewIcon} />
      </div>
      <div className="main_part">
        <div className="calender_part">
          <Calendar
            localizer={localizer}
            events={allEvents}
            defaultDate={defaultDate}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
        <div
          className={current ? `add_events_manager show` : `add_events_manager`}
        >
          <div className="events_manager_content d-flex flex-column">
            <span className="events_title">Add New Event</span>
            <div className="ct_new_event">
              <input
                type="text"
                name="event"
                className="input_event"
                placeholder="Title"
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
              />
              <DatePicker
                placeholderText="Start Date"
                className="input_datepicker"
                onChange={(start) => setNewEvent({ ...newEvent, start: start })}
              ></DatePicker>
              <DatePicker
                placeholderText="End Date"
                className="input_datepicker"
                onChange={(end) => setNewEvent({ ...newEvent, end: end })}
              ></DatePicker>
              <button className="btn_event_add" onClick={handleAddEvent}>
                Add Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
