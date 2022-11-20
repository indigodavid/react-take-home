import React from 'react';
import Campaign from './components/Campaign';
import Header from './components/Header';
import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';

function App() {
  return (
    <div className="container p-4">
      {/* Header */}
      <Header />

      {/* Campaign iterator */}
      <div className="w-full flex flex-col gap-3">
        <Campaign campaignName="Yarn" campaignIcon={logo1} payPerInstall={8.2} />
        <Campaign campaignName="Paper2" campaignIcon={logo2} payPerInstall={6.5} />
      </div>
      
    </div>
  );
}

export default App;
