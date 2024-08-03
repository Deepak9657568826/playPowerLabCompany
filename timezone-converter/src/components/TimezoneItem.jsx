import React from 'react';
import moment from 'moment-timezone';
import { AiOutlineClose } from 'react-icons/ai';
import Slider from './Slider';
import "../styles/TimezoneItem.css";

const TimezoneItem = ({ timezone, currentTime, setCurrentTime, removeTimezone }) => {
  const formattedTime = moment(currentTime).tz(timezone.name).format('hh:mm A');
  const formattedDate = moment(currentTime).tz(timezone.name).format('ddd, MMM D');
  const darkMode = localStorage.getItem("color");

  return (
    <div
      style={{ background: (darkMode === "white") ?  "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)" : "linear-gradient(179.7deg, rgb(197, 214, 227) 2.9%, rgb(144, 175, 202) 97.1%)" }}
      className="timezone_Component p-4 mb-4 shadow-lg rounded-lg border border-gray-300"
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold text-gray-800">{timezone.name}</h2>
        <button onClick={() => removeTimezone(timezone.id)} className="text-red-600">
          <AiOutlineClose />
        </button>
      </div>
      <div className="flex items-center mb-3">
        <div className="flex-grow text-center">
          <h3 className="text-lg font-medium text-gray-600">{formattedDate}</h3>
        </div>
        <h3 className="text-lg font-medium text-gray-600 time-right">{formattedTime}</h3>
      </div>
      <Slider timezone={timezone.name} currentTime={currentTime} setCurrentTime={setCurrentTime} />
    </div>
  );
};

export default TimezoneItem;
