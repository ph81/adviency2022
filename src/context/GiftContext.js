import React, { createContext, useReducer } from 'react';
import giftReducer from '../reducers/giftReducer';

const initialState = {
  items: [{ id: 1, name: 'Nintendo Switch', amount: 1 }],
};

export const GiftContext = createContext(initialState);

export const GiftProvider = ({ children }) => {
  const [state, dispatch] = useReducer(giftReducer, initialState);

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const addItem = (items) => {
    dispatch({ type: 'ADD_ITEM', payload: items });
  };

  const editItem = (items) => {
    dispatch({ type: 'EDIT_ITEM', payload: items });
  };

  return (
    <GiftContext.Provider
      value={{ gifts: state.items, addItem, removeItem, editItem }}
    >
      {children}
    </GiftContext.Provider>
  );
};
