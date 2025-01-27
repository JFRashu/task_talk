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
        <div className="tw-flex-1 tw-overflow-y-auto tw-p-4 tw-space-y-4 tw-bg-black">
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
                        className={`tw-flex ${message.senderId == currentUser  ? 'tw-chat tw-chat-end' : 'tw-chat tw-chat-start'}`}
                    >
                        <div
                            className={`tw-max-w-[70%] tw-chat-bubble tw-p-4 ${
                                message.senderId == currentUser 
                                    ? 'tw-bg-blue-700 tw-ml-auto' 
                                    : 'tw-bg-orange-700 tw-mr-auto'
                            }`}
                        >
                            <div className="tw-font-medium tw-text-sm tw-mb-1 tw-text-white">
                                {message.sender}
                            </div>

                            {message.text && (
                                <div className="tw-text-sm tw-text-white">
                                    {message.text}
                                </div>
                            )}

                            

                            <div className={`tw-text-xs tw-mt-2 ${
                                message.senderId == currentUser 
                                    ? 'tw-text-blue-200' 
                                    : 'tw-text-orange-200'
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