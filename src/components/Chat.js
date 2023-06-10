import React, { useState, useEffect } from "react";
import axios from "axios";

import '../styles/chat.css';

const Chatting = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [chatMates, setChatMates] = useState([]);
  const [selectedChatMate, setSelectedChatMate] = useState(null);
  const [isChatHidden, setIsChatHidden] = useState(false);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("/api/messages");
      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch chat messages from Django backend
    fetchMessages();

    // Fetch chat mates from Django backend
    const fetchChatMates = async () => {
      try {
        const response = await axios.get("/api/chatmates");
        setChatMates(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChatMates();
  }, []);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const sendMessage = async () => {
    try {
      const formData = new FormData();
      formData.append("text", inputText);
      formData.append("image", selectedImage);

      await axios.post("/api/messages", formData);

      // Clear input fields and fetch updated messages
      setInputText("");
      setSelectedImage(null);
      fetchMessages();
    } catch (error) {
      console.log(error);
    }
  };

  const selectChatMate = (chatMate) => {
    setSelectedChatMate(chatMate);
  };

  const toggleChatVisibility = () => {
    setIsChatHidden(!isChatHidden);
  };

  return (
    <div className="chat-container">
      <div className="chat-mates-container">
        {chatMates.map((chatMate) => (
          <div
            key={chatMate.id}
            className={`chat-mate ${
              selectedChatMate && selectedChatMate.id === chatMate.id ? "selected" : ""
            }`}
            onClick={() => selectChatMate(chatMate)}
          >
            <img src={chatMate.profilePicture} alt="Profile" />
            <p>{chatMate.username}</p>
            <p>{chatMate.university}</p>
          </div>
        ))}
      </div>
      <div className={`chat-window ${isChatHidden ? "hidden" : ""}`}>
        {!isChatHidden && selectedChatMate && (
          <div className="chat-content">
            <div className="chat-header">
              <img src={selectedChatMate.profilePicture} alt="Profile" />
              <p>{selectedChatMate.username}</p>
              <p>{selectedChatMate.university}</p>
              <button onClick={toggleChatVisibility}>Hide Chat</button>
            </div>
            <div className="messages">
              {messages.map((message) => (
                <div key={message.id} className="message">
                  <p>
                    {message.sender}: {message.text}
                  </p>
                  {message.image && <img src={message.image} alt="Message" />}
                </div>
              ))}
            </div>
            <div className="input-section">
              <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
              />
              <input type="file" onChange={handleImageChange} />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        )}
        {isChatHidden && (
          <div className="hidden-chat">
            <button onClick={toggleChatVisibility}>Show Chat</button>
            <button>Block User</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatting;
