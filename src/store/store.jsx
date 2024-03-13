import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { CurrentUserReducer, setCurrentUser } from "./slices/currentUser";
import { CustomerReducer, setCustomer } from "./slices/customerSlice";
const rootReducer = combineReducers({
  CurrentUser: CurrentUserReducer,
  Customer: CustomerReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { store, setCurrentUser, setCustomer };
