"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const danny = () => {
  const fadeLeft = {
    initial: {
      opacity: 0,
      x: "-10vw",
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2.5,
      },
    },
  };
  const fadeRight = {
    initial: {
      opacity: 0,
      x: "10vw",
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2.5,
      },
    },
  };
  const fadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        type: "spring",

        duration: 3,
      },
    },
  };
  return (
    <div className="bg-primary h-fit">
      <div className="flex flex-col items-center md:px-28 px-5 py-6 w-fit overflow-x-hidden">
        <div className="min-h-screen">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="p-3"
          >
            <Link href={"/"}>
              <img
                src={"/whitelogo.svg"}
                alt="logo"
                width={90}
                height={108}
                href={"/"}
              />
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex items-center gap-2 text-white my-4"
          >
            <Link href={"/our-team"}>
              <AiOutlineArrowLeft />
            </Link>
            <p className="text-xs font-bold">OUR TEAM &gt; Danny Samson</p>
          </motion.div>
          <div className="flex flex-col md:flex-row">
            <motion.div
              variants={fadeLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative w-72 h-96  md:w-96 md:h-[450px] self-center m-3 "
            >
              <img
                src={"/profileDanny.jpg"}
                fill
                alt="profile"
                className="object-center object-cover w-full h-full"
              />
            </motion.div>
            <div className="text-white md:ml-28 flex flex-col justify-center">
              <motion.div
                variants={fadeRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <img
                  src={"/white-line.svg"}
                  width={300}
                  height={0}
                  alt="white line"
                  className="hidden md:flex"
                />
              </motion.div>
              <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="md:pl-20"
              >
                <h1 className="text-2xl font-semibold mb-4 mt-8">
                Dr. Danny Samson
                </h1>
                <p className="max-w-2xl overflow-y-autox text-xs">
                Dr. Danny Samson is a highly esteemed Professor of Management at the University of Melbourne, where he has dedicated over three decades to academia. He has also gained extensive engineering experience over 35 years. Dr. Samson’s expertise spans various industries, allowing him to collaborate with senior executives and provide valuable insights.                <br/> <br /> 
                He co-founded ESG perform, a consultancy in sustainability in Australia. At ESG Perform, Dr. Samson leverages his academic rigor, chemical engineering background, and extensive research to drive ESG innovation and leadership. He has spearheaded the design and implementation of innovative ESG scoring, measurement, and improvement approaches for listed companies, large private companies, and investment fund managers. His expertise is unparalleled in the field, surpassing even many world-leading consulting firms and individuals working on ESG compliance for listed entities and fund managers.
 <br/>
                 <br />
                 Dr. Samson’s professional accomplishments extend beyond academia. He has served as a board director and advisor to global business leaders in diverse industries, including food, building products, paper and printing, chemicals, processing, banking, engineering/construction, logistics, and many others. Notably, he has contributed his strategic management and business development expertise to renowned organizations such as Toyota, National Australia Bank, PETRONAS (Malaysia), and numerous others.                  <br />
                  <br />
                  Danny Samson has a B.Chemical Engineering (Hons) from UNSW and holds a PhD in Management from the Australian Graduate School of Management, UNSW. He is a renowned management researcher, consultant, and executive educator in Australia with expertise in business strategy, 7 operations management, decision analysis, and sustainable development. He is a global leader in ESG and innovation management.
                  <br/><br/>
                  <h1>Highlights:</h1>
                  <ul className="list-disc my-4 max-w-xl list-inside text-xs md:text-base">
              <li className="text-xs">
              To review or enhance the purpose of an organization, to fine-tune the generic direction of
sustainability the organization wants to move on to.
              </li>
              <li className="text-xs">
              To think and reflect about embracing new technology like (Gen) Artificial Intelligence
while installing proper AI governance guardrails.
              </li>
              <li className="text-xs">
              To critically reflect and improve the associated risks and opportunities with respect to
more reasonable and responsible business decisions.
              </li>
              <li className="text-xs">
To strengthen the appropriate and adapted structures to put the right risk and
sustainability management in place.</li>
              <li className="text-xs">
              To help develop people and talent at the organization to execute such a sustainability
strategy.
              </li>
            </ul>
                 
                </p>
               
                <div className="flex items-center my-4 gap-8">
                  
                  <Link
                    href={
                      "https://www.linkedin.com/in/danny-samson-4129209/?originalSubdomain=au"
                    }
                    className="border rounded-full p-2 brightness-75 hover:brightness-150"
                    target="_blank"
                  >
                    <FaLinkedinIn size={20} />
                  </Link>
                  <Link
                    href={"mailto:d.samson@unimelb.edu.au"}
                    className="border rounded-full p-2 brightness-75 hover:brightness-150"
                    target="_blank"
                  >
                    <FiMail size={20} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default danny;
