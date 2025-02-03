import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { DashboardCard } from './DashboardCard';

export const CurrentDashboard = () => {
  const { dashboards, currentUser } = useDashboard();
  const connectedDashboards = dashboards.filter(dashboard => 
    dashboard.members.some(member => member.id === currentUser.id)
  );

  return (
    
  //<div className="tailwind-scope">

         <div className=" space-y-6">
       <h2 className="text-3xl font-bold text-white">Connected Dashboards</h2>
       {/* {connectedDashboards.length === 0 ? ( */}
        <p className="text-gray-500">You are not connected to any dashboards yet.</p>
       {/* ) : (
        <div className="grid grid-cols-1 gap-6 stw-m:grid-cols-2 tw-lg:grid-cols-3">
          {connectedDashboards.map(dashboard => ( */}
             {/* <DashboardCard key={dashboard.id} dashboard={dashboard} />
         ))} */}
         </div>
      // )}
    //</div>

 // </div>

   
  );
};