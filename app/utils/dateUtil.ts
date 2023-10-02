const MonthDateFullyear = (dateObj: Date) => {
  return (
    dateObj.getMonth() +
    1 +
    "/" +
    dateObj.getDate() +
    "/" +
    dateObj.getFullYear()
  );
};

const DateMonthFullyear = (dateObj: Date) => {
  return (
    dateObj.getDate() +
    "/" +
    (dateObj.getMonth() + 1) +
    "/" +
    dateObj.getFullYear()
  );
};

const FullyearMonthDate = (dateObj: Date) => {
  return (
    dateObj.getFullYear() +
    "/" +
    (dateObj.getMonth() + 1) +
    "/" +
    dateObj.getDate()
  );
};

export { MonthDateFullyear, DateMonthFullyear, FullyearMonthDate };
