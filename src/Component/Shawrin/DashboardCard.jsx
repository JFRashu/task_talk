import React, { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';
import { 
  CheckCircle, 
  XCircle, 
  MessageSquare, 
  UserPlus, 
  Calendar,
  Clock,
  Trash2
} from 'lucide-react';

export const DashboardCard = ({ dashboard }) => {
  const { addTask, toggleTaskStatus, deleteTask, addMember, addMessage } = useDashboard();
  const [showChat, setShowChat] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', assignee: '', dueDate: '', dueTime: '' });
  const [newMessage, setNewMessage] = useState('');
  const [newMember, setNewMember] = useState({ name: '', email: '' });

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.title && newTask.assignee && newTask.dueDate && newTask.dueTime) {
      addTask(dashboard.id, newTask);
      setNewTask({ title: '', assignee: '', dueDate: '', dueTime: '' });
    }
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    if (newMember.name && newMember.email) {
      addMember(dashboard.id, { ...newMember, id: Date.now().toString() });
      setNewMember({ name: '', email: '' });
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      addMessage(dashboard.id, newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{dashboard.name}</h3>
        <p className="text-gray-600 mb-4">{dashboard.description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">Tasks</h4>
          <div className="space-y-2">
            {dashboard.tasks.map(task => (
              <div key={task.id} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <div className="flex items-center">
                  <button
                    onClick={() => toggleTaskStatus(dashboard.id, task.id)}
                    className={`${
                      task.status === 'completed' ? 'text-green-500' : 'text-gray-400'
                    } hover:text-green-600`}
                  >
                    <CheckCircle className="h-5 w-5" />
                  </button>
                  <span className={`ml-2 ${task.status === 'completed' ? 'line-through text-gray-400' : ''}`}>
                    {task.title}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>{task.assignee}</span>
                  <span>{task.dueDate} {task.dueTime}</span>
                  <button
                    onClick={() => deleteTask(dashboard.id, task.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleAddTask} className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">Add Task</h4>
          <div className="space-y-2">
            <input
              type="text"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              placeholder="Task title"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              value={newTask.assignee}
              onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
              placeholder="Assignee"
              className="w-full p-2 border rounded"
            />
            <div className="flex space-x-2">
              <div className="flex-1">
                <Calendar className="h-5 w-5 text-gray-400 absolute mt-2.5 ml-2" />
                <input
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                  className="w-full p-2 pl-9 border rounded"
                />
              </div>
              <div className="flex-1">
                <Clock className="h-5 w-5 text-gray-400 absolute mt-2.5 ml-2" />
                <input
                  type="time"
                  value={newTask.dueTime}
                  onChange={(e) => setNewTask({ ...newTask, dueTime: e.target.value })}
                  className="w-full p-2 pl-9 border rounded"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
            >
              Add Task
            </button>
          </div>
        </form>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">Members</h4>
          <div className="space-y-2">
            {dashboard.members.map(member => (
              <div key={member.id} className="flex items-center space-x-2 text-sm text-gray-600">
                <span>{member.name}</span>
                <span className="text-gray-400">({member.email})</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleAddMember} className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">Add Member</h4>
          <div className="space-y-2">
            <input
              type="text"
              value={newMember.name}
              onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              placeholder="Member name"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              value={newMember.email}
              onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
              placeholder="Member email"
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
            >
              Add Member
            </button>
          </div>
        </form>

        <button
          onClick={() => setShowChat(!showChat)}
          className="w-full flex items-center justify-center space-x-2 bg-gray-100 p-2 rounded hover:bg-gray-200"
        >
          <MessageSquare className="h-5 w-5" />
          <span>{showChat ? 'Hide Chat' : 'Show Chat'}</span>
        </button>

        {showChat && (
          <div className="mt-4">
            <div className="h-48 overflow-y-auto bg-gray-50 p-4 rounded mb-2">
              {dashboard.messages.map(message => (
                <div key={message.id} className="mb-2">
                  <span className="font-semibold">{message.sender.name}: </span>
                  <span>{message.content}</span>
                  <span className="text-xs text-gray-400 ml-2">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-2 border rounded"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};