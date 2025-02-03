import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout and Dashboard components
import { Layout } from './Component/Shawrin/Layout';
import { CurrentDashboard } from './Component/Shawrin/CurrentDashboard';
import { CreateDashboard } from './Component/Shawrin/CreateDashboard';
import { MyDashboard } from './Component/Shawrin/MyDashboard';
import { DashboardProvider } from './context/DashboardContext';

// Auth and other components
import Home from './Component/Home/Home';
import Login from './Component/Rashu/Login/Login';
import Registration from './Component/Rashu/Registration/Registration';
import Chatbox from './Component/Rashu/TaskChat/Chatbox';

function App() {
  const [activeTab, setActiveTab] = useState('current');

  const renderDashboardContent = () => {
    switch (activeTab) {
      case 'current':
        return <CurrentDashboard />;
      case 'create':
        return <CreateDashboard />;
      case 'my':
        return <MyDashboard />;
      default:
        return <CurrentDashboard />;
    }
  };

  const DashboardWrapper = () => (
    <DashboardProvider>
      <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
        {renderDashboardContent()}
      </Layout>
    </DashboardProvider>
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/taskchat" element={<Chatbox />} />
      <Route path="/dashboard/*" element={<DashboardWrapper />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;