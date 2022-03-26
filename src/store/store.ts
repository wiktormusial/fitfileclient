import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import infosReducer from './infos/infosSlice'

export const store = configureStore({
  reducer: {
    infos: infosReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
