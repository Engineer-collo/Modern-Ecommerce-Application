import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(intervalId); // cleanup on unmount
  }, []);

  return (
    <div className="text-xl font-mono">
      Current Time: {time.toLocaleTimeString()}
    </div>
  );
};

export default Clock;
