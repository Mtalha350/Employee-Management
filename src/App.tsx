import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import DirectoryPage from './pages/Directory/DirectoryPage';
import AddEmployeePage from './pages/AddEmployeePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<DirectoryPage />} />

          <Route path='/employees/add' element={<AddEmployeePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
