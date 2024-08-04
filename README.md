# Timezone Converter Application

This application allows users to convert time between different timezones, with a focus on simplicity and user-friendliness. It features a dark mode, an intuitive slider for adjusting time, and the ability to add or remove timezones.

## Deployed Application

You can access the deployed application

https://play-power-lab-company-b93s.vercel.app/

## Features

- **Dark Mode:** Toggle between dark and light themes for better visibility.
- **Add/Remove Timezones:** Easily add new cities to convert time or remove existing ones.
- **Slider for Time Adjustment:** Adjust the time within a single day using a slider, with labels indicating 3-hour intervals.
- **Responsive Design:** The application is responsive and works well on various screen sizes.

## Technologies Used

- React
- Moment.js
- react-beautiful-dnd
- Tailwind CSS

## Installation and Setup

### Steps

1. **Install dependencies:**
    npm install
 

2. **Start the development server:**
    npm start
 

3. **Open the application:**
    Open your browser and navigate to `http://localhost:3000`.

## Folder Structure
timezone-converter/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Slider.js
│ │ ├── TimezoneItem.js
│ │ └── TimezoneList.js
│ ├── hooks/
│ │ └── useTimezones.js
│ ├── pages/
│ │ ├── HomePage.js
│ │ └── Mainpage.js
│ ├── styles/
│ │ └── TimezoneItem.css
| | └── Mainpage.css
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
└── README.md

## Usage

1. **Adding a Timezone:**
    - Select a city from the dropdown menu and click the "Add" button.
    - The city will be added to the list of timezones.

2. **Removing a Timezone:**
    - Click the "Remove" button (red 'X' icon) next to a timezone to remove it from the list.

3. **Adjusting Time:**
    - Use the slider under each timezone to adjust the time within a single day. The labels below the slider indicate 3-hour intervals.

4. **Toggle Dark Mode:**
    - Click the moon or sun icon to toggle between dark and light themes.

 ### Homepage Image


