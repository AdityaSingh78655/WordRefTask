import { ADD_ITEM, EDIT_ITEM, REMOVE_FAVORITE } from "./ActionType";

export const addItem = (data) => {

  return {
    type: ADD_ITEM,
    payload: data,
  };
};

export const removeFavorite = (id) => {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
  };
};

export const editItem = (index, updatedItem) => ({
  type: EDIT_ITEM,
  payload: { index, updatedItem },
});
