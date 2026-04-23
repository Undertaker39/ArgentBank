import { configureStore } from "@reduxjs/toolkit";

let state = {
    token: null,
    user: {}
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "TOKEN": {
      const Token= [...currentState.token, action.payload];
      return { ...currentState, token: Token };
    }
    case "USER": {
      const User= [...currentState.user, action.payload];
      return { ...currentState, user: User };
    }
    default:
      return currentState;
  }
};

export const store = configureStore({
  preloadedState: state,
  reducer,
});