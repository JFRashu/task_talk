import React from 'react';
import { Paperclip, Image, Send } from 'lucide-react';

const MessageInput = ({ 
    message, 
    setMessage, 
    handleFileAttachment, 
    handleSendMessage 
}) => {
    return (
        <div className="tw-p-0 tw-bg-gray-800">
            <div className="tw-flex tw-bg-transparent tw-gap-2">
                <div className="tw-flex-1 tw-flex tw-items-center tw-gap-2 tw-bg-gray-800 tw-rounded-lg tw-px-2 tw-py-2">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="tw-input tw-input-bordered tw-input-info tw-text-gray-50 tw-flex-1 tw-bg-transparent focus:tw-outline"
                    />
                    <div className="tw-flex tw-items-center tw-gap-2">
                        <label className="tw-cursor-pointer tw-text-gray-400 hover:tw-text-blue-500 tw-transition-colors">
                            <input
                                type="file"
                                multiple
                                onChange={handleFileAttachment}
                                className="tw-hidden"
                            />
                            <Paperclip className="tw-w-5 tw-h-5" />
                        </label>
                        <label className="tw-cursor-pointer tw-text-gray-400 hover:tw-text-blue-500 tw-transition-colors">
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleFileAttachment}
                                className="tw-hidden"
                            />
                            <Image className="tw-w-5 tw-h-5" />
                        </label>
                    </div>
                </div>
                <button 
                    onClick={handleSendMessage}
                    className="tw-p-0 tw-bg-transparent tw-text-white tw-rounded-lg hover:tw-bg-gray-800 
                              focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 
                              tw-justify-center tw-min-w-[60px]"
                >
                    <Send className="tw-w-6 tw-h-6 tw-transform tw-rotate-25" />
                </button>
            </div>
        </div>
    );
};

export default MessageInput;