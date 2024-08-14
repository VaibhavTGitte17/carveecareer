import React, { useState, useEffect } from "react";
import MentorService from "../services/mentor.service";

const MentorList = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    MentorService.getAllMentors().then((response) => {
      setMentors(response.data);
    });
  }, []);

  return (
    <div>
      <h3>Mentor List</h3>
      <ul>
        {mentors.map((mentor) => (
          <li key={mentor.id}>{mentor.name} - Expertise: {mentor.expertise}</li>
        ))}
      </ul>
    </div>
  );
};

export default MentorList;
