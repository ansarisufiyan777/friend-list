import { ADD_FRIEND, CHANGE_PAGE, SEARCH_FRIEND, SHOW_ALERT, SORT_FAV, SORT_ON_NAME, TOGGLE_DELETE, TOGGLE_FAVOURITE } from "../Constants";

export const addFriend = (value) => {
  return (dispatch) => {
    dispatch({
      type: ADD_FRIEND,
      payload: value,
    });
  };
};
export const searchFriend = (value) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_FRIEND,
      payload: value,
    });
  };
};
export const toggleToFavourite = (value) => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_FAVOURITE,
      payload: value,
    });
  };
};
export const toggleDelete = (value) => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_DELETE,
      payload: value,
    });
  };
};
export const paginate = (value) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_PAGE,
      payload: value,
    });
  };
};
export const applySortOnName = (value) => {
  return (dispatch) => {
    dispatch({
      type: SORT_ON_NAME,
      payload: value,
    });
  };
};
export const applySortOnFav = (value) => {
  return (dispatch) => {
    dispatch({
      type: SORT_FAV,
      payload: value,
    });
  };
};
export const showAlert = (value) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: value,
    });
  };
};