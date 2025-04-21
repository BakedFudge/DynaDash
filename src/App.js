import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Real-time Data',
        data: [],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  });
  
  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newLabel = new Date().toLocaleTimeString();
      const newValue = Math.floor(Math.random() * 100);
      
      setData(prevData => {
        // Keep only the last 10 data points to avoid overcrowding
        const labels = [...prevData.labels, newLabel].slice(-10);
        const newData = [...prevData.datasets[0].data, newValue].slice(-10);
        
        return {
          labels,
          datasets: [
            {
              ...prevData.datasets[0],
              data: newData,
            },
          ],
        };
      });
    }, 3000); // Update every 3 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="app">
      <header>
        <h1>DynaDash</h1>
        <p>A Real-time Dashboard</p>
      </header>
      <main>
        <Dashboard data={data} />
      </main>
      <footer>
        <p>© 2025 DynaDash - Real-time Monitoring</p>
      </footer>
    </div>
  );
}

export default App;