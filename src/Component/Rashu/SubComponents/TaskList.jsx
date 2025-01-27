import React from 'react';

const TaskList = ({ 
    tasks, 
    selectedChat, 
    setSelectedChat, 
    getStatusIcon 
}) => {
    const handleTaskSelect = (taskId) => {
        console.log('Selected Task ID:', taskId);
        console.log('Current Selected Chat:', selectedChat);
        
        // Log all tasks for reference
        console.log('All Tasks:', tasks);
       
        setSelectedChat(taskId);
    };

    return (
        <div className="tw-divide-y tw-divide-gray-300">
            {tasks.map((task) => (
                <div
                    key={task.id}
                    onClick={() => handleTaskSelect(task.id)}
                    className={`tw-p-5  tw-shadow-md tw-transition-all tw-duration-300 tw-cursor-pointer ${
                        selectedChat === task.id
                            ? 'tw-bg-black tw-text-white tw-border-l-4 tw-border-gray-700 tw-shadow-lg'
                            : 'tw-bg-slate-700 tw-text-white hover:tw-bg-gray-100 hover:tw-shadow-lg hover:tw-text-gray-950'
                    }`}
                >
                    <div className="tw-flex tw-items-center tw-justify-between">
                        <h3 className=" tw-text-base">{task.title}</h3>
                        {getStatusIcon(task.status)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;