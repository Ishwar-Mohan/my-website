import React from "react";
import qcs from "../assets/portfolio/qcs.png";
import ce from "../assets/portfolio/ce.png";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <br></br>
          <br></br>
          <br></br>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Work / Projects
          </p>
          <p className="py-6">Check out some of my work right here..</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
         
            <div className="shadow-md shadow-gray-400 rounded-lg">
              <img
                src= {qcs}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center shadow-md shadow-pink-400 rounded-lg">Quick Care Service</div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href="https://ishwar-mohan-quickcareservice-app.netlify.app/">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://github.com/Ishwar-Mohan/Quick_Care_Services">Code</a>
                </button>
              </div>
              
            </div>

            <div className="shadow-md shadow-green-400 rounded-lg">
              <img
                src={ce}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center shadow-md shadow-gray-400 rounded-lg">Code Editor</div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href="https://ishwar-mohan-code-editor.netlify.app/">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://github.com/Ishwar-Mohan/code-editor">Code</a>
                </button>
              </div>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
