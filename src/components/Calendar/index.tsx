"use client"
import React, { useState, useEffect } from 'react';

const Calendar: React.FC = () => {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [currentDay, setCurrentDay] = useState<Date>(new Date());

  useEffect(() => {
    // Here you can handle any side effects, if needed, when `currentDay` updates
  }, [currentDay]);

  return (
    <div>
      <h1>Calendar Component</h1>
      <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
    </div>
  );
};

export default Calendar;
