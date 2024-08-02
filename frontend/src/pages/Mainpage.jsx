import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';
import './Mainpage.css';
import HomePage from './HomePage';
import { useTimezones } from '../hooks/useTimezones';

function Mainpage() {
    const { timezones, addTimezone, removeTimezone, reorderTimezones } = useTimezones();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [darkMode, setDarkMode] = useState(localStorage.getItem("color") || "white");
    const [newTimezone, setNewTimezone] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        localStorage.setItem("color", darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(pre => pre === "black" ? "white" : "black");
    };

    const handleAddTimezone = () => {
        try {
            addTimezone(newTimezone);
            setNewTimezone('');
            setMessage('Timezone added successfully!');
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div style={{ backgroundColor: darkMode }} className={darkMode ? 'dark' : ''}>
            <div className='mainHomepage text-gray-900 dark:text-gray-100 p-4'>
                <div>
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

                <div className='navbarMain flex flex-col md:flex-row justify-between items-center mt-4'>
                    <div className='Navbar_inner_first flex items-center gap-2'>
                        <input
                            type="text"
                            placeholder='Add time zone, city or town'
                            className='p-2 border text-white rounded dark:bg-gray-700 dark:border-gray-600'
                            value={newTimezone}
                            onChange={(e) => setNewTimezone(e.target.value)}
                        />
                        <button
                            onClick={handleAddTimezone}
                            className='btn border-none p-2 text-white rounded hover:bg-gray-300'
                        >
                            <img src="https://cdn-icons-png.flaticon.com/128/10337/10337471.png" alt="" />
                        </button>
                    </div>

                    <div className='Navbar_inner_second mt-2 md:mt-0'>
                        <input type="date" className='p-2 text-white border rounded dark:bg-gray-700 dark:border-gray-600' />
                    </div>

                    <div className='Navbar_inner_third flex gap-2 mt-2 md:mt-0'>
                        <button className='btn p-2 border-none text-white rounded hover:bg-gray-300'>
                            <img cla src="https://cdn-icons-png.flaticon.com/128/7955/7955830.png" alt="" />
                        </button>
                        <button className='btn border-none p-2 text-white rounded hover:bg-gray-300'>
                            <img src="https://cdn-icons-png.flaticon.com/128/3466/3466264.png" alt="" />
                        </button>
                        <button className='btn p-2 border-none text-white rounded hover:bg-gray-300'>
                            <img src="https://cdn-icons-png.flaticon.com/128/282/282100.png" alt="" />
                        </button>
                        <button
                            className='btn p-2 border-none text-white rounded hover:bg-gray-300'
                            onClick={toggleDarkMode}
                        >
                            {darkMode === 'black' ? <img src="https://cdn-icons-png.flaticon.com/128/8812/8812116.png" alt="" /> : <img src="https://cdn-icons-png.flaticon.com/128/11735/11735139.png" alt="" />}
                        </button>
                    </div>
                </div>

                {message && <div className='text-green-500 mt-4'>{message}</div>}

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
