import React from 'react';
import StatCard from './StatCard';
import BarChart from './BarChart';

function Dashboard() {
  const studentActivities = [
    { user: "John Doe", action: "uploaded a new 3D asset.", time: "3m ago" },
    { user: "Jane Smith", action: "enrolled in the Math course.", time: "5m ago" },
    { user: "Alice Johnson", action: "updated the Science course.", time: "10m ago" },
    { user: "Robert Brown", action: "added a new teacher profile.", time: "15m ago" },
  ];

  const stats = [
    { index: 1, title: "Students", value: "1,200", change: "5% increase", activities: studentActivities },
    { index: 2, title: "Courses", value: "50", change: "2% increase", activities: [] },
    { index: 3, title: "Teachers", value: "75", change: "1% increase", activities: [] },
    { index: 4, title: "3D Assets", value: "250", change: "8% increase", activities: [] },
  ];

  const studentData = [
    { name: 'Math', students: 200 },
    { name: 'Biology', students: 180 },
    { name: 'Mechanics', students: 220 },
    { name: 'Software', students: 150 },
  ];

  return (
    <div className="dashboard bg-light">
      <h1 className='letter-spacing-5 mb-4'>DASHBOARD</h1>
      <div className="dashboard-stats d-flex justify-content-between mb-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.index}
            index={stat.index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            activities={stat.activities} 
          />
        ))}
      </div>
      <div className="dashboard-main d-flex">
        <div className="dashboard-chart w-75">
          <BarChart data={studentData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
