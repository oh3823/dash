import React, { useState, useEffect, useRef, memo } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  // setInterval(setTime(new Date()), 1000);

  const week = useRef(['일', '월', '화', '수', '목', '금', '토']);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <h1 className="clock">
        {String(time.getHours()).padStart(2, '0')}:
        {String(time.getMinutes()).padStart(2, '0')}
      </h1>
      <h3 className="weekday">
        {`${time.getMonth() + 1}월 ${time.getDate()}일 ${
          week.current[time.getDay()]
        }요일`}
      </h3>
    </div>
  );
};
export default memo(Clock);
