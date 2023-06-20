// Config starter code
//https://gist.github.com/FredrikOseberg/87795296efb67fe76fa05fc839d22e25

//this file changes the components and colors of the chatbot
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";

// import ToDos from "./ToDos/ToDos";

const config = {
//   initialMessages: [createChatBotMessage(`Hello world`, {
//       widget: 'todos'
//   })],
  initialMessages: [createChatBotMessage(`Ask me hello for instructions`)],
  botName: "PetSuperHeroGPT",
  customComponents: {
      botAvatar:  (props) => <BotAvatar {...props} />
  },
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  state: {
      todos: []
  },
//   widgets: [
//     {
//         widgetName: 'todos',
//         widgetFunc: (props) => <ToDos {...props} />,
//         mapStateToProps: ['todos'],
//     }
//   ]
}

export default config
