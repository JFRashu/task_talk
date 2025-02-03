import React, { useState } from 'react';
import { MessageSquare, Paperclip, ChevronUp, ChevronDown, Image, X } from 'lucide-react';

const ChatHeader = ({
    tasks,
    selectedChat,
    showAttachments,
    setShowAttachments,
    getAllAttachments,
    handleAttachmentClick
}) => {
    const [showTaskInfo, setShowTaskInfo] = useState(false);
    const selectedTask = tasks.find(t => t.id === selectedChat);

    const getStatusColor = (status) => {
        switch (status) {
            case 'in-progress':
                return 'text-yellow-500';
            case 'pending':
                return 'text-red-500';
            case 'completed':
                return 'text-green-500';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <div className="p-4 bg-gray-800 border-b border-gray-200 shadow-sm relative">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    
                        <MessageSquare 
                         onClick={() => setShowTaskInfo(!showTaskInfo)}   className="cursor-pointer w-6 h-6 text-blue-600 group-hover:text-white transition-colors" 
                        />
                   
                    <h2 className="text-xl font-bold text-white">
                        {selectedTask?.title}
                    </h2>
                </div>
                <button
                    onClick={() => setShowAttachments(!showAttachments)}
                    className="flex items-center gap-2 px-4 py-2 text-blue-500 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                    <Paperclip className="w-4 h-4" />
                    Attachments
                    {showAttachments ? (
                        <ChevronUp className="w-4 h-4" />
                    ) : (
                        <ChevronDown className="w-4 h-4" />
                    )}
                </button>
            </div>

            {/* Task Info Popup */}
            {showTaskInfo && selectedTask && (
                <div className="absolute left-4 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-20">
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Task Information
                            </h3>
                            <button 
                                onClick={() => setShowTaskInfo(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <div className="text-sm font-medium text-gray-500">Title</div>
                                <div className="text-gray-800">{selectedTask.title}</div>
                            </div>
                            <div>
                                <div className="text-sm font-medium text-gray-500">Status</div>
                                <div className={`capitalize ${getStatusColor(selectedTask.status)}`}>
                                    {selectedTask.status}
                                </div>
                            </div>
                            <div>
                                <div className="text-sm font-medium text-gray-500">Task ID</div>
                                <div className="text-gray-800">#{selectedTask.id}</div>
                            </div>
                            <div>
                                <div className="text-sm font-medium text-gray-500">Group ID</div>
                                <div className="text-gray-800">#{selectedTask.gid}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Existing Attachments Popup */}
            {showAttachments && (
                <div className="absolute right-4 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-10">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            All Attachments
                        </h3>
                        <div className="space-y-3 max-h-96 overflow-y-auto">
                            {getAllAttachments().map((attachment, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                                    onClick={() => handleAttachmentClick(attachment)}
                                >
                                    {attachment.type === 'image' ? (
                                        <Image className="w-5 h-5 text-blue-500" />
                                    ) : (
                                        <Paperclip className="w-5 h-5 text-blue-500" />
                                    )}
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-gray-800">
                                            {attachment.name}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {attachment.sender} • {attachment.timestamp}
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-400">
                                        {attachment.size}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatHeader;