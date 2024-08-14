import axios from "axios";

const API_URL = "http://localhost:8080/api/schedules/";

const getAllSchedules = () => {
  return axios.get(API_URL);
};

const createSchedule = (data) => {
  return axios.post(API_URL, data);
};

export default {
  getAllSchedules,
  createSchedule
};
