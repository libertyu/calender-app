import React from "react";
import Schedule from "../Schedule";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import {
  isFirstDay,
  isSameDay,
  isSameMonth,
  getMonth
} from "../../services/calendar";

const CalendarElement = ({ day, month, schedules }) => {
  const today = dayjs();

  // 月初の日数の時は"M月D日"、それ以外は"D"を返す
  const format = isFirstDay(day) ? "M月D日" : "D";

  // 当日かどうかを確認
  const isToday = isSameDay(day, today);

  // 今月以外をグレーダウン
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
      <div className={styles.schedules}>
        {schedules.map(e => (
          <Schedule key={e.id} schedule={e} />
        ))}
      </div>
    </div>
  );
};

export default CalendarElement;
