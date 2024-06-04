import React from "react";
import "../Catogeries/Catogeries.css";
import business from "../../assets/Categories/business.png";
import science from "../../assets/Categories/science.png";
import pen from "../../assets/Categories/pen.png";
import laptop from "../../assets/Categories/laptop.png";
const Catogeries = () => {
  return (
    <div className="categories">
      <div className="top-cat">
        <h4>
          Our Top <span>Categories</span>
        </h4>
        <span>
          Explore limitless learning possibilities with our diverse range of
          online courses. From coding to cooking, discover the perfect course to
          fuel your curiosity and passions.
        </span>
      </div>
      <div className="bottom-cat">
        <div>
          <img src={pen} alt="" />
          <h5>Design</h5>
          <span>View More</span>
        </div>
        <div>
          <img src={laptop} alt="" />
          <h5>Development</h5>
          <span>View More</span>
        </div>
        <div>
          <img src={business} alt="" />
          <h5>Business</h5>
          <span>View More</span>
        </div>
        <div>
          <img src={science} alt="" />
          <h5>Science</h5>
          <span>View More</span>
        </div>
      </div>
    </div>
  );
};

export default Catogeries;
