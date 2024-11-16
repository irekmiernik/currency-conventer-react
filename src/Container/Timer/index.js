import { useCurrentDate } from "../../useCurrentDate";
import './style.css';

const Timer = () => {

  const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }

  const dateFormat = new Intl.DateTimeFormat(undefined, dateOptions);
  const timeFormat = new Intl.DateTimeFormat(undefined, timeOptions)

  const date = useCurrentDate();

  return (<p className="timer">{dateFormat.format(date) + "r. godz. " + timeFormat.format(date)}</p>);
};

export default Timer;
