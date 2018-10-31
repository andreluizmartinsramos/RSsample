const INITIAL_STATE = {
  data: ["fazer coffee"],
  loading: false
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [...state.data, action.payload.text],
        loading: false
      };
    case "TOGGLE_LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
}
