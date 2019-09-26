# talq 💬 (WIP)

### Conversational UI library for React projects

<img src="https://raw.githubusercontent.com/guidovizoso/talq/master/docs/_media/talq.gif" width="400">

## Getting started

Install **talq** with your favorite package manager on the root folder of your project:

    npm install talq /or/ yarn add talq

Once you did that you can import **talq** when needed like this:

```javascript
import {
  ChatBox,
  MessagesContainer,
  MessageInput,
  Input,
  Status
} from "talq/lib";
```

These are the basic **talq** components and what they do:

### ChatBox

Parent of the whole library. It's always the upper component on the hierarchy.

```javascript
const ComponentWithTalq = () => <ChatBox>{insertYourChatHere}</ChatBox>;
```

#### Props

| **Name**       | **Type**      | **Function**                           | **Required** | **Default value** |
| -------------- | ------------- | -------------------------------------- | ------------ | ----------------- |
| children       | JSX Element[] | The other UI components                | Yes          | None              |
| fluid          | boolean       | Makes container 100% width and height  | No           | false             |
| width          | string        | Container width (px, %, vw)            | false        | 500px             |
| height         | string        | Container height (px, %, vw)           | false        | 500px             |
| showSenderName | boolean       | Show the name of the message sender    | No           | false             |
| showSenderPic  | boolean       | Show the picture of the message sender | No           | false             |

### MessagesContainer

Container of messages, wielder of the truth. It takes an array and makes it a conversation.

```javascript
const ComponentWithTalq = () => (
  <ChatBox>
    <MessagesContainer messages={messages} />
  </ChatBox>
);
```

#### The messages object

So how does this messages you talk about look like?

Like this:

```javascript
const messages = [
  {
    message: "Lorem ipsum dolor sit amet.",
    position: "left",
    key: "sdadsa2",
    senderName: "The lorem ipsum guy",
    senderPic: sender
  }
];
```

**If _senderName_ is the same as the previous message it automatically group messages!**

Behold the message properties:
**Name**|** Type**|** Function**|** Required**|** Default value**
:-----:|:-----:|:-----:|:-----:|:-----:
message| string| The content to be displayed| Yes| “Message”
color| string| The color of the message (Only applies to left ones)| No| "#00A896"
senderName| string| The name of the sender| No|
senderPic| string| The url where the pic of the sender is| No|

### MessageInput

Where your inputs live. Due to the modular nature of the library, expect new inputs in the future.
It exposes two functions in the _render props pattern_ and the value.

```javascript
const ComponentWithTalq = () => (
  <ChatBox>
    <MessagesContainer messages={messages} />
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
);
```

#### handleChange

Returns the value of the input when onChange event is triggered.

#### handleSubmit

Returns the value of the input when the user submits. (By default when it presses the Enter key)

### Input

Standard text input to get your chat working. It uses

```javascript
const ComponentWithTalq = () => (
  <ChatBox>
    <MessagesContainer messages={messages} />
    <MessageInput>
      {({ value, handleChange, handleSubmit }) => {
        return (
          <Input
            value={value}
            onChange={console.log(value)}
            onSubmit={console.log(value)}
          />
        );
      }}
    </MessageInput>
  </ChatBox>
);
```

### Status (optional component)

It let's you show a little status message on a certain action, the clasic "XXX is writing..."

```javascript
const ComponentWithTalq = () => (
  <ChatBox>
    <MessagesContainer messages={messages} />
    <Status text={user.isWriting ? "XXX is writing..." : null}>
    <MessageInput>
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
);
```

## Roadmap

- [x] First release
- [x] Automatic message grouping
- [ ] Detailed documentation
- [ ] Contributing.md
- [ ] Images support
- [ ] Bubbles input
- [ ] Theming support
- [ ] Emoji input
