import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";

const CalendarElement = ({ day }) => {
  // 月初の日数の時は"M月D日"、それ以外は"D"を返す
  const isFirstDay = day.date() === 1;
  const format = isFirstDay ? "M月D日" : "D";

  // 当日かどうかを確認
  const today = dayjs();
  const compareFormat = "YYYYMMDD";
  const isToday = day.format(compareFormat) === today.format(compareFormat);

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;
