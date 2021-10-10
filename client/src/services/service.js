import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/api'
})

export default class Service {
  getLinks = async () => {
    try {
      const response = await api.get('/links/top20');
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

  patchLink = async (id) => {
    try {
      const response = await api.patch(`/links/sumVisits/?id=${id}`);
      return response.data;
    } catch (error) { 
      console.error(error);
    }
  }

  login = async (email, password) => {
    try {
      const user = {email: email, password: password};
      const response = await api.post('/users/login', user);
      return response.data;
    } catch (error) {     
      console.error(error);
    }
  }
}