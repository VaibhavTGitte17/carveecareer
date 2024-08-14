import React, { useState } from "react";
import ScheduleService from "../services/schedule.service";

const CreateSchedule = () => {
  const [studentId, setStudentId] = useState("");
  const [mentorId, setMentorId] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [duration, setDuration] = useState(30);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { studentId, mentorId, timeSlot, duration };
    ScheduleService.createSchedule(data).then((response) => {
      alert("Schedule created successfully!");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Student ID:</label>
        <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
      </div>
      <div>
        <label>Mentor ID:</label>
        <input type="text" value={mentorId} onChange={(e) => setMentorId(e.target.value)} />
      </div>
      <div>
        <label>Time Slot:</label>
        <input type="datetime-local" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} />
      </div>
      <div>
        <label>Duration (mins):</label>
        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value={30}>30 mins</option>
          <option value={45}>45 mins</option>
          <option value={60}>60 mins</option>
        </select>
      </div>
      <button type="submit">Create Schedule</button>
    </form>
  );
};

export default CreateSchedule;
