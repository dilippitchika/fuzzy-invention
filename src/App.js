import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'jsonwebtoken';

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
      </header>
    </div>
  );
}

export default App;
