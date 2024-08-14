import axios from "axios";

const API_URL = "http://localhost:8080/api/mentors/";

const getAllMentors = () => {
  return axios.get(API_URL);
};

const createMentor = (data) => {
  return axios.post(API_URL, data);
};

export default {
  getAllMentors,
  createMentor
};
