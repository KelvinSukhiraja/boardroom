"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const natalia = () => {
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
            <p className="text-xs font-bold">OUR TEAM &gt; Natalia Soebagjo</p>
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
                src={"/partnerB_profile.jpg"}
                fill
                alt="profile"
                className=" object-center object-cover w-full h-full"
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
                Natalia Soebagjo
                </h1>
                <p className="max-w-2xl overflow-y-autox text-xs">
                Natalia Soebagjo is a former board member of Transparency International (2013-2019) and is currently a
member of its International Council.  She was also a  former Chair of the Executive Board of Transparency
International Indonesia.
<br/><br/>
She served as the Executive Director, Centre for the Study of Governance at the University of Indonesia,
established with the support of the CSIS Hills Program on Governance; was Member and Secretary,
Independent Team on Bureaucratic Reform, which provided policy advice to the Steering Committee for
National Bureaucratic Reform, Indonesia chaired by then-Vice President Boediono. 
Currently, she is an Independent Commissioner on a listed company in Indonesia and an advisor to the
Indonesian Global Compact Network,  member of the expert panel of the Indonesian National Committee of
Governance Policy and is active in KAKI (Coalition Against Corruption initiated by CIPE and Indonesian Institute
of Corporate Governance)
<br/><br/>
Her other interests are also reflected in her involvement as a board member of a number of CSOs, including 
WWF Indonesia, Publish What You Pay Indonesia, TIFA Foundation and Prestasi Junior (member of Junior
Achievement worldwide)
<br/><br/>
Natalia’s academic interest is focused on Modern China and has published articles in this field. Natalia’s
experience in the private sector and in civil society organisations has also nurtured a pursuit for a more
equitable society, corporate governance and sustainable development.
<br/><br/>
She studied Chinese Studies  at the University of Indonesia and holds a master’s degree in Asian Studies
focussing on modern Chinese society from Berkeley University (California – USA).
                  <br/><br/>
                  <Link
                  target="_blank"
                    href={"https://transparencyschool.org/lecturer/natalia-soebagjo/"}
                    className="font-bold underline hover:text-gray-300"
                  >
                    https://transparencyschool.org/lecturer/natalia-soebagjo/
                  </Link>
                  <br/>
                  <Link
                  target="_blank"
                    href={"https://www.weforum.org/people/natalia-soebagjo/"}
                    className="font-bold underline hover:text-gray-300"
                  >
                    https://www.weforum.org/people/natalia-soebagjo/
                  </Link>
                  <br/>
                  <Link
                  target="_blank"
                    href={"https://dfinusantara.co.id/corporate/commissioner/642"}
                    className="font-bold underline hover:text-gray-300"
                  >
                    Board-seats
                  </Link>
                </p>
                {/* <div className="flex text-xs gap-5 italic ">
                  <Link
                    href={"/our-team/peter/blog"}
                    className="text-center border-2 rounded-full p-2 hover:bg-white hover:text-primary"
                  >
                    Blogs-Speaking Engagements
                  </Link>
                  <Link
                    href={"/our-team/peter/downloadables"}
                    className="text-center border-2 rounded-full p-2 hover:bg-white hover:text-primary"
                  >
                    Downloadable Papers
                  </Link>
                </div> */}
                <div className="flex items-center my-4 gap-8">
                  <Link
                    href={
                      "https://www.linkedin.com/in/natalia-soebagjo-84a77a1/?originalSubdomain=id"
                    }
                    className="border rounded-full p-2 brightness-75 hover:brightness-150"
                    target="_blank"
                  >
                    <FaLinkedinIn size={20} />
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

export default natalia;
