import React from "react";
import "../Instructor/Instructor.css";
import student2 from "../../assets/student2.jpg";
import student3 from "../../assets/student3.jpg";
const Instructor = () => {
  return (
    <div className="instructor">
      <h2>Instructor</h2>
      <div className="top-i">
        <div className="top-i-1">
          <img src={student2} alt="" />
        </div>
        <div className="top-i-2">
          <h3>
            Become <span>An Instructor </span>of Our Platform
          </h3>
          <span>
            Meet our esteemed course instructor, a seasoned professional
            dedicated to guiding you through every aspect of your learning
            journey. With their wealth of experience and passion for teaching,
            they ensure an enriching and rewarding educational experience for
            all students.
          </span>
          <button>Start Teaching</button>
        </div>
      </div>
      <div className="bottom-i">
        <div className="bottom-i-1">
          <h3>
            Become <span>An Instructor </span>of Our Platform
          </h3>
          <span>
            Meet our esteemed course instructor, a seasoned professional
            dedicated to guiding you through every aspect of your learning
            journey. With their wealth of experience and passion for teaching,
            they ensure an enriching and rewarding educational experience for
            all students.
          </span>
          <button>Start Teaching</button>
        </div>
        <div className="bottom-i-2">
          <img src={student3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Instructor;
