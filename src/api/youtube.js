import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:
    {
        part: 'snippet',
        maxResult: 5,
        key: 'AIzaSyB3sGVt5IyOEVkbXd6zlABHB2_gQnryKuA'
    }
})