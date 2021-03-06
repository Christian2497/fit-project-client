import axios from "axios";

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  handleUpload = async (theFile) => {
    try {
      const res = await this.service.post(`/upload`, theFile);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const axiosRequestFunctions = new Service();

export default axiosRequestFunctions;
