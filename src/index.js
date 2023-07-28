import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Counter from './Counter';
// import reportWebVitals from './reportWebVitals';
// import Counterclass from './Counterclass';
import Newapp from './Newapp';



  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  //   <React.StrictMode>
  //    <App/>
  //   </React.StrictMode>
  // );  

const roots = ReactDOM.createRoot(document.getElementById('todolist'));
roots.render(
  <React.StrictMode>
   <Newapp/>
  </React.StrictMode>
);


