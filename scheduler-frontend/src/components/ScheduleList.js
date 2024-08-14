import React, { useState, useEffect } from "react";
import ScheduleService from "../services/schedule.service";

const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    ScheduleService.getAllSchedules().then((response) => {
      setSchedules(response.data);
    });
  }, []);

  return (
    <div>
      <h3>Schedule List</h3>
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule.id}>
            Student ID: {schedule.studentId} - Mentor ID: {schedule.mentorId} - Time Slot: {new Date(schedule.timeSlot).toLocaleString()} - Duration: {schedule.duration} mins
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;
