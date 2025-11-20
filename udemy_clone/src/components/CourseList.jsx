import { courses } from "../data/courses";
import "./CourseList.css";

export default function CourseList() {
  return (
    <div className="courses-section">
      <h2>Students are viewing</h2>

      <div className="course-grid">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.instructor}</p>
            <span>⭐ {course.rating}</span>
            <strong>${course.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
