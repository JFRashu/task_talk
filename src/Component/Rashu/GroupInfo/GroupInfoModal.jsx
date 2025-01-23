import React from 'react'
import { X } from 'lucide-react';
const GroupInfoModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-z-50 tw-flex tw-items-center tw-justify-center">
        <div className="tw-bg-white tw-w-96 tw-p-6 tw-rounded-xl tw-shadow-2xl tw-relative">
          <button 
            onClick={onClose} 
            className="tw-absolute tw-top-4 tw-right-4 tw-text-gray-500 hover:tw-text-gray-800"
          >
            <X className="tw-h-6 tw-w-6" />
          </button>
          <h2 className="tw-text-2xl tw-font-bold tw-mb-4">Project Management Group</h2>
          
          <div className="tw-space-y-4">
            <div>
              <h3 className="tw-font-semibold tw-text-gray-700">Members</h3>
              <ul className="tw-list-disc tw-pl-5">
                <li>Sarah Chen (Admin)</li>
                <li>Mike Johnson</li>
                <li>Lisa Wong</li>
              </ul>
            </div>
            
            <div>
              <h3 className="tw-font-semibold tw-text-gray-700">Group Details</h3>
              <p className="tw-text-gray-600">Created: January 15, 2025</p>
              <p className="tw-text-gray-600">Active Projects: 5</p>
            </div>
            
            <div>
              <h3 className="tw-font-semibold tw-text-gray-700">Description</h3>
              <p className="tw-text-gray-600">
                Collaborative team focused on software development and project management tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default GroupInfoModal