import { Home, BookOpen, GraduationCap, ClipboardList } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="logo">Academic Chatbot</h1>

      <nav>
        <ul>
          <li className="active">
            <Home size={18} /> <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>
            <BookOpen size={18} />{" "}
            <NavLink to="/courses">Course Management</NavLink>
          </li>
          <li>
            <GraduationCap size={18} /> Scholarships
          </li>
          <li>
            <ClipboardList size={18} /> Admission Process
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
