import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./pages/AdminLayout";
import Dashboard from "./pages/Dashboard";
import CourseManagement from "./pages/CourseManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<CourseManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;