import React, { useState } from "react";
import "./Madvice.css";

const adviceSections = [
  {
    id: 1,
    title: "Relationship Advice",
    adviceList: [
      {
        id: 1,
        title: "Communicate openly",
        description:
          "Communication is the key to any successful relationship. Be honest and open with your partner about your feelings and needs.",
      },
      {
        id: 2,
        title: "Spend quality time together",
        description:
          "Make time for each other and do things you both enjoy. Whether it's a date night or a weekend getaway, make the most of your time together.",
      },
    ],
  },
  {
    id: 2,
    title: "Career Advice",
    adviceList: [
      {
        id: 1,
        title: "Set goals",
        description:
          "Setting clear goals can help you stay motivated and focused on your career. Make sure your goals are specific, measurable, achievable, relevant, and time-bound.",
      },
      {
        id: 2,
        title: "Continuously learn and grow",
        description:
          "The world is constantly changing, so it's important to keep learning and developing new skills. Attend workshops, read books, and take online courses to stay up-to-date in your field.",
      },
    ],
  },
];

const Madvice = () => {
  const [selected, setSelected] = useState(0);

  const handleButtonClick = (index) => {
    setSelected(index);
  };

  return (
    <div className="containeRr">
      <div className="button-group">
        {adviceSections.map((section, index) => (
          <button
            key={section.id}
            className={`button ${selected === index ? "selected" : ""}`}
            onClick={() => handleButtonClick(index)}
          >
            {section.title}
          </button>
        ))}
      </div>
      <div className="advice-cards">
        {adviceSections[selected].adviceList.map((advice) => (
          <div key={advice.id} className="advice-card">
            <h3 className="advice-title">{advice.title}</h3>
            <p className="advice-description">{advice.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Madvice;
