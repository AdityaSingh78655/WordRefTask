import {
  ADD_ITEM,
  REMOVE_FAVORITE,
  EDIT_ITEM,
} from "./ActionType";

const initialState = {
  addedItem: [],
  addFavourite: [],
  notes: [],
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        addedItem: [...state.addedItem, action.payload],
      };
    }

    case REMOVE_FAVORITE: {
      const updatedFavorites = state.addFavourite.filter(
        (favorite) => favorite !== action.payload
      );
      return {
        ...state,
        addFavourite: updatedFavorites,
      };
    }

    case EDIT_ITEM:
      const { index, updatedItem } = action.payload;
      const updatedNotes = [...state.notes];
      updatedNotes[index] = updatedItem;
      return {
        ...state,
        notes: updatedNotes,
      };

    default:
      return state;
  }
};

export default reducers;
