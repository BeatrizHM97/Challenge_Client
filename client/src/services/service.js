import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/api'
})

export default class Service {
  getLinks = async () => {
    try {
      const response = await api.get('/links');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  postShortcode = async (url) => {
    try {
      const link = {url: url};
      const response = await api.post('/links', link);
      return response.data;
    } catch (error) {     
      console.error(error);
    }
  }
}