import React, { useState, useEffect } from "react";
import StudentService from "../services/student.service";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    StudentService.getAllStudents().then((response) => {
      setStudents(response.data);
    });
  }, []);

  return (
    <div>
      <h3>Student List</h3>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name} - Area of Interest: {student.areaOfInterest}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
