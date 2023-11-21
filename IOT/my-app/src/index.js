import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Counter from './chapter_07/Counter';
import TestUseEffect from './chapter_07/TestUseEffect';
import Accommodate from './chapter_07/Accommodate';
import Average from './chapter_07/Average';
import AverageUseMemo from './chapter_07/AverageUseMemo';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import Attendance from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProjileCard';
import ProjileCard from './chapter_13/ProjileCard';
import DarkOrLight from './chapter_14/DarkOrLight';
import Blocks from './chapter_15/Blocks';




//ReactDOM.render(
//   <React.StrictMode>
 //     <Library />
 //   </React.StrictMode>,
 //   document.getElementById('root')
// );

//setInterval(() => {
//ReactDOM.render(
 // <React.StrictMode>
//  <CommentList />
//</React.StrictMode>,
//ocument.getElementById('root')

// );
//}, 1000);

//ReactDOM.render(
 // <React.StrictMode>
 // <NotificationList />
//</React.StrictMode>,
// document.getElementById('root')

// ReactDOM.render(
//  <React.StrictMode>
//  <AverageUseMemo />
// </React.StrictMode>,
// document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
  <NotificationList />
</React.StrictMode>,
 document.getElementById('root')


);







//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
 //   <App />
//  </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
