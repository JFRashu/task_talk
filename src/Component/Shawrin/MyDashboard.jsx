import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { DashboardCard } from './DashboardCard';

export const MyDashboard = () => {
  const { dashboards, currentUser } = useDashboard();
  const myDashboards = dashboards.filter(dashboard => dashboard.creator.id === currentUser.id);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">My Dashboards</h2>

        

       {myDashboards.length === 0 ? ( 
        <p className="text-gray-300">You haven't created any dashboards yet.</p>
        ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {myDashboards.map(dashboard => (
            <DashboardCard key={dashboard.id} dashboard={dashboard} />
          ))}
        </div>
       )} 
    </div>
  );
};