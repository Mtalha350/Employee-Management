import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import DirectoryPage from './pages/Directory/DirectoryPage';
import AddEmployeePage from './pages/AddEmployee/AddEmployeePage';
import EditEmployeePage from './pages/EditEmployee/EditEmployeePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<DirectoryPage />} />

          <Route path='/employees/add' element={<AddEmployeePage />} />

          <Route
            path='/employees/:employeeId/edit'
            element={<EditEmployeePage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
