import React from 'react';
import TimezoneList from '../components/TimezoneList';

const HomePage = ({ timezones, currentTime, setCurrentTime, removeTimezone, reorderTimezones }) => {
  return (
    <div className="container mx-auto p-4">
      <TimezoneList
        timezones={timezones}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        removeTimezone={removeTimezone}
        reorderTimezones={reorderTimezones}
      />
    </div>
  );
};

export default HomePage;
