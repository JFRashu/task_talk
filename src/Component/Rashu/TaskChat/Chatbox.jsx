import  { useState } from 'react';

import { CheckCircle, Clock, AlertTriangle,  Plus } from 'lucide-react';
import NewTaskModal from '../CreateNewTask/NewTaskModal';
import GroupInfoModal from '../GroupInfo/GroupInfoModal';
import TaskHeader from '../SubComponents/TaskHeader';
import TaskList from '../SubComponents/TaskList';
import ChatHeader from '../SubComponents/ChatHeader';
import MessagesArea from '../SubComponents/MessagesArea';
import MessageInput from '../SubComponents/MessageInput';

const Chatbox = () => {
    const [selectedChat, setSelectedChat] = useState(1);
    const [attachments, setAttachments] = useState([]);
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isGroupInfoOpen, setIsGroupInfoOpen] = useState(false);


    const [showAttachments, setShowAttachments] = useState(false);
    const groupData = {
        name: "Project Management Group",
        createdDate: "January 15, 2025",
        activeProjects: 5,
        description: "Collaborative team focused on software development and project management tasks.",
        members: [
            { name: "Sarah Chen", role: "Admin" },
            { name: "Mike Johnson", role: "Member" },
            { name: "Lisa Wong", role: "Member" },
            { name: "John Doe", role: "Member" }
        ]
    }
    const tasks = [
        {
            gid:1,
            id: 1,
            title: "Complete API Documentation",
            status: "in-progress",
           
        },
        {
            gid:1,
            id: 2,
            title: "Review Pull Requests",
            status: "pending",
           
        },
        {
            gid:1,
            id: 3,
            title: "Security Audit",
            status: "completed",
            
        }
    ];

    const chats = {
        1: [
            {
                id:1,
                gid:1,
                tid:1,
                sender: "Sarah Chen",
                text: "I've started working on the API endpoints documentation",
                timestamp: 1737605400000,
                type: "received",
                attachments: []
            },
            {
                id: 2,
                gid:1,
                tid:1,
                sender: "John Doe",
                text: "Great! Make sure to include authentication examples",
                timestamp: 1737605400000,
                type: "sent"
            },
            {
                id: 3,
                gid:1,
                tid:1,
                sender: "Sarah Chen",
                text: "Will do. Should we use Swagger for the interactive documentation?",
                timestamp: 1737605400100,
                type: "received"
            }
        ],
        2: [
            {
                id: 4,
                gid:1,
                tid:2,
                sender: "Mike Johnson",
                text: "I've submitted the PR for the new feature",
                timestamp: 1737605460000,
                type: "received"
            },
            {
                id: 5,
                gid:1,
                tid:2,
                sender: "John Doe",
                text: "Looking at it now. Initial feedback: we need more test coverage",
                timestamp: 1737605500000,
                type: "sent"
            }
        ],
        3: [
            {
                id: 6,
                gid:1,
                tid:3,
                sender: "Lisa Wong",
                text: "Security audit report is ready for review",
                timestamp: 1737605400000,
                type: "received"
            },
            {
                id: 7,
                gid:1,
                tid:3,
                sender: "John Doe",
                text: "Any critical findings we should address immediately?",
                timestamp: 1737605400000,
                type: "sent"
            },
            {
                id: 8,
                gid:1,
                tid:3,
                sender: "Lisa Wong",
                text: "Yes, found 2 high-priority vulnerabilities. Details in the report.",
                timestamp: 1737605400000,
                type: "received"
            }
        ]
    };

    const attachmentDummy = {
        1: [
            {
                id: 9,
                gid:1,
                tid:3,
                sender: "Sarah Chen",
                timestamp: 1737605400000,
                type: "received",
                attachments: []
            },
            {
                id: 10,
                gid:1,
                tid:3,
                sender: "John Doe",
                timestamp: 1737605202000,
                type: "sent",
                attachments: [
                    {
                        type: 'image',
                        name: 'weather-demo.png',
                        size: '3.1 MB',
                        url: 'https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY'
                    }
                ]
            },
            {
                id: 11,
                gid:1,
                tid:3,
                sender: "Sarah Chen",
                timestamp: 1737606400000,
                type: "received",
                attachments: [
                    { type: 'file', name: 'api-specs.pdf', size: '1.2 MB' },
                   
                ]
            },
            {
                id: 12,
                gid:1,
                tid:3,
                sender: "Sarah Chen",
                timestamp: 1737615400000,
                type: "received",
                attachments: [
                    { type: 'image', name: 'auth-flow.png', size: '2.4 MB', url: 'https://picsum.photos/200/300' }
                ]
            },
            {
                id: 13,
                gid:1,
                tid:3,
                sender: "Ryan",
                timestamp: 1737615400000,
                type: "received",
                attachments: [
                    
                     { type: 'file', name: 'api-specs.pdf', size: '1.2 MB', url: 'https://www.orimi.com/pdf-test.pdf' }
                ]
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


    const handleAttachmentClick = (attachment) => {
        window.open(attachment.url, '_blank');
    };

    const handleFileAttachment = (event) => {
        const files = Array.from(event.target.files);
        setAttachments([...attachments, ...files.map(file => ({
            name: file.name,
            size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
            type: file.type.startsWith('image/') ? 'image' : 'file'
        }))]);
    };

    const convertTime = (message) => {
        const formattedTime = new Date(Number(message.timestamp)).toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });

        return formattedTime;

    };

    const getAllAttachments = () => {
        const currentChat = attachmentDummy[selectedChat] || [];
        return currentChat.reduce((acc, message) => {
            if (message.attachments && message.attachments.length > 0) {
                return [...acc, ...message.attachments.map(attachment => ({
                    ...attachment,
                    sender: message.sender,
                    timestamp: convertTime(message)
                }))];
            }
            return acc;
        }, []);
    };

    const handleCreateTask = () => {

        setIsModalOpen(false);
    };




    return (
        <div className="tailwind-scope">
            <div className="tw-flex tw-h-screen tw-bg-gray-100">
                {/* Task list left side part */}
                <div className="tw-w-1/3 tw-bg-teal-950 tw-border-r tw-border-gray-200 tw-overflow-y-auto tw-shadow-lg tw-relative">
                    <TaskHeader onGroupInfoOpen={() => setIsGroupInfoOpen(true)} />
                    <TaskList
                        tasks={tasks}
                        selectedChat={selectedChat}
                        setSelectedChat={setSelectedChat}
                        getStatusIcon={getStatusIcon}
                    />

                    {/* Floating Action Button */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="tw-absolute tw-bottom-4 tw-right-4 tw-bg-indigo-600 tw-text-white tw-rounded-full tw-p-4 tw-shadow-2xl hover:tw-bg-indigo-700 tw-transition-colors tw-z-40"
                    >
                        <Plus className="tw-h-6 tw-w-6" />
                    </button>
                    {/* New Task Modal */}
                    <NewTaskModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onCreateTask={handleCreateTask}
                    />
                    {/* Group Info Modal */}
                    <GroupInfoModal
                        isOpen={isGroupInfoOpen}
                        onClose={() => setIsGroupInfoOpen(false)}
                        groupData={groupData}
                    />
                </div>





                {/* Chat Area */}
                <div className="tw-flex-1 tw-flex tw-flex-col tw-bg-gray-50">
                    {/* Chat Header */}
                    <ChatHeader
                        tasks={tasks}
                        selectedChat={selectedChat}
                        showAttachments={showAttachments}
                        setShowAttachments={setShowAttachments}
                        getAllAttachments={getAllAttachments}
                        handleAttachmentClick={handleAttachmentClick}
                    />

                    {/* Messages Area */}
                    <MessagesArea
                        chats={chats}
                       
                        selectedChat={selectedChat}
                   
                    />
                    {/* Message Input Area */}
                    <MessageInput
                        message={message}
                        setMessage={setMessage}
                        handleFileAttachment={handleFileAttachment}
                        handleSendMessage={handleSendMessage}
                    />
                </div>
            </div>
        </div >
    );
};

export default Chatbox;