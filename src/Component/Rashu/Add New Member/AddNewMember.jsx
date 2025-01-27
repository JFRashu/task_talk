import React, { useState } from 'react';
import { X } from 'lucide-react';

const AddNewMember = ({ isOpen, onClose, onAddMember }) => {
    // If modal is not open, don't render anything
    if (!isOpen) return null;

    const [newMember, setNewMember] = useState({
        name: '',
        email: '',
        role: 'member'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMember(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!newMember.name || !newMember.email) {
            alert('Please fill in all required fields');
            return;
        }

        // Call the onAddMember prop with the new member
        onAddMember(newMember);

        // Reset form
        setNewMember({
            name: '',
            email: '',
            role: 'member'
        });
    };

    return (
        <div className="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50">
            <div className="tw-p-6 tw-bg-white tw-rounded-lg tw-shadow-md tw-relative tw-w-96">
                <button
                    onClick={onClose}
                    className="tw-absolute tw-top-4 tw-right-4 tw-text-gray-500 hover:tw-text-gray-800"
                >
                    <X className="tw-h-6 tw-w-6" />
                </button>

                <h2 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-gray-800">Add New Member</h2>
                
                <form onSubmit={handleSubmit} className="tw-space-y-4">
                    <div>
                        <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-400">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={newMember.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter member's full name"
                            className="tw-mt-1 tw-block tw-w-full tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-p-2"
                        />
                    </div>
                    
                    <div>
                        <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-400">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={newMember.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter member's email"
                            className="tw-mt-1 tw-block tw-w-full tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-p-2"
                        />
                    </div>
                    
                    <div>
                        <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-400">Role</label>
                        <select
                            name="role"
                            value={newMember.role}
                            onChange={handleInputChange}
                            className="tw-mt-1 tw-ml-2 tw-block tw-w-full tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-p-2"
                        >
                            <option value="member">Member</option>
                            <option value="admin">Admin</option>
                            
                        </select>
                    </div>
                    
                    <button
                        type="submit"
                        className="tw-w-full tw-bg-indigo-600 tw-text-white tw-py-2 tw-rounded-md hover:tw-bg-indigo-700 tw-transition-colors"
                    >
                        Add Member
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewMember;