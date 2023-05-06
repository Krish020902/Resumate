import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import axios from "axios";

const api_key = "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";

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello! How may I help you?",
      sender: "ChatGPT",
    },
  ]);

  const [typing, setIsTyping] = useState(false);

  const handleSubmit = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setIsTyping(true);
    chatGPT(newMessages);
  };

  async function chatGPT(chatMessages) {
    let apiMessage = chatMessages.map((messageOBJ) => {
      let role = "";
      if (messageOBJ.sender == "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageOBJ.message };
    });

    const systemMessage = {
      role: "system",
      content: "Explain all concepts like I am 10 years old",
    };

    // await axios
    //   .post("https://api.openai.com/v1/chat/completions", {
    //     headers: {
    //       "Authorization": `Bearer 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`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       "model": "gpt-3.5-turbo",
    //       "messages": [systemMessage, ...apiMessage],
    //       "temperature": 0.7,
    //     }),
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err)=>{console.log(err)});

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessage],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + api_key,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res + res.choices[0].message.content);
        setMessages([
          ...chatMessages,
          {
            message: res.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <div className="App">
      <div style={{ position: "relative", height: "700px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                typing ? <TypingIndicator content="Typing" /> : null
              }
            >
              {messages.map((message, id) => {
                return <Message key={id} model={message} />;
              })}
            </MessageList>
            <MessageInput
              placeholder="type message hear"
              onSend={handleSubmit}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
