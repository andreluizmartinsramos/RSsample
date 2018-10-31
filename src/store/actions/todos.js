import api from "../../services/api";

export const addTodo = text => async dispatch => {
  dispatch(toggleLoading());

  const user = await api.get(`users/5ba92e7e67387a2bf06197ab`);

  dispatch(addTodoSuccess(user.data.name));
};

const toggleLoading = () => ({
  type: "TOGGLE_LOADING"
});

const addTodoSuccess = text => ({
  type: "ADD_TODO",
  payload: { text }
});
