import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null); // Create a ref for the message end

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');
            // Simulate a response from the chatbot
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: "This is a response from the bot.", sender: 'bot' },
                ]);
            }, 1000);
        }
    };

    useEffect(() => {
        // Scroll to the bottom of the messages whenever they change
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex flex-col h-full">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-100 rounded-lg shadow-inner">
                {messages.length === 0 ? (
                    <div className="text-center text-gray-500">No messages yet. Start the conversation!</div>
                ) : (
                    messages.map((msg, index) => (
                        <div key={index} className={`my-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                            <span className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-black'}`}>
                                {msg.text}
                            </span>
                        </div>
                    ))
                )}
                {/* Empty div for scrolling */}
                <div ref={messagesEndRef} /> {/* This div allows scrolling to the bottom */}
            </div>

            {/* Input Area */}
            <div className="fixed bottom-0 left-[60px] right-0 bg-white border-t border-gray-300 p-4">
                <form onSubmit={handleSendMessage} className="flex">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-700"
                        placeholder="Type your message..."
                    />
                    <button type="submit" className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-blue-600">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chatbot;