import React, { useState } from 'react';
import { MessageSquare, CheckCircle, Clock, AlertTriangle, Paperclip, Image, Send, X } from 'lucide-react';

const Chatbox = () => {
    const [selectedChat, setSelectedChat] = useState(1);
    const [attachments, setAttachments] = useState([]);
    const [message, setMessage] = useState('');

    const tasks = [
        {
            id: 1,
            title: "Complete API Documentation",
            status: "in-progress",
            priority: "high",
            assignee: "Sarah Chen",
            dueDate: "2025-02-01"
        },
        {
            id: 2,
            title: "Review Pull Requests",
            status: "pending",
            priority: "medium",
            assignee: "Mike Johnson",
            dueDate: "2025-01-25"
        },
        {
            id: 3,
            title: "Security Audit",
            status: "completed",
            priority: "critical",
            assignee: "Lisa Wong",
            dueDate: "2025-01-20"
        }
    ];

    const chats = { "1": [
        {
            id: 1,
            sender: "Sarah Chen",
            text: "I've started working on the API endpoints documentation",
            timestamp: "09:30 AM",
            type: "received",
            attachments: []
        },
        {
            id: 2,
            sender: "John Doe",
            text: "Great! Make sure to include authentication examples",
            timestamp: "09:35 AM",
            type: "sent",
            attachments: [
                { type: 'image', name: 'auth-flow.png', size: '2.4 MB' }
            ]
        },

        {
            id: 3,
            sender: "Sarah Chen",
            text: "Will do. Should we use Swagger for the interactive documentation?",
            timestamp: "09:40 AM",
            type: "received"
        },
        {
            id: 4,
            sender: "Sarah Chen",
            text: "Will do. Should we use Swagger for the interactive documentation?",
            timestamp: "09:40 AM",
            type: "received"
        }, {
            id: 5,
            sender: "Sarah Chen",
            text: "Will do. Should we use Swagger for the interactive documentation?",
            timestamp: "09:40 AM",
            type: "received"
        }, {
            id: 6,
            sender: "Sarah Chen",
            text: "Will do. Should we use Swagger for the interactive documentation?",
            timestamp: "09:40 AM",
            type: "received"
        }
    ],
        "2": [
            {
                id: 1,
                sender: "Mike Johnson",
                text: "I've submitted the PR for the new feature",
                timestamp: "10:15 AM",
                type: "received"
            },
            {
                id: 2,
                sender: "John Doe",
                text: "Looking at it now. Initial feedback: we need more test coverage",
                timestamp: "10:20 AM",
                type: "sent"
            }
        ],
            "3": [
                {
                    id: 1,
                    sender: "Lisa Wong",
                    text: "Security audit report is ready for review",
                    timestamp: "11:00 AM",
                    type: "received"
                },
                {
                    id: 2,
                    sender: "John Doe",
                    text: "Any critical findings we should address immediately?",
                    timestamp: "11:05 AM",
                    type: "sent"
                },
                {
                    id: 3,
                    sender: "Lisa Wong",
                    text: "Yes, found 2 high-priority vulnerabilities. Details in the report.",
                    timestamp: "11:10 AM",
                    type: "received"
                }
            ]
};


const getPriorityColor = (priority) => {
    switch (priority) {
        case 'critical':
            return 'tw-bg-red-100 tw-text-red-800';
        case 'high':
            return 'tw-bg-orange-100 tw-text-orange-800';
        case 'medium':
            return 'tw-bg-yellow-100 tw-text-yellow-800';
        default:
            return 'tw-bg-gray-100 tw-text-gray-800';
    }
};

const getStatusIcon = (status) => {
    switch (status) {
        case 'completed':
            return <CheckCircle className="tw-w-4 tw-h-4 tw-text-green-500" />;
        case 'in-progress':
            return <Clock className="tw-w-4 tw-h-4 tw-text-blue-500" />;
        case 'pending':
            return <AlertTriangle className="tw-w-4 tw-h-4 tw-text-yellow-500" />;
        default:
            return null;
    }
};

const handleFileAttachment = (event) => {
    const files = Array.from(event.target.files);
    setAttachments([...attachments, ...files.map(file => ({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
        type: file.type.startsWith('image/') ? 'image' : 'file'
    }))]);
};

const removeAttachment = (index) => {
    setAttachments(attachments.filter((_, i) => i !== index));
};

return (
    <div className="tailwind-scope">
        <div className="tw-flex tw-h-screen tw-bg-gray-100">
            {/* Task List Sidebar */}
            <div className="tw-w-1/3 tw-bg-white tw-border-r tw-border-gray-200 tw-overflow-y-auto tw-shadow-lg">
                <div className="tw-p-4 tw-border-b tw-border-gray-200 tw-bg-gray-50">
                    <h2 className="tw-text-xl tw-font-bold tw-text-gray-800">Tasks</h2>
                </div>
                <div className="tw-divide-y tw-divide-gray-200">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            onClick={() => setSelectedChat(task.id)}
                            className={`tw-p-4 tw-cursor-pointer hover:tw-bg-gray-50 tw-transition-colors ${selectedChat === task.id ? 'tw-bg-blue-50 tw-border-l-4 tw-border-blue-500' : ''
                                }`}
                        >
                            <div className="tw-flex tw-items-center tw-justify-between tw-mb-2">
                                <h3 className="tw-font-medium tw-text-gray-900">{task.title}</h3>
                                {getStatusIcon(task.status)}
                            </div>
                            <div className="tw-flex tw-items-center tw-gap-2 tw-mb-2">
                                <span className={`tw-px-2 tw-py-1 tw-rounded-full tw-text-xs tw-font-medium ${getPriorityColor(task.priority)}`}>
                                    {task.priority}
                                </span>
                                <span className="tw-text-sm tw-text-gray-500">{task.assignee}</span>
                            </div>
                            <div className="tw-text-xs tw-text-gray-500">
                                Due: {new Date(task.dueDate).toLocaleDateString()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="tw-flex-1 tw-flex tw-flex-col tw-bg-black">
                {/* Chat Header */}
                <div className="tw-p-4 tw-bg-white tw-border-b tw-border-gray-200 tw-shadow-sm">
                    <div className="tw-flex tw-items-center tw-gap-3">
                        <MessageSquare className="tw-w-6 tw-h-6 tw-text-blue-500" />
                        <h2 className="tw-text-xl tw-font-bold tw-text-gray-800">
                            {tasks.find(t => t.id === selectedChat)?.title}
                        </h2>
                    </div>
                </div>

                {/* Messages */}
                <div className="tw-flex-1 tw-overflow-y-auto tw-p-4">
                    <div className="tw-space-y-4">
                        {chats[selectedChat]?.map((message) => (
                            <div
                                key={message.id}
                                className={`tw-flex ${message.type === 'sent' ? 'tw-justify-end' : 'tw-justify-start'
                                    }`}
                            >
                                <div
                                    className={`tw-max-w-[70%] tw-rounded-lg tw-p-4 tw-shadow-sm ${message.type === 'sent'
                                            ? 'tw-bg-blue-500 tw-text-white'
                                            : 'tw-bg-orange-500 tw-text-white'
                                        }`}
                                >
                                    <div className="tw-font-medium tw-text-sm tw-mb-1">
                                        {message.sender}
                                    </div>
                                    <div className="tw-text-sm">{message.text}</div>

                                    {/* Message Attachments */}
                                    {message.attachments && message.attachments.length > 0 && (
                                        <div className="tw-mt-2 tw-space-y-2">
                                            {message.attachments.map((attachment, index) => (
                                                <div
                                                    key={index}
                                                    className={`tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded ${message.type === 'sent' ? 'tw-bg-blue-400' : 'tw-bg-gray-100'
                                                        }`}
                                                >
                                                    {attachment.type === 'image' ? (
                                                        <Image className="tw-w-4 tw-h-4" />
                                                    ) : (
                                                        <Paperclip className="tw-w-4 tw-h-4" />
                                                    )}
                                                    <span className="tw-text-xs">{attachment.name}</span>
                                                    <span className="tw-text-xs tw-opacity-75">({attachment.size})</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div
                                        className={`tw-text-xs tw-mt-2 ${message.type === 'sent' ? 'tw-text-blue-100' : 'tw-text-orange-100'
                                            }`}
                                    >
                                        {message.timestamp}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Attachment Preview */}
                {attachments.length > 0 && (
                    <div className="tw-p-2 tw-bg-gray-50 tw-border-t tw-border-gray-200">
                        <div className="tw-flex tw-flex-wrap tw-gap-2">
                            {attachments.map((file, index) => (
                                <div key={index} className="tw-flex tw-items-center tw-gap-2 tw-bg-white tw-rounded-lg tw-p-2 tw-shadow-sm">
                                    {file.type === 'image' ? (
                                        <Image className="tw-w-4 tw-h-4 tw-text-blue-500" />
                                    ) : (
                                        <Paperclip className="tw-w-4 tw-h-4 tw-text-blue-500" />
                                    )}
                                    <span className="tw-text-sm">{file.name}</span>
                                    <button
                                        onClick={() => removeAttachment(index)}
                                        className="tw-text-gray-500 hover:tw-text-red-500"
                                    >
                                        <X className="tw-w-4 tw-h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Message Input */}
                <div className="tw-p-4 tw-bg-white tw-border-t tw-border-gray-200">
                    <div className="tw-flex tw-gap-2">
                        <div className="tw-flex-1 tw-flex tw-items-center tw-gap-2 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 tw-px-4 tw-py-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="tw-input tw-input-bordered tw-input-info  tw-flex-1 tw-bg-transparent focus:tw-outline"
                            />
                            <div className="tw-flex tw-items-center tw-gap-2">
                                <label className="tw-cursor-pointer tw-text-gray-500 hover:tw-text-blue-500">
                                    <input
                                        type="file"
                                        multiple
                                        onChange={handleFileAttachment}
                                        className="tw-hidden"
                                    />
                                    <Paperclip className="tw-w-5 tw-h-5" />
                                </label>
                                <label className="tw-cursor-pointer tw-text-gray-500 hover:tw-text-blue-500">
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
                        <button className="tw-p-2 tw-bg-blue-500 tw-text-white tw-rounded-lg hover:tw-bg-blue-600 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-ring-offset-2 tw-transition-colors">
                            <Send className="tw-w-10 tw-h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Chatbox;