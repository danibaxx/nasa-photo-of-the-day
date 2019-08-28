import axios from 'axios';

export function getApod() {
  axios.get('https://api.nasa.gov/planetary/apod')
    .then(response => (console.log(response)))
    .catch(error => (console.log("Error", error)))
};