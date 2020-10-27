import {
  ADD_SCHEDULE_SET_VALUE,
  ADD_SCHEDULE_OPEN_DIALOG,
  ADD_SCHEDULE_CLOSE_DIALOG
} from "./action";

const initState = {
  form: {
    title: "",
    description: "",
    date: null,
    location
  },
  isDialogOpen: false
};

const addScheduleReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SCHEDULE_SET_VALUE:
      return { ...state, form: { ...state.form, ...payload } };
    case ADD_SCHEDULE_OPEN_DIALOG:
      return { ...state, isDialogOpen: true };
    case ADD_SCHEDULE_CLOSE_DIALOG:
      return initState;
    default:
      return state;
  }
};

export default addScheduleReducer;
