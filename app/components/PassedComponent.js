"use client";
import { useCallback, useEffect, useState } from "react";
import moment from "moment";

const PassedComponent = ({ item }) => {
  const [
    { years, months, days, hours, minutes, seconds, milliseconds },
    setTimerDate,
  ] = useState({
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  const startDate = new Date(item.date);

  const calcTime = useCallback(() => {
    const now = moment(new Date());
    const duration = moment.duration(now.diff(startDate));
    setTimerDate(duration._data);
  }, [item.date]);

  useEffect(() => {
    calcTime();
    const intervalTimer = setInterval(calcTime, 1000);
    return () => clearInterval(intervalTimer);
  }, [calcTime]);

  return (
    <div className="bg-slate-900 py-10 px-3 lg:px-5 rounded-3xl shadow-lg min-h-[60%] order-1 lg:order-2 w-full overflow-hidden">
      <div className="mb-10 text-center">
        <span className="text-4xl text-center hover:animate-ping select-none mx-auto">
          {item.icon}
        </span>
        <p className="text-center mt-6 text-xl">{item.title}</p>
      </div>
      <div className="times">
        <div>
          <span>{years}</span>
          <span>سال</span>
        </div>
        <div>
          <span>{months}</span>
          <span>ماه</span>
        </div>
        <div>
          <span>{days}</span>
          <span>روز</span>
        </div>
        <div>
          <span>{hours}</span>
          <span>ساعت</span>
        </div>
        <div>
          <span>{minutes}</span>
          <span>دقیقه</span>
        </div>
        <div>
          <span>{seconds}</span>
          <span>ثانیه</span>
        </div>
      </div>
      <div>
        <p className="text-center mt-6 text-xl">گذشته...</p>
      </div>
    </div>
  );
};

export default PassedComponent;
