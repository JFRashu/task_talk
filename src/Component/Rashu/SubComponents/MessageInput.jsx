import React from 'react';
import { Paperclip, Image, Send } from 'lucide-react';

const MessageInput = ({ 
    message, 
    setMessage, 
    handleFileAttachment, 
    handleSendMessage 
}) => {
    return (
        <div className="p-0 bg-gray-800">
            <div className="flex bg-transparent gap-2">
                <div className="flex-1 flex items-center gap-2 bg-gray-800 rounded-lg px-2 py-2">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="input input-bordered input-info text-gray-50 flex-1 bg-transparent focus:outline"
                    />
                    <div className="flex items-center gap-2">
                        <label className="cursor-pointer text-gray-400 hover:text-blue-500 transition-colors">
                            <input
                                type="file"
                                multiple
                                onChange={handleFileAttachment}
                                className="hidden"
                            />
                            <Paperclip className="w-5 h-5" />
                        </label>
                        <label className="cursor-pointer text-gray-400 hover:text-blue-500 transition-colors">
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleFileAttachment}
                                className="hidden"
                            />
                            <Image className="w-5 h-5" />
                        </label>
                    </div>
                </div>
                <button 
                    onClick={handleSendMessage}
                    className="p-0 bg-transparent text-white rounded-lg hover:bg-gray-800 
                              focus:outline-none focus:ring-2 focus:ring-blue-500 
                              justify-center min-w-[60px]"
                >
                    <Send className="w-6 h-6 transform rotate-25" />
                </button>
            </div>
        </div>
    );
};

export default MessageInput;