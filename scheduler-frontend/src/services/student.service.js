import axios from "axios";

const API_URL = "http://localhost:8080/api/students/";

const getAllStudents = () => {
  return axios.get(API_URL);
};

const createStudent = (data) => {
  return axios.post(API_URL, data);
};

export default {
  getAllStudents,
  createStudent
};
