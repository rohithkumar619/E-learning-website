import React from "react";
import "../AboveFooter/AboveFooter.css";
const AboveFooter = () => {
  return (
    <div className="abovefooter">
      <h4>Subscribe Newsletter</h4>
      <span>
        Unlock your potential with limitless learning. Embrace knowledge,
        empower growth – welcome to your educational journey with us.
      </span>
      <div>
        <input type="text" placeholder="Enter your email address" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default AboveFooter;
