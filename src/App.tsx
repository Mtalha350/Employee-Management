import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import DirectoryPage from './features/Directory/DirectoryPage';
import AddEmployeePage from './features/AddEmployee/AddEmployeePage';
import EditEmployeePage from './features/EditEmployee/EditEmployeePage';
import EmployeeDetailPage from './features/EmployeeDetail/EmployeeDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
}
