import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/courseManagement.css";

const API_URL = "http://localhost:5000/api/admin/courses";

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setCourses(response.data);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDeactivate = async (id) => {
    try {
      await axios.put(`${API_URL}/${id}`, {
        isActive: false,
      });
      fetchCourses();
    } catch (error) {
      console.error("Deactivate failed:", error);
    }
  };

  return (
    <div className="course-container">
      <div className="course-header">
        <h2>Courses Management</h2>
        <button className="add-btn">+ Add New Course</button>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Department</th>
              <th>Fees</th>
              <th>Duration</th>
              <th>Eligibility</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="8">Loading...</td>
              </tr>
            ) : courses.length === 0 ? (
              <tr>
                <td colSpan="8">No Courses Found</td>
              </tr>
            ) : (
              courses.map((course) => (
                <tr key={course._id}>
                  <td>
                    <strong>{course.courseName}</strong>
                  </td>

                  <td>{course.department}</td>

                  <td>
                    <div>Year: ₹{course.fees?.perYear?.toLocaleString()}</div>
                    <div>Sem: ₹{course.fees?.perSemester?.toLocaleString()}</div>
                    <div>Total: ₹{course.fees?.totalCourse?.toLocaleString()}</div>
                  </td>

                  <td>
                    {course.duration?.years} yrs /{" "}
                    {course.duration?.semesters} sem
                  </td>

                  <td>
                    {course.eligibility?.qualification}
                    <br />
                    Min: {course.eligibility?.minimumPercentage}%
                  </td>

                  <td>
                    {new Date(
                      course.admissionDeadline
                    ).toLocaleDateString("en-IN")}
                  </td>

                  <td>
                    <span
                      className={
                        course.isActive
                          ? "status-active"
                          : "status-inactive"
                      }
                    >
                      {course.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td>
                    <button className="edit-btn">Edit</button>

                    {course.isActive && (
                      <button
                        className="delete-btn"
                        onClick={() => handleDeactivate(course._id)}
                      >
                        Deactivate
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        Showing {courses.length} entries
      </div>
    </div>
  );
};

export default CourseManagement;