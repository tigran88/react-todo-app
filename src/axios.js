import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-todo-app-1cb41.firebaseio.com/'
});

export default instance;