class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  responsehandle = (message) => {
    const botMessage = this.createChatBotMessage(message);
    this.setChatbotMessage(botMessage);
  };

  helloworldhandle = (message) => {
    const botMessage = this.createChatBotMessage("Give me a pet name for their Super Hero Nicknames!");
    this.setChatbotMessage(botMessage)
  }

  setChatbotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };

  // Other methods of ActionProvider
}

export default ActionProvider;

