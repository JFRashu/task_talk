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
                return 'tw-text-yellow-500';
            case 'pending':
                return 'tw-text-red-500';
            case 'completed':
                return 'tw-text-green-500';
            default:
                return 'tw-text-gray-500';
        }
    };

    return (
        <div className="tw-p-4 tw-bg-gray-800 tw-border-b tw-border-gray-200 tw-shadow-sm tw-relative">
            <div className="tw-flex tw-items-center tw-justify-between">
                <div className="tw-flex tw-items-center tw-gap-3">
                    
                        <MessageSquare 
                         onClick={() => setShowTaskInfo(!showTaskInfo)}   className="tw-cursor-pointer tw-w-6 tw-h-6 tw-text-blue-600 group-hover:tw-text-white tw-transition-colors" 
                        />
                   
                    <h2 className="tw-text-xl tw-font-bold tw-text-white">
                        {selectedTask?.title}
                    </h2>
                </div>
                <button
                    onClick={() => setShowAttachments(!showAttachments)}
                    className="tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-text-blue-500 tw-font-medium tw-rounded-lg hover:tw-bg-blue-50 tw-transition-colors"
                >
                    <Paperclip className="tw-w-4 tw-h-4" />
                    Attachments
                    {showAttachments ? (
                        <ChevronUp className="tw-w-4 tw-h-4" />
                    ) : (
                        <ChevronDown className="tw-w-4 tw-h-4" />
                    )}
                </button>
            </div>

            {/* Task Info Popup */}
            {showTaskInfo && selectedTask && (
                <div className="tw-absolute tw-left-4 tw-mt-2 tw-w-80 tw-bg-white tw-rounded-lg tw-shadow-xl tw-border tw-border-gray-200 tw-z-20">
                    <div className="tw-p-4">
                        <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
                            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-800">
                                Task Information
                            </h3>
                            <button 
                                onClick={() => setShowTaskInfo(false)}
                                className="tw-text-gray-500 hover:tw-text-gray-700"
                            >
                                <X className="tw-w-5 tw-h-5" />
                            </button>
                        </div>
                        <div className="tw-space-y-3">
                            <div>
                                <div className="tw-text-sm tw-font-medium tw-text-gray-500">Title</div>
                                <div className="tw-text-gray-800">{selectedTask.title}</div>
                            </div>
                            <div>
                                <div className="tw-text-sm tw-font-medium tw-text-gray-500">Status</div>
                                <div className={`tw-capitalize ${getStatusColor(selectedTask.status)}`}>
                                    {selectedTask.status}
                                </div>
                            </div>
                            <div>
                                <div className="tw-text-sm tw-font-medium tw-text-gray-500">Task ID</div>
                                <div className="tw-text-gray-800">#{selectedTask.id}</div>
                            </div>
                            <div>
                                <div className="tw-text-sm tw-font-medium tw-text-gray-500">Group ID</div>
                                <div className="tw-text-gray-800">#{selectedTask.gid}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Existing Attachments Popup */}
            {showAttachments && (
                <div className="tw-absolute tw-right-4 tw-mt-2 tw-w-80 tw-bg-white tw-rounded-lg tw-shadow-xl tw-border tw-border-gray-200 tw-z-10">
                    <div className="tw-p-4">
                        <h3 className="tw-text-lg tw-font-semibold tw-text-gray-800 tw-mb-4">
                            All Attachments
                        </h3>
                        <div className="tw-space-y-3 tw-max-h-96 tw-overflow-y-auto">
                            {getAllAttachments().map((attachment, index) => (
                                <div
                                    key={index}
                                    className="tw-flex tw-items-center tw-gap-3 tw-p-3 tw-rounded-lg tw-bg-gray-50 hover:tw-bg-gray-100 tw-transition-colors tw-cursor-pointer"
                                    onClick={() => handleAttachmentClick(attachment)}
                                >
                                    {attachment.type === 'image' ? (
                                        <Image className="tw-w-5 tw-h-5 tw-text-blue-500" />
                                    ) : (
                                        <Paperclip className="tw-w-5 tw-h-5 tw-text-blue-500" />
                                    )}
                                    <div className="tw-flex-1">
                                        <div className="tw-text-sm tw-font-medium tw-text-gray-800">
                                            {attachment.name}
                                        </div>
                                        <div className="tw-text-xs tw-text-gray-500">
                                            {attachment.sender} • {attachment.timestamp}
                                        </div>
                                    </div>
                                    <span className="tw-text-xs tw-text-gray-400">
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