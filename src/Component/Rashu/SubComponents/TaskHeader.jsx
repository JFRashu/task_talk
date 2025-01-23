import React from 'react';

const TaskHeader = ({ onGroupInfoOpen }) => {
    return (
        <div className="tw-p-3 tw-border-b tw-border-gray-200 tw-bg-indigo-950 tw-flex tw-items-center tw-justify-between">
            <h2 className="tw-text-2xl tw-font-bold tw-text-white">Tasks</h2>
            <div className="tw-relative">
                <button 
                    onClick={onGroupInfoOpen} 
                    className="tw-btn tw-btn-outline tw-btn-accent"
                >
                    Group Info
                </button>
            </div>
        </div>
    );
};

export default TaskHeader;