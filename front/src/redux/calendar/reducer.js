import dayjs from "dayjs";
import { CALENDAR_SET_MONTH } from "./action";
import { formatMonth } from "../../services/calendar";

const day = dayjs();

const initState = formatMonth(day);

const calendarReducer = (state = initState, action) => {
  // console.log(state); // { month: 10, year: 2020 } object
  // console.log(initState); // { month: 10, year: 2020 } object
  // console.log(action); // {type: "@@redux/INIT0.k.9.z.o"}, {type: "@@redux/PROBE_UNKNOWN_ACTION1.i.3.k.s.m"}, {type: "@@redux/INIT0.k.9.z.o"}
  const { type, payload } = action;
  // console.log(type);  // {type: "@@redux/INIT0.k.9.z.o"}, {type: "@@redux/PROBE_UNKNOWN_ACTION1.i.3.k.s.m"}, {type: "@@redux/INIT0.k.9.z.o"}
  // console.log(payload); // 状態変化が起こった時に{ month: 10, year: 2020 } object、 初期表示(状態変化が起きていない)はundefined
  // console.log(state); //初期表示(状態変化が起きていない)は{ month: 10, year: 2020 }(当月 = initState)を表示。
  switch (type) {
    case CALENDAR_SET_MONTH:
      return payload;
    default:
      return state;
  }
};

export default calendarReducer;
