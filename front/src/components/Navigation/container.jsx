import Navigation from "./presentation";
import { connect } from "react-redux";
import {
  getNextMonth,
  getPreviousMonth,
  getMonth,
  formatMonth
} from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/action";

const mapStateToProps = state => ({ calendar: state.calendar });

const mapDispatchToProps = dispatch => ({
  setMonth: month => {
    // console.log(month); // {month: 11, year: 2020} object
    // console.log(dispatch); //メソッド的なやつ
    // console.log(calendarSetMonth(month)); //action、jsで定義したaction
    // console.log(dispatch(calendarSetMonth(month))); //action、jsで定義したaction
    dispatch(calendarSetMonth(month));
  }
});

const mergeProps = (stateProps, dispatchProps) => ({
  // reduxのstate → dayjs
  month: getMonth(stateProps.calendar),
  setNextMonth: () => {
    // console.log(stateProps); //　calendarオブジェクト calendar: {month: 10, year: 2020}
    // console.log(dispatchProps); //mapDispatchToPropsのsetMonthメソッド
    // console.log(stateProps.calendar); // {month: 10, year: 2020}　現在の年月
    // console.log(getNextMonth(stateProps.calendar)); // getNextMonthメソッド {month: 11, year: 2020}　現在の年月の翌月
    const nextMonth = getNextMonth(stateProps.calendar);
    // console.log(dispatchProps.setMonth(nextMonth)); // undefined
    dispatchProps.setMonth(nextMonth);
  },
  setPreviousMonth: () => {
    // console.log(stateProps.calendar); // {month: 10, year: 2020}　現在の年月
    // console.log(getPreviousMonth(stateProps.calendar)); // getPreviousMonthメソッド {month: 9, year: 2020}　現在の年月の先月
    const previousMonth = getPreviousMonth(stateProps.calendar);
    // console.log(dispatchProps.setMonth(previousMonth)); // undefined
    dispatchProps.setMonth(previousMonth);
  },
  setMonth: dayObj => {
    // dayjs → reduxのstate(object)
    const month = formatMonth(dayObj);
    dispatchProps.setMonth(month);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
