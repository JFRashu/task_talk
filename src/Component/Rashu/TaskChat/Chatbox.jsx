import React, { useState } from 'react';
import { MessageSquare, CheckCircle, Clock, AlertTriangle, Paperclip, Image, Send, X, ChevronDown, ChevronUp } from 'lucide-react';

const Chatbox = () => {
    const [selectedChat, setSelectedChat] = useState(1);
    const [attachments, setAttachments] = useState([]);
    const [message, setMessage] = useState('');
    const [showAttachments, setShowAttachments] = useState(false);
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

    const chats = {
        "1": [
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
                    {
                        type: 'image',
                        name: 'weather-demo.png',
                        size: '3.1 MB',
                        url: 'https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY'
                    }]
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
                type: "received",
                attachments: [
                    { type: 'image', name: 'auth-flow.png', size: '2.4 MB' },
                    { type: 'file', name: 'api-specs.pdf', size: '1.2 MB' }
                ]
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

    const handleSendMessage = () => {
        // Handle send message logic here
        console.log('Message:', message);
        setMessage('')
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


    const getAllAttachments = () => {
        const currentChat = chats[selectedChat] || [];
        return currentChat.reduce((acc, message) => {
            if (message.attachments && message.attachments.length > 0) {
                return [...acc, ...message.attachments.map(attachment => ({
                    ...attachment,
                    sender: message.sender,
                    timestamp: message.timestamp
                }))];
            }
            return acc;
        }, []);
    };


    return (
        <div className="tailwind-scope">
            <div className="tw-flex tw-h-screen tw-bg-gray-100">
                {/* Task List Sidebar */}
                <div className="tw-w-1/3 tw-bg-teal-950 tw-border-r tw-border-gray-200 tw-overflow-y-auto tw-shadow-lg">
                    <div className="tw-p-3 tw-border-b tw-border-gray-200 tw-bg-indigo-950">
                        <h2 className="tw-text-2xl tw-font-bold tw-text-white">Tasks</h2>
                    </div>
                    <div className="tw-divide-y tw-divide-gray-300">
                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                onClick={() => setSelectedChat(task.id)}
                                className={`tw-p-5  tw-shadow-md tw-transition-all tw-duration-300 tw-cursor-pointer
                    ${selectedChat === task.id
                                        ? 'tw-bg-black tw-text-white tw-border-l-4 tw-border-gray-700 tw-shadow-lg'  // Selected style
                                        : 'tw-bg-slate-700 tw-text-white hover:tw-bg-gray-100 hover:tw-shadow-lg hover:tw-text-gray-950'  // Normal and hover styles
                                    }`}
                            >
                                <div className="tw-flex tw-items-center tw-justify-between">
                                    <h3 className="tw-font-semibold tw-text-lg">{task.title}</h3>
                                    {getStatusIcon(task.status)}
                                </div>
                                <p className="tw-text-sm tw-text-gray-600">{task.description}</p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Chat Area */}
                <div className="tw-flex-1 tw-flex tw-flex-col tw-bg-gray-50">
                    {/* Chat Header */}
                    <div className="tw-p-4 tw-bg-gray-800 tw-border-b tw-border-gray-200 tw-shadow-sm">
                        <div className="tw-flex tw-items-center tw-justify-between">
                            <div className="tw-flex tw-items-center tw-gap-3">
                                <MessageSquare className="tw-w-6 tw-h-6 tw-text-blue-500" />
                                <h2 className="tw-text-xl tw-font-bold tw-text-white">
                                    {tasks.find(t => t.id === selectedChat)?.title}
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

                        {/* Attachments Dropdown */}
                        {showAttachments && (
                            <div className="tw-absolute tw-right-4 tw-mt-2 tw-w-80 tw-bg-white tw-rounded-lg tw-shadow-xl tw-border tw-border-gray-200 tw-z-10">
                                <div className="tw-p-4">
                                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-800 tw-mb-4">All Attachments</h3>
                                    <div className="tw-space-y-3 tw-max-h-96 tw-overflow-y-auto">
                                        {getAllAttachments().map((attachment, index) => (
                                            <div
                                                key={index}
                                                className="tw-flex tw-items-center tw-gap-3 tw-p-3 tw-rounded-lg tw-bg-gray-50 hover:tw-bg-gray-100 tw-transition-colors"
                                            >
                                                {attachment.type === 'image' ? (
                                                    <Image className="tw-w-5 tw-h-5 tw-text-blue-500" />
                                                ) : (
                                                    <Paperclip className="tw-w-5 tw-h-5 tw-text-blue-500" />
                                                )}
                                                <div className="tw-flex-1">
                                                    <div className="tw-text-sm tw-font-medium tw-text-gray-800">{attachment.name}</div>
                                                    <div className="tw-text-xs tw-text-gray-500">
                                                        {attachment.sender} • {attachment.timestamp}
                                                    </div>
                                                </div>
                                                <span className="tw-text-xs tw-text-gray-400">{attachment.size}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Messages Area */}
                    <div className="tw-flex-1 tw-overflow-y-auto tw-p-4 tw-space-y-4 tw-bg-black">
                        {chats[selectedChat]?.map((message) => (
                            <div
                                key={message.id}
                                className={`tw-flex ${message.type === 'sent' ? 'tw-chat tw-chat-end' : 'tw-chat tw-chat-start'}`}
                            >
                                <div
                                    className={`tw-max-w-[70%] tw-chat-bubble  tw-p-4 ${message.type === 'sent'
                                        ? 'tw-bg-blue-600 tw-ml-auto'
                                        : 'tw-bg-orange-600 tw-mr-auto'
                                        }`}
                                >
                                    <div className="tw-font-medium tw-text-sm tw-mb-1 tw-text-white">
                                        {message.sender}
                                    </div>
                                    <div className="tw-text-sm tw-text-white">
                                        {message.text}
                                    </div>

                                    {message.attachments && message.attachments.length > 0 && (
                                        <div className="tw-mt-3 tw-space-y-2">
                                            {message.attachments.map((attachment, index) => (
                                                <div key={index}>
                                                    {attachment.type === 'image' ? (
                                                        <div className="tw-w-full">
                                                            <img
                                                                src={attachment.url}
                                                                alt={attachment.name}
                                                                className="tw-w-full tw-rounded-md tw-max-h-96 tw-object-contain"
                                                            />
                                                            <div className="tw-flex tw-justify-between tw-items-center tw-mt-1">

                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-md tw-bg-opacity-50">
                                                            <Paperclip className="tw-w-4 tw-h-4 tw-text-white" />
                                                            <span className="tw-text-white tw-text-xs">{attachment.name}</span>
                                                            <span className="tw-text-xs tw-text-gray-200">({attachment.size})</span>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className={`tw-text-xs tw-mt-2 ${message.type === 'sent' ? 'tw-text-blue-200' : 'tw-text-orange-200'
                                        }`}>
                                        {message.timestamp}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Message Input Area */}
                    <div className="tw-p-0  tw-bg-gray-800  ">
                        <div className="tw-flex tw-bg-transparent tw-gap-2">
                            <div className="tw-flex-1 tw-flex tw-items-center tw-gap-2 tw-bg-gray-800 tw-rounded-lg tw-px-2 tw-py-2">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="tw-input tw-input-bordered tw-input-info tw-text-gray-50  tw-flex-1 tw-bg-transparent focus:tw-outline"
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
                            <button onClick={handleSendMessage}
                                className="tw-p-0 tw-bg-transparent tw-text-white tw-rounded-lg hover:tw-bg-gray-800 
                                          focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 
                                          
                                          tw-justify-center tw-min-w-[60px]"
                            >
                                <Send className="tw-w-10- tw-h-10 tw-transform tw-rotate-25" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbox;