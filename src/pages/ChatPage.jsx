import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

const socket = io(import.meta.env.VITE_API_URL);

const ChatPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const messagesEndRef = useRef(null);

  const token = localStorage.getItem('token');

  const fetchUsers = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/admin/users`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const filtered = res.data.filter(u => u._id !== JSON.parse(atob(token.split('.')[1])).id);
    setUsers(filtered);
  };

  const fetchMessages = async (userId) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/chat/history/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setMessages(res.data);
  };

  const handleSend = async () => {
    if (!text.trim() || !selectedUser) return;

    const payload = {
      senderId: JSON.parse(atob(token.split('.')[1])).id,
      receiverId: selectedUser._id,
      text
    };

    socket.emit('sendMessage', payload);
    await axios.post(`${import.meta.env.VITE_API_URL}/api/chat/save`, {
      receiverId: selectedUser._id,
      text
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });

    setMessages((prev) => [...prev, { sender: payload.senderId, text }]);
    setText('');
  };

  useEffect(() => {
    const userId = JSON.parse(atob(token.split('.')[1])).id;
    socket.emit('register', userId);

    socket.on('receiveMessage', (msg) => {
      if (msg.senderId === selectedUser?._id) {
        setMessages((prev) => [...prev, { sender: msg.senderId, text: msg.text }]);
      }
    });

    fetchUsers();

    return () => {
      socket.off('receiveMessage');
    };
  }, [selectedUser]);

  useEffect(() => {
    if (selectedUser) {
      fetchMessages(selectedUser._id);
    }
  }, [selectedUser]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex h-[85vh] max-w-6xl mx-auto border rounded overflow-hidden shadow mt-6">
      {/* Sidebar */}
      <div className="w-1/3 border-r bg-gray-100 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Chat Users</h2>
        {users.map(user => (
          <div
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`p-2 cursor-pointer rounded ${selectedUser?._id === user._id ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
          >
            {user.name}
          </div>
        ))}
      </div>

      {/* Chat Window */}
      <div className="w-2/3 flex flex-col">
        <div className="flex-grow p-4 overflow-y-auto bg-white">
          {selectedUser ? (
            <>
              <h3 className="text-lg font-semibold mb-4">Chat with {selectedUser.name}</h3>
              <div className="space-y-2">
                {messages.map((msg, index) => {
                  const isMe = msg.sender === JSON.parse(atob(token.split('.')[1])).id;
                  return (
                    <div
                      key={index}
                      className={`p-2 rounded max-w-[70%] ${isMe ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-200 text-black'}`}
                    >
                      {msg.text}
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>
            </>
          ) : (
            <p className="text-gray-500">Select a user to start chatting</p>
          )}
        </div>

        {/* Input */}
        <div className="p-3 border-t bg-white flex gap-2">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-grow border rounded px-3 py-2"
            placeholder="Type your message"
          />
          <button onClick={handleSend} className="bg-blue-600 text-white px-4 rounded">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
