import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { Employee } from '../../features/Directory/types/employee.types';
import { getEmployees } from '../../features/Directory/services/employeeStorage';

interface EmployeesState {
  employees: Employee[];
  search: string;
  departmentFilter: string;
  statusFilter: string;
}

const initialState: EmployeesState = {
  employees: getEmployees(),
  search: '',
  departmentFilter: 'All',
  statusFilter: 'All',
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.unshift(action.payload);
    },

    updateEmployee: (state, action: PayloadAction<Employee>) => {
      const employeeIndex = state.employees.findIndex(
        (employee) => employee.id === action.payload.id,
      );

      if (employeeIndex !== -1) {
        state.employees[employeeIndex] = action.payload;
      }
    },

    deleteEmployee: (state, action: PayloadAction<string>) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload,
      );
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    setDepartmentFilter: (state, action: PayloadAction<string>) => {
      state.departmentFilter = action.payload;
    },

    setStatusFilter: (state, action: PayloadAction<string>) => {
      state.statusFilter = action.payload;
    },

    resetFilters: (state) => {
      state.search = '';
      state.departmentFilter = 'All';
      state.statusFilter = 'All';
    },
  },
});

export const {
  addEmployee,
  updateEmployee,
  deleteEmployee,
  setSearch,
  setDepartmentFilter,
  setStatusFilter,
  resetFilters,
} = employeesSlice.actions;

export default employeesSlice.reducer;
