import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

export const createCalendar = () => {
  // 月初を取得(Thu Oct 01 2020 00:00:00 GMT+0900 (日本標準時)
  const firstDay = dayjs().startOf("month");
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
