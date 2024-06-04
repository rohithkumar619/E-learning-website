import React from "react";
import "../Courses/Courses.css";
import online from "../../assets/onlinecourse.jpg";
const Courses = () => {
  return (
    <div className="courses">
      <div className="left-c">
        <img src={online} alt="" />
      </div>
      <div className="right-c">
        <h5>
          We provide the best <span>online courses</span>
        </h5>
        <span>
          Unlock your potential with our comprehensive online courses. Dive into
          a world of knowledge at your own pace, from anywhere, anytime. Elevate
          your skills and career prospects with our expertly curated content.
        </span>
        <button>Know More</button>
      </div>
    </div>
  );
};

export default Courses;
