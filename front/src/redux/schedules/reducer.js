import { SCHEDULES_ADD_ITEM } from "./action";

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
        items: [...state.items, { ...payload, id: state.items.length + 1 }]
      };
    default:
      return state;
  }
};

export default scheduleReducer;
