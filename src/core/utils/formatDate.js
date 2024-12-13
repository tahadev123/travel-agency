import moment from "jalali-moment";

const formatDate = (date) => {
  const millisecondDate = new Date(date);
  const formatDate = millisecondDate.getTime();

  const dateFa = {
    day: getDateFormat(formatDate, { day: "2-digit" }),
    month: getDateFormat(formatDate, { month: "numeric" }),
    monthTitle: getDateFormat(formatDate, { month: "long" }),
    year: getDateFormat(formatDate, { year: "numeric" }),
    dayWeek: getDateFormat(formatDate, { weekday: "long" }),
  };

  function getDateFormat(uDate, option) {
    let date = new Intl.DateTimeFormat("fa-IR", option).format(uDate);
    return date;
  }

  return dateFa;
};

const calculateTripTime = (startDate, endDate) => {
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);

  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays
};

export { formatDate, calculateTripTime };
