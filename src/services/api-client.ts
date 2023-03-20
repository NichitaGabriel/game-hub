import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '9f33f32525604283968a9b42d3939fe2'
  }
})