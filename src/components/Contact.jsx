import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me...</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://formspree.io/f/xdovokpy"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
           <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
          <iframe className="ml-20 mb-20 mt-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.7104055571638!2d73.94795664836566!3d19.169426907379616!2m3!1f0
          !2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd3c3c60d1b48b%3A0x64bd67e2917569a1!2sVighnahar%20Sahakari%20Sakhar%20Karkhana%2C%20Near%20Ozar%20Village%2C%20Dhal
          ewadi%20Tarf%20Haveli%2C%20Maharashtra%20410504!5e0!3m2!1sen!2sin!4v1672666386876!5m2!1sen!2sin" 
          width="600" height="420" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
