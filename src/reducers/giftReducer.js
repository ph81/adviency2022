import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, CLEAR_LIST } from '../utils/actions';

const giftReducer = (state, action) => {
  if (action.type === ADD_ITEM) {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }

  if (action.type === EDIT_ITEM) {
    const updatedItem = action.payload;

    const updatedItems = state.items.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      }
      return item;
    });

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      items: state.items.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === CLEAR_LIST) {
    return { ...state, list: [] };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default giftReducer;
