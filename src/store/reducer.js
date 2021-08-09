import { MAKE_SEARCH_REQUEST } from "./actionTypes";

const initState = {
  data: []
};

export const Reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case MAKE_SEARCH_REQUEST:
      return {};
    default:
      return state;
  }
};
