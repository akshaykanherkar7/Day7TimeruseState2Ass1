import React, { useEffect, useState } from "react";

const Timer = ({ starttime, endtime }) => {
  const [timer, setTimer] = useState(starttime);

  useEffect(() => {
    let id = setInterval(() => {
      if (timer < endtime) {
        setTimer((prev) => prev + 1);
      } else {
        clearInterval(id);
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [timer, endtime]);

  return (
    <div>
      <h3>Timer: {timer}</h3>
      <p>
        StartTime:{starttime} || EndTime:{endtime}
      </p>
    </div>
  );
};

export default Timer;
