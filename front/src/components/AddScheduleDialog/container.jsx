import AddScheduleDialog from "./presentaion";
import { connect } from "react-redux";
import {
  addScheduleCloseDialog,
  addScheduleSetValue
} from "../../redux/addSchedule/action";
import { schedulesAddItem } from "../../redux/schedules/action";

const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule: value => {
    dispatch(addScheduleSetValue(value));
  },
  saveSchedule: schedule => {
    dispatch(schedulesAddItem(schedule));
    dispatch(addScheduleCloseDialog());
  }
});

const mergeProps = (stateProps, dispatchToProps) => ({
  ...stateProps,
  ...dispatchToProps,
  saveSchedule: () => {
    const {
      schedule: { form: schedule }
    } = stateProps;
    dispatchToProps.saveSchedule(schedule);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog);
