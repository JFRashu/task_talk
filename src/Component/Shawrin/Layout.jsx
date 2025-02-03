import React from 'react';
import { LayoutDashboard, PlusCircle, Folders } from 'lucide-react';

export const Layout = ({ children, activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'current', label: 'Current Dashboard', icon: LayoutDashboard },
    { id: 'create', label: 'Create Dashboard', icon: PlusCircle },
    { id: 'my', label: 'My Dashboard', icon: Folders },
  ];

  return (
    <div className="tailwind-scope">
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                  <LayoutDashboard className="h-8 w-8 text-indigo-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">
                    TaskTalk
                  </span>
                </div>
                
                {/* Navigation */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navItems.map(({ id, label, icon: Icon }) => {
                    const isActive = activeTab === id;
                    return (
                      <button
                        key={id}
                        onClick={() => setActiveTab(id)}
                        className={`
                          inline-flex items-center px-3 py-2 border-b-2
                          text-sm font-medium transition-colors
                          ${isActive 
                            ? 'border-indigo-500 text-indigo-600' 
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                        `}
                      >
                        <Icon className="h-5 w-5 mr-2" />
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
};