import "./contactFAQ.css";

import FAQdata from "../FAQdata";
import { useState } from "react";

function ContactFAQ() {
  const [visibleAnswers, setVisibleAnswers] = useState([]);

  function toggleAnswerVisibility(idx) {
    setVisibleAnswers((prevVisibleAnswers) => {
      const newVisibleAnswers = [...prevVisibleAnswers];
      newVisibleAnswers[idx] = !newVisibleAnswers[idx];
      return newVisibleAnswers;
    });
  }

  return (
    <div className="contactFAQ_outer">
      <div className="contactFAQ_inner">
        <div id="contactFAQ_heading">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-container">
          {FAQdata.map((e, idx) => {
            return (
              <div key={idx} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleAnswerVisibility(idx)}
                >
                  <div>
                    <strong>{e.question}</strong>
                  </div>
                </button>
                {visibleAnswers[idx] && (
                  <div className="faq-answer">
                    <p>{e.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContactFAQ;
