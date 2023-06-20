class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider; // Access to the ActionProvider instance
    this.state = state;
  }

  fetchMessageFromAPI = async (message) => {
    console.log(message);
    try {
      const apiUrl = `http://localhost:8000/post-chat/?string=${message}`;
      const response = await fetch(apiUrl);
      const responseData = await response.json();
      const apiMessage = responseData;
      return apiMessage;
    } catch (error) {
      console.error('API request failed:', error);
      return 'An error occurred while fetching the message.';
    }
  };
  parse = async (message) => {
    console.log(message);
    console.log(this.state); // Give messages array

    // Check what is said for response
    const lowercase = message.toLowerCase();

    if (lowercase.includes('hello')) {
      this.actionProvider.helloworldhandle();
    } else {
      // Call the API to get the response
      const apiResponse = await this.fetchMessageFromAPI(message);
      this.actionProvider.responsehandle(apiResponse);
    }
  };
}

export default MessageParser;