import { useState, useEffect } from "react";
import "./style.css";

const Timer = () => {

  const [date, setDate] = useState(new Date());

  const options = {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  const dateFormat = new Intl.DateTimeFormat(undefined, options);

  useEffect(() => {
    const id = setInterval(() => { setDate(new Date()) }, 1000);
    return () => clearInterval(id);
  }, []);

  return <p className="timer">{dateFormat.format(date)}</p>
};

export default Timer;