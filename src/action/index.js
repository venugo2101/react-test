import axios from 'axios';
const url = "";

export function fetch() {
  const request = axios.get(url);
  return {
    
    payload : request
  }
}
