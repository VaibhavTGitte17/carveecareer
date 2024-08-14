import React from "react";
import MentorList from "./components/MentorList";
import StudentList from "./components/StudentList";
import ScheduleList from "./components/ScheduleList";
import CreateSchedule from "./components/CreateSchedule";

function App() {
  return (
    <div className="App">
      <h1>1x1 Scheduler</h1>
      <CreateSchedule />
      <ScheduleList />
      <MentorList />
      <StudentList />
    </div>
  );
}

export default App;
