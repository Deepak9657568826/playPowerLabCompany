import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Mainpage.css';
import HomePage from './HomePage';
import { useTimezones } from '../hooks/useTimezones';

const cityToTimezone = {
    'New York': 'America/New_York',
    'Kolkata': 'Asia/Kolkata',
    'Los Angeles': 'America/Los_Angeles',
    'London': 'Europe/London',
    'Paris': 'Europe/Paris',
    'Tokyo': 'Asia/Tokyo',
    'Sydney': 'Australia/Sydney',
};

function Mainpage() {
    const { timezones, addTimezone, removeTimezone, reorderTimezones, swapFirstLast } = useTimezones();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [darkMode, setDarkMode] = useState("white");
    const [newCity, setNewCity] = useState('');
    const [message, setMessage] = useState('');
    


    useEffect(() => {
        setDarkMode(pre => pre === "white" ? "black" : "white");
    }, []);
 localStorage.setItem("color", darkMode)
    const toggleDarkMode = () => {
        setDarkMode(pre => pre === "black" ? "white" : "black");
    };

    const handleAddTimezone = () => {
        try {
            addTimezone(newCity);
            setNewCity('');
            alert('Timezone added successfully!');
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div style={{ backgroundColor: darkMode }} className={darkMode ? 'dark' : ''}>
            <div className='mainHomepage text-gray-900 dark:text-gray-100 p-4'>
                <div className='Main_page_header'>
                    <h1 style={{ color: (darkMode === "white") ? "black" : "white" }} className='text-2xl font-bold'>UTC to IST Converter</h1>
                    <hr className='my-4' />
                    <nav>
                        <div>
                            <div style={{ color: (darkMode === "white") ? "black" : "white" }} className='flex gap-7'>
                                <Link to="/" className='hover:underline'>Converter</Link>
                                <Link to="/time-difference" className='hover:underline'>Time Difference</Link>
                                <Link to="/table" className='hover:underline'>Table</Link>
                                <Link to="/utc" className='hover:underline'>UTC</Link>
                                <Link to="/ist" className='hover:underline'>IST</Link>
                            </div>
                        </div>
                    </nav>
                    <hr className='my-4' />
                </div>

                <div className='navbarMain mt-4'>
                    <div className='Navbar_inner_first flex items-center gap-2'>
                        <select
                            className='selectTag p-2 border text-black rounded dark:bg-gray-200 dark:border-gray-200'
                            value={newCity}
                            onChange={(e) => setNewCity(e.target.value)}
                        >
                            <option value="" disabled>Select city</option>
                            {Object.keys(cityToTimezone).map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                        <button
                            onClick={handleAddTimezone}
                            className='btn border-none p-2 text-white rounded hover:bg-gray-300'
                        >
                            <img src="https://cdn-icons-png.flaticon.com/128/11696/11696045.png" alt="Add" />
                        </button>
                    </div>

                    <div className='Navbar_inner_second mt-2 md:mt-0'>
                        <input type="date" className='p-2 text-black border rounded dark:bg-gray-200 dark:border-gray-200' />
                    </div>

                    <div className='Navbar_inner_third flex gap-2 mt-2 md:mt-0'>
                        <button className='btn p-2 border-none text-white rounded hover:bg-gray-300'>
                            <img src="https://cdn-icons-png.flaticon.com/128/7955/7955830.png" alt="Icon 1" />
                        </button>
                        <button
                            className='upDownButton btn border-none p-2 text-white rounded hover:bg-gray-300'
                            onClick={swapFirstLast}
                        >
                            <img src="https://cdn-icons-png.flaticon.com/128/3466/3466264.png" alt="Icon 2" />
                        </button>
                        <button className='btn p-2 border-none text-white rounded hover:bg-gray-300'>
                            <img src="https://cdn-icons-png.flaticon.com/128/282/282100.png" alt="Icon 3" />
                        </button>
                        <button
                            className='btn p-2 border-none text-white rounded hover:bg-gray-300'
                            onClick={toggleDarkMode}
                        >
                            {darkMode === 'black' ? <img src="https://cdn-icons-png.flaticon.com/128/8812/8812116.png" alt="Dark Mode" /> : <img src="https://cdn-icons-png.flaticon.com/128/11735/11735139.png" alt="Light Mode" />}
                        </button>
                    </div>
                </div>

                <div>
                    <HomePage
                        timezones={timezones}
                        currentTime={currentTime}
                        setCurrentTime={setCurrentTime}
                        removeTimezone={removeTimezone}
                        reorderTimezones={reorderTimezones}
                    />
                </div>
            </div>
        </div>
    );
}

export default Mainpage;
