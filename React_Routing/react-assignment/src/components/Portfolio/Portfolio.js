import React from "react";
import Typewriter from "typewriter-effect";

export const Portfolio = ({ handleSectionClick }) => {
  // let handleMethod = props.handleMethod;
  //component first time render huda run hunch

  return (
    <h1>
      I am a &nbsp;
      <Typewriter
        options={{
          strings: [
            "Learner ?",
            "Tech Enthusiast ?",
            "Teacher ?",
            "Still Discovering yo! :)",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
};
