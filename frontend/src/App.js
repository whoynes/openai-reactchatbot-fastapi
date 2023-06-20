import React from "react";
import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

// https://gist.github.com/FredrikOseberg/c1e8ec83ade6e89ca84882e33caf599c
// https://www.youtube.com/watch?v=DOOxcEO3KGY&list=PL_kr51suci7UQAxHOF2GitkM5WrOBPcpf&index=4
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import config from "./config";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
      </header>
    </div>
  );
}

export default App;
