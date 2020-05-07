import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'jsonwebtoken';
import axios from 'axios';

function readmeLogin(){
  const jwt = require('jsonwebtoken');

// User being logged into ReadMe
const user = {
  name: 'Dilip',
  email: 'dilip@piedpiper.com',
  
    // User's API Key
    apiKey: "yNNzaCNeLB41RmMBY10GFhiba6p0DvM7",
};
const authToken = jwt.sign(user, 'jOWAYRJT1nwbSuRQF4Or');
const readmeUrl = 'https://docs.imibot.ai/v1.0';

// Redirect your user to this URL to log them in
console.log(`${readmeUrl}?auth_token=${authToken}`);
};
function readmeCORS(){
  const data = {
    name: 'Dilip',
    email: 'dilip@piedpiper.com'}

  const headers = {
    "content-type":"application/json"
  }
  const url = "https://imibotreadmeauth.netlify.app/.netlify/functions/server"
  axios.post(url,data,{headers:headers})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://imibot.ai/static/assets/img/login/imibotlogo.svg" className="App-logo" alt="logo" />
        <p
        >
          IMImobile's enterprise bot and AI solution
        </p>
        <button onClick = {readmeLogin}>Print readme url in console</button>
        <button onClick = {readmeCORS}>call readme api</button>
      </header>
    </div>
  );
}

export default App;
