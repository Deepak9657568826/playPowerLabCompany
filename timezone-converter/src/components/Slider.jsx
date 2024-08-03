import React from 'react';
import moment from 'moment-timezone';

const Slider = ({ timezone, currentTime, setCurrentTime }) => {
  const startOfDay = moment(currentTime).tz(timezone).startOf('day');
  let sliderValue = moment(currentTime).tz(timezone).diff(startOfDay, 'minutes');

  const min = 0; 
  const max = 1440; 

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value, 10);
    
    if (value >= max) {

      setCurrentTime(moment(startOfDay).toDate());
    } else {
      const updatedTime = moment(startOfDay).add(value, 'minutes').toDate();
      setCurrentTime(updatedTime);
    }
  };

  const labels = [];
  for (let i = 0; i <= max; i += 180) {
    labels.push(moment(startOfDay).add(i, 'minutes').tz(timezone).format('h A'));
  }

  return (
    <div className="mb-4">
      <label className="block text-gray-800">Adjust Time (UTC - {timezone}):</label>
      <div className="relative mt-2">
        <input
          type="range"
          min={min}
          max={max}
          step={15}
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full appearance-none h-4 rounded-lg"
          style={{
            background: `linear-gradient(to right, gray, blue, lightyellow)`,
            transition: 'background 0.3s ease'
          }}
        />
        <div className="absolute w-full flex justify-between text-xs text-gray-800 mt-1">
          {labels.map((label, index) => (
            <span key={index} className="w-8 text-center">{label}</span>
          ))}
        </div>
        <div className="absolute w-full h-4 top-0 flex justify-between">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="border-l-2 border-gray-300 h-full" style={{ width: 'calc((100% / 8) - 2px)' }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
