import React, { useState } from "react";
import "../Questions/Questions.css";
const Questions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Function to handle click event on questions
  const handleQuestionClick = (index) => {
    // Toggle the selected question
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };
  return (
    <div className="questions">
      <div className="ques">
        <h4 className="q1" onClick={() => handleQuestionClick(0)}>
          What is Skillex?
        </h4>
        {selectedQuestion === 0 && (
          <div className="ans">
            killex is an innovative online learning platform offering a diverse
            range of courses across various disciplines, tailored to suit
            learners of all levels.
          </div>
        )}

        <h4 className="q1" onClick={() => handleQuestionClick(1)}>
          What can I learn from Skillex?
        </h4>
        {selectedQuestion === 1 && (
          <div className="ans">
            Skillex offers courses in coding, design, business, and more,
            providing comprehensive learning opportunities to enhance your
            skills and advance your career.
          </div>
        )}

        <h4 className="q1" onClick={() => handleQuestionClick(2)}>
          Can I teach on Skillex?
        </h4>
        {selectedQuestion === 2 && (
          <div className="ans">
            Skillex welcomes qualified instructors to share their expertise and
            teach courses that align with our platform's educational objectives.
          </div>
        )}

        <h4 className="q1" onClick={() => handleQuestionClick(3)}>
          What is included in my Skillex membership?
        </h4>
        {selectedQuestion === 3 && (
          <div className="ans">
            Skillex membership includes unlimited access to our entire course
            catalog and exclusive resources, empowering you to learn at your own
            pace and achieve your goals efficiently.
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;
