import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

export const createCalendar = month => {
  // 月初を取得(Thu Oct 01 2020 00:00:00 GMT+0900 (日本標準時)
  console.log(month);
  const firstDay = getMonth(month);
  // 月初の曜日を取得(10月1日の場合木曜日なので"4")
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
