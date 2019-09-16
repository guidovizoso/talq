# talq (WIP)
## Conversational UI library

## Getting started

> This is just for development purposes

First of all clone the **talq** repo and link it to be used as a npm dependecy.

    git clone https://github.com/guidovizoso/talq.git
    cd talq
    npm link

Then you should create a new react app

    (in another directory)
    npx create-react-app talq-test
    cd talq-test
    npm link talq

Open `app.js` and have fun!

Example code:

```
// You need to import from /lib because we're not on the real npm package yet

import {
  ChatBox,
  MessagesContainer,
  Message,
  MessageInput,
  Input,
  Status
} from "talq/lib";

function App() {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("");
  const addMessage = newMessage =>
    setMessages(prevMessages => [...prevMessages, newMessage]);

  const handleOnSubmit = value => {
    addMessage({ message: value, position: "right" });
    setTimeout(() => {
      setStatus("John Doe is writing...");
    }, 1000);
    setTimeout(() => {
      setStatus("");
      addMessage({ message: "Hey", position: "left" });
    }, 1500);
  };

  return (
    <div className="App">
      <ChatBox>
        <MessagesContainer>
          {messages.map(m => (
            <Message
              key={m.message}
              message={m.message}
              position={m.position}
            />
          ))}
        </MessagesContainer>
        <Status text={status} />
        <MessageInput
          onChange={value => console.log("onChange", value)}
          onSubmit={value => handleOnSubmit(value)}
        >
          {({ value, handleChange, handleSubmit }) => {
            return (
              <Input
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            );
          }}
        </MessageInput>
      </ChatBox>
    </div>
  );
}
```
