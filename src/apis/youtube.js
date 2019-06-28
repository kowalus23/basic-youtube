import axios from 'axios';

const KEY = 'AIzaSyBvX6lkE68p9n2HpncWgdy2qjj6Yo13JVE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

