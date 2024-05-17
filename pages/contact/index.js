// components
import React from "react";
import { useState, useEffect } from "react";
import MessageSuccessPopUp from "../../components/MessageSuccessPopUp";
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
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { values } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await sendContactForm(values);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      setState(initState);
    } catch (error) {
      error = error.message;
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      setState(initState);
      console.log(error);
    }
  };

  return (
    <div className="h-full bg-primary/30 py-24 text-center ">
      <div className="container mx-auto text-center xl:text-left flex xl:flex-row flex-col items-center justify-center pb-10  ">
        {success ? (
          <MessageSuccessPopUp message={"success"} />
        ) : error ? (
          <MessageSuccessPopUp message={"error"} />
        ) : (
          <div className="container mx-auto flex flex-col items-center ">
            {/* text and form */}
            <div className="flex flex-col w-full max-w-[700px] ">
              {/* text */}
              <motion.h2
                variants={fadeIn("right", 0.2)}
                intial="hidden"
                animate="show"
                exit="hidden"
                className="h2 text-center"
              >
                {" "}
                <span> Let&apos;s </span>
                <span className="text-accent">connect</span>{" "}
                <span className="text-white">.</span>
              </motion.h2>

              <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className=" xl:mx-0 px-2 mb-2"
              >
                Please Drop A Message If You Like To Recruit Me Or Talk About
                Some Random Stuff About Front-End Development...
              </motion.p>

              {/* form */}

              <form
                variants={fadeIn("up", 0.4)}
                intial="hidden"
                animate="show"
                exit="hidden"
                className="flex-1 flex flex-col gap-3 xl:gap-6 w-full mx-auto"
              >
                {/* input group */}
                <div className="flex gap-x-3 xl:gap-x-6 w-full">
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
                <div className="flex gap-x-3 xl:gap-x-6 w-full">
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
                  className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group "
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
        )}
      </div>
    </div>
  );
};

export default Contact;
