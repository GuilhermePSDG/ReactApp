import './App.css';
import React from 'react';
import AppRoutes from './AppRoutes';
import TopBar from './Components/TopBar/TopBar'
import ResolutionMonitor from './Components/ResolutionMonitor/ResolutionMonitor'


function App() {
  return (
    <div id="App">
      <ResolutionMonitor />
      <TopBar />
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;

