import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

export const createCalendar = month => {
  const firstDay = getMonth(month);
  const firstDayIndex = firstDay.day();

  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");

      return day;
    });
};
export const isFirstDay = day => {
  return day.date() === 1;
};

export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
};

export const isSameMonth = (d1, d2) => {
  const format = "YYYYMM";
  return d1.format(format) === d2.format(format);
};

export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};

export const formatMonth = day => ({
  month: day.month() + 1,
  year: day.year()
});

export const getNextMonth = month => {
  const day = getMonth(month).add(1, "month");
  return formatMonth(day);
};

export const getPreviousMonth = month => {
  const day = getMonth(month).add(-1, "month");
  return formatMonth(day);
};
