import axios from "axios";
const instance = axios.create({
  // THE API (cloude function) URL
  baseURL: "http://127.0.0.1:5001/clone-d7b92/us-central1/api",
});
export default instance;
