import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
// import axios from 'axios'
//
// // axios.defaults.baseURL = 'https://react-todo-app-1cb41.firebaseio.com/';
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
// axios.defaults.headers.common['Authorization'] = "AUTH TOKEN";
// axios.defaults.headers.post['Content-Type'] = 'application/json';
//
// axios.interceptors.request.use(request => {
//     console.log(request)
//     return request;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// });
//
// const Error = () => {
//     return (
//         <div>
//             error 500
//         </div>
//     )
// };
//
// axios.interceptors.response.use(response => {
//     console.log(response);
//     return response;
// }, error => {
//     console.log(error);
//     return <Error />;
//     // return Promise.reject(error);
// });

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
