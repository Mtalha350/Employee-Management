import { configureStore } from '@reduxjs/toolkit';

import employeeReducer from './employees/employeeSlice';
import { saveEmployees } from '../features/Directory/services/employeeStorage';

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();

  saveEmployees(state.employees.employees);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
