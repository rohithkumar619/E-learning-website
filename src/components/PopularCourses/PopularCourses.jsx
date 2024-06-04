import React from "react";
import "../PopularCourses/PopularCourses.css";
import Dataa from "../../Data/Data";
const PopularCourses = () => {
  return (
    <div className="popularcourse">
      <h4>Most Popular Courses</h4>
      <div className="coursedata">
        {Dataa.map((data) => {
          return (
            <div className="Course">
              <img src={data.image} alt="" />
              <h5>{data.name}</h5>
              <span>{data.type}</span>
              <div>
                <span>{data.college}</span>
                <button>View More</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCourses;
