import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'jsonwebtoken';

function readmeLogin(){
  const sign = require('jsonwebtoken').sign;
  const user = {
    name: 'Dilip',
    email: 'dilip@piedpiper.com',
    
    // User's API Key
    apiKey: 'yNNzaCNeLB41RmMBY10GFhiba6p0DvM7',
  };

  const auth_token = sign(user, 'jOWAYRJT1nwbSuRQF4Or');
  const readmeUrl = 'https://imibot.readme.io/v1.0';

  console.log(`${readmeUrl}?auth_token=${auth_token}`)
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
