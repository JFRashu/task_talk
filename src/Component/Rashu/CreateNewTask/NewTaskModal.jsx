import React, { useState } from 'react';
import { X } from 'lucide-react';

const NewTaskModal = ({ isOpen, onClose, onCreateTask }) => {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'pending',
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTask(newTask);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="tailwind-scope">
    <div className="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50">
      <div className="tw-bg-white tw-w-96 tw-p-6 tw-rounded-xl tw-shadow-2xl tw-relative tw-transform tw-transition-all tw-duration-300 tw-scale-100">
        <button 
          onClick={onClose} 
          className="tw-absolute tw-top-4 tw-right-4 tw-text-gray-500 hover:tw-text-gray-800"
        >
          <X className="tw-h-6 tw-w-6" />
        </button>
        <h2 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-gray-800">Create New Task</h2>
        <form onSubmit={handleSubmit} className="tw-space-y-4 tw-rounded-md">
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-200">Title</label>
            <input
              type="text"
              name="title"
              value={newTask.title}
              onChange={handleInputChange}
              required
              className="tw-mt-1 tw-block tw-w-full tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-p-2"
            />
          </div>
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-200">Description</label>
            <textarea
              name="description"
              value={newTask.description}
              onChange={handleInputChange}
              className="tw-mt-1 tw-block tw-w-full tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-p-2 "
            />
          </div>
          
          <button
            type="submit"
            className="tw-w-full tw-bg-indigo-600 tw-text-white tw-py-2 tw-rounded-md tw-hover:bg-indigo-700 tw-transition-colors"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default NewTaskModal;