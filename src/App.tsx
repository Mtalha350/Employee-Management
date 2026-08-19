import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AddEmployeePage from './features/AddEmployee/AddEmployeePage';
import DirectoryPage from './features/Directory/DirectoryPage';
import EditEmployeePage from './features/EditEmployee/EditEmployeePage';
import EmployeeDetailPage from './features/EmployeeDetail/EmployeeDetailPage';
import LoginPage from './features/Auth/LoginPage';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './routes/ProtectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path='/login' element={<LoginPage />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path='/' element={<DirectoryPage />} />

            <Route path='/employees/add' element={<AddEmployeePage />} />

            <Route
              path='/employees/:employeeId'
              element={<EmployeeDetailPage />}
            />

            <Route
              path='/employees/:employeeId/edit'
              element={<EditEmployeePage />}
            />
          </Route>
        </Route>

        {/* Unknown routes */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
}
