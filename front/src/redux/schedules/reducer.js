import {
  SCHEDULES_ADD_ITEM,
  SCHEDULES_SET_LOADING,
  SCHEDULES_FETCH_ITEM
} from "./action";
import dayjs from "dayjs";

const initState = {
  items: [],
  isLoading: false
};
const scheduleReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SCHEDULES_ADD_ITEM:
      return {
        ...state,
        isLoading: true,
        items: [...state.items, payload]
      };
    case SCHEDULES_SET_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SCHEDULES_FETCH_ITEM:
      return {
        ...state,
        isLoading: false,
        items: payload
      };
    default:
      return state;
  }
};

export default scheduleReducer;
