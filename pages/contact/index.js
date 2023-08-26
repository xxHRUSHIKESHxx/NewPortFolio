// components
import React from "react";
import { useState } from "react";


//icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

import { fadeIn } from "../../variants";
import { sendContactForm } from "../../lib/api";

const Contact = () => {
  const initValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  const initState = { values: initValues };
  const [state, setState] = useState(initState);

  const { values } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {

    try{
    await sendContactForm(values);
  }

  catch(error){
    error = error.message;
    console.log(error);
  }
 
  };

  const mapOptions = {
    center: { lat: 20.3025, lng: 85.95003 },
    zoom: 12,
    // Other map options
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-24 text-center xl:text-left flex xl:flex-row flex-col items-center justify-center h-full ">


        <div className="container mx-auto flex flex-col items-center ">
          {/* text and form */}
          <div className="flex flex-col w-full max-w-[700px] ">
            {/* text */}
            <motion.h2
              variants={fadeIn("right", 0.2)}
              intial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-12"
            >
              {" "}
             <span> Let&apos;s </span><span className="text-hola">connect</span> <span className="text-accent">.</span> 
            </motion.h2>
        
            
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" xl:mx-0 mb-3 px-2  "
            >
              Please Drop A Message If You Like To Recruit Me Or Talk About Some
              Random Stuff About Front-End Development...
            </motion.p>

            {/* form */}

            <form
              variants={fadeIn("up", 0.4)}
              intial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              {/* input group */}
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input"
                  value={values.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-x-6 w-full">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="input"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="subject"
                  className="input"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                />
              </div>

              <textarea
                placeholder="message"
                className="textarea"
                name="message"
                value={values.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-hola group "
                onClick={onSubmit}
              >
                
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 ">
                lets talk
                </span>
               
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]  " />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
