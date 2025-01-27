import React from 'react'
import { X, Users, Calendar, Folder } from 'lucide-react';

const GroupInfoModal = ({
    isOpen,
    onClose,
    groupData
}) => {
    if (!isOpen) return null;

    return (
        <div className="tailwind-scope">
            <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-z-50 tw-flex tw-items-center tw-justify-center">
                <div className="tw-bg-white tw-w-[450px] tw-p-6 tw-rounded-xl tw-shadow-2xl tw-relative">
                    <button
                        onClick={onClose}
                        className="tw-absolute tw-top-4 tw-right-4 tw-text-gray-500 hover:tw-text-gray-800"
                    >
                        <X className="tw-h-6 tw-w-6" />
                    </button>

                    <h2 className="tw-text-2xl tw-font-bold tw-mb-4">{groupData.name}</h2>

                    <div className="tw-space-y-4">
                        <div>
                            <h3 className="tw-font-semibold tw-text-gray-700 tw-flex tw-items-center tw-gap-2">
                                <Users className="tw-h-5 tw-w-5" /> Members
                            </h3>
                            <ul className="tw-list-none tw-pl-0 tw-space-y-1">
                                {groupData.members.map((member, index) => (
                                    <li
                                        key={index}
                                        className="tw-flex tw-justify-between tw-text-gray-600"
                                    >
                                        {member.name}
                                        <span className="tw-text-xs tw-text-gray-500">
                                            {member.role}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="tw-font-semibold tw-text-gray-700 tw-flex tw-items-center tw-gap-2">
                                <Calendar className="tw-h-5 tw-w-5" /> Dashboard Details
                            </h3>
                            <div className="tw-text-gray-600">
                                <p>Created: {groupData.createdDate}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="tw-font-semibold tw-text-gray-700 tw-flex tw-items-center tw-gap-2">
                                <Folder className="tw-h-5 tw-w-5" /> Description
                            </h3>
                            <p className="tw-text-gray-600">
                                {groupData.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupInfoModal;