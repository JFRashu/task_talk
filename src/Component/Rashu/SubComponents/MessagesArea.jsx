import React from 'react';
import { Paperclip } from 'lucide-react';

const MessagesArea = ({ 
    chats, 
    currentUser,
    selectedChat, 
   
}) => {
    // Combine and sort messages
    const combinedMessages = [
        ...(chats[selectedChat] || [])
    ].sort((a, b) => Number(a.timestamp) - Number(b.timestamp));

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black">
            {combinedMessages.map((message) => {
                const formattedTime = new Date(Number(message.timestamp)).toLocaleString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true
                });

                return (
                    <div
                        key={message.id || Math.random()}
                        className={`flex ${message.senderId == currentUser  ? 'chat chat-end' : 'chat chat-start'}`}
                    >
                        <div
                            className={`max-w-[70%] chat-bubble p-4 ${
                                message.senderId == currentUser 
                                    ? 'bg-blue-700 ml-auto' 
                                    : 'bg-orange-700 mr-auto'
                            }`}
                        >
                            <div className="font-medium text-sm mb-1 text-white">
                                {message.sender}
                            </div>

                            {message.text && (
                                <div className="text-sm text-white">
                                    {message.text}
                                </div>
                            )}

                            

                            <div className={`text-xs mt-2 ${
                                message.senderId == currentUser 
                                    ? 'text-blue-200' 
                                    : 'text-orange-200'
                            }`}>
                                {formattedTime}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MessagesArea;