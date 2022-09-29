const normalizeDate = (time) => {
  const date = new Date(time);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = String(date.getDate()).padStart(2, 0);
  const month = date.getMonth();
  const year = date.getFullYear();

  return day + " " + monthNames[month] + ", " + year;
};

export default normalizeDate;
