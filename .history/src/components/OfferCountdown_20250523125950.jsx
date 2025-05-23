import React, { useState, useEffect, useRef } from 'react';

const OfferCountdown = () => {
  const offerEndsAt = useRef(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)); // 1 week from now

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = offerEndsAt.current - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  if (!timeLeft) {
    return <div className=" text-red-500 font-semibold">Offer expired!</div>;
  }

  return (
    <div className="grid place-items-center h-32">
    <div className="bg-purple-500 text-white p-12 rounded-lg mt-6 text-lg font-bold text-green-700">
      <h1>Anniversary Celebration</h1>
      <h1>  Get 70% Off discount    </h1>
      Offer ends in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </div>
  </div>
  
  );
};

export default OfferCountdown;
