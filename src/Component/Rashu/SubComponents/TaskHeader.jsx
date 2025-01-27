import React from 'react';
import { UserPlus, LayoutDashboard } from 'lucide-react';

const TaskHeader = ({ onGroupInfoOpen, onAddMemberOpen }) => {
    return (
        <div className="tw-p-3 tw-border-b tw-border-gray-200 tw-bg-indigo-950 tw-flex tw-items-center tw-justify-between">
            <h2 className="tw-text-2xl tw-font-bold tw-text-white">Tasks</h2>
            <div className="tw-flex tw-gap-3">
                <div className="tw-relative tw-group">
                    <button
                        onClick={onAddMemberOpen}
                        className="tw-p-2 tw-rounded-lg tw-text-white hover:tw-bg-indigo-800 tw-transition-colors"
                    >
                        <UserPlus className="tw-h-5 tw-w-5 tw-text-blue-600 hover:tw-text-white tw-transition-colors" />
                    </button>

                </div>
                <div className="tw-relative tw-group">
                    <button
                        onClick={onGroupInfoOpen}
                        className="tw-p-2 tw-rounded-lg tw-bg-white hover:tw-bg-blue-600 tw-transition-colors"
                    >
                        <LayoutDashboard
                            className="tw-h-5 tw-w-5 tw-text-blue-600 hover:tw-text-white tw-transition-colors"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskHeader;