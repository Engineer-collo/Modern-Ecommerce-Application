import React, { useEffect, useState } from "react";

const OfferCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Set target time 1 hour from now (you can customize)
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 1);

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetTime - now;

      if (diff <= 0) {
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    // Update immediately and then every second
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center space-x-4 text-white text-xl sm:text-2xl font-semibold font-mono select-none">
      <div className="flex flex-col items-center bg-purple-800 rounded-lg px-4 py-2 shadow-lg min-w-[60px]">
        <span>{timeLeft.hours}</span>
        <span className="text-xs uppercase tracking-widest">Hours</span>
      </div>
      <div className="flex flex-col items-center bg-purple-800 rounded-lg px-4 py-2 shadow-lg min-w-[60px]">
        <span>{timeLeft.minutes}</span>
        <span className="text-xs uppercase tracking-widest">Minutes</span>
      </div>
      <div className="flex flex-col items-center bg-purple-800 rounded-lg px-4 py-2 shadow-lg min-w-[60px]">
        <span>{timeLeft.seconds}</span>
        <span className="text-xs uppercase tracking-widest">Seconds</span>
      </div>
    </div>
  );
};

export default OfferCountdown;
