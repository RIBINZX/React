import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import App from './App';
// import Newapp from './Newapp';
// import Main from './seclevel/Main';
import Rootermain from './rooter/Rootermain';


  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  //   <React.StrictMode>
  //    <App/>
  //   </React.StrictMode>
  // );  

// const roots = ReactDOM.createRoot(document.getElementById('todolist'));
// roots.render(
//   <React.StrictMode>
//    <Newapp/>
//   </React.StrictMode>
// );

// const roots = ReactDOM.createRoot(document.getElementById('main'));
// roots.render(
//   <React.StrictMode>
//    <Main/>
//   </React.StrictMode>
// );

const roots = ReactDOM.createRoot(document.getElementById('rooter'));
roots.render(
  <React.StrictMode>
   <Rootermain/>
  </React.StrictMode>
);

