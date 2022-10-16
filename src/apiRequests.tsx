import axios from "axios";

export default axios.create({
  baseURL: " https://32zx701gtd.execute-api.af-south-1.amazonaws.com/prod",
  headers: {
    "Content-type": "application/json"
  }
});