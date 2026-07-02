# ChatBox.jsx

The `ChatBox` component is the main conversation area of the frontend chat application. It is responsible for displaying messages between the logged-in user and the selected user, fetching previous messages from the backend, sending new messages, and automatically updating the UI.

---

# Responsibilities

- Display the selected user's information.
- Fetch all previous messages.
- Display messages in chronological order.
- Send new messages.
- Clear the input after sending.
- Automatically refresh the chat after a new message is sent.
- Show loading state if needed.

---

# Data Flow

```
Sidebar
    │
    │ selectedUser
    ▼
Chat
    │
    ▼
ChatBox
    │
    ├── GET /api/messages/:id
    │
    ├── Display Messages
    │
    └── POST /api/messages/send/:id
```

---

# State Variables

```jsx
const [messages, setMessages] = useState([]);
const [text, setText] = useState("");
```

### messages

Stores all chat messages.

Example

```js
[
  {
    _id: "1",
    senderId: "abc",
    receiverId: "xyz",
    text: "Hello"
  },
  {
    _id: "2",
    senderId: "xyz",
    receiverId: "abc",
    text: "Hi"
  }
]
```

---

### text

Stores the current message typed by the user.

Example

```js
text = "How are you?"
```

---

# Fetching Messages

Whenever a different user is selected, ChatBox fetches all messages.

```jsx
useEffect(() => {
    getMessages();
}, [selectedUser]);
```

---

## API Request

```jsx
GET /api/messages/:selectedUserId
```

Example

```
GET /api/messages/6648c...
```

Backend returns

```json
[
  {
    "_id":"1",
    "senderId":"abc",
    "receiverId":"xyz",
    "text":"Hello"
  },
  {
    "_id":"2",
    "senderId":"xyz",
    "receiverId":"abc",
    "text":"Hi"
  }
]
```

Then

```jsx
setMessages(response.data);
```

---

# Displaying Messages

Messages are rendered using `map()`.

```jsx
messages.map((msg) => (
    <Message
        key={msg._id}
        message={msg}
    />
))
```

Each object is passed to the `Message` component.

---

# Sending a Message

When the Send button is clicked,

```jsx
handleSend()
```

runs.

---

## API

```jsx
POST /api/messages/send/:selectedUserId
```

Body

```json
{
    "text":"Hello"
}
```

---

Backend stores the message in MongoDB and returns the saved message.

Example

```json
{
    "_id":"123",
    "senderId":"abc",
    "receiverId":"xyz",
    "text":"Hello"
}
```

---

# Updating the UI

Instead of fetching all messages again, the new message is appended to the existing array.

```jsx
setMessages([...messages, response.data]);
```

or

```jsx
setMessages(prev => [...prev, response.data]);
```

Using the functional update is recommended because it always uses the latest state.

---

# Clearing the Input

After sending,

```jsx
setText("");
```

This empties the input field.

---

# Input Binding

```jsx
<input
    value={text}
    onChange={(e) => setText(e.target.value)}
/>
```

- `value` displays the current text.
- `onChange` updates the state as the user types.

---

# Complete Workflow

```
User selects a friend
        │
        ▼
selectedUser changes
        │
        ▼
useEffect runs
        │
        ▼
GET messages from backend
        │
        ▼
setMessages()
        │
        ▼
Messages displayed
        │
        ▼
User types a message
        │
        ▼
text state updates
        │
        ▼
Click Send
        │
        ▼
POST message to backend
        │
        ▼
Backend saves message
        │
        ▼
Response received
        │
        ▼
Append new message
        │
        ▼
UI updates instantly
        │
        ▼
Input cleared
```

---

# Component Structure

```
ChatBox
│
├── Header
│     └── Selected User Name
│
├── Messages Container
│     ├── Message
│     ├── Message
│     ├── Message
│     └── ...
│
└── Message Input
      ├── Text Field
      └── Send Button
```

---

# React Hooks Used

### useState

```jsx
const [messages, setMessages] = useState([]);
const [text, setText] = useState("");
```

Purpose:

- Store fetched messages.
- Store the input text.

---

### useEffect

```jsx
useEffect(() => {
    getMessages();
}, [selectedUser]);
```

Purpose:

- Fetch messages whenever the selected user changes.

---

# Axios Requests

### Fetch Messages

```jsx
axios.get(`/api/messages/${selectedUser._id}`);
```

---

### Send Message

```jsx
axios.post(
    `/api/messages/send/${selectedUser._id}`,
    {
        text
    }
);
```

---

# Parent-Child Relationship

```
App
 │
 ▼
Chat
 │
 ▼
ChatBox
 │
 └── Message
```

- `Chat` passes `selectedUser` to `ChatBox`.
- `ChatBox` passes each message object to `Message`.

---

# Best Practices

- Use functional state updates when appending messages.
- Clear the input after sending.
- Prevent sending empty messages.
- Display messages using unique `_id` values as keys.
- Fetch messages whenever the selected user changes.
- Keep API calls inside dedicated async functions.
- Handle loading and error states for a better user experience.
- Add auto-scroll so the latest message is always visible.

---

# Summary

The `ChatBox` component acts as the core conversation area of the application. It receives the selected user, retrieves the conversation history from the backend, renders each message, allows the user to send new messages, updates the UI immediately after sending, and maintains the current input using React state. It serves as the bridge between the frontend interface and the messaging API, providing a smooth real-time chat experience.
