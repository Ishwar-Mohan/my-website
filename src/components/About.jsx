import React from "react";

const About = () => {
  return (

    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        An aspiring Full Stack Developer with knowledge in Software Engineering as 
        Strong in design and integration with intuitive problem-solving skills. 
        Proficient in JAVA, C# .NET, C & C++, HTML, CSS, JAVASCRIPT, jQuery, REACT and SQL. 
        Passionate about implementing and launching new projects. Ability to translate 
        business requirements into technical solutions and Ability to learn new software 
        and technologies quickly. Can work well under pressure and make the best of any 
        situation with great interpersonal and communication skills.
        </p>
      </div>
    </div>
  );
};

export default About;
