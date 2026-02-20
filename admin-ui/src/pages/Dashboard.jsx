
import SummaryCard from "../components/dashboard/SummaryCard";
import RecentUpdates from "../components/dashboard/RecentUpdates";
import "../styles/dashboard.css";


const Dashboard = () => {
  return (
    <>
      <h2 className="welcome-text">Welcome, Admin 👋</h2>

      <div className="summary-section">
        <SummaryCard title="Total Courses" value="04" />
      </div>

      <RecentUpdates />
    </>
  );
};

export default Dashboard;


