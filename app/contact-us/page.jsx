"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactUs = () => {
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
    <div className="bg-contact bg-cover bg-center bg-fixed">
      <div className="backdrop-brightness-50 contrast-125 min-h-screen justify-center flex flex-col w-full text-white">
        <div className="flex flex-col-reverse md:flex-row pt-14 md:px-32">
          <motion.div
            variants={fadeLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col md:w-2/3 p-6"
          >
            <motion.div
              variants={fadeLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="hidden md:flex justify-end py-8"
            >
              <Image
                src={"/white-line.svg"}
                width={350}
                height={0}
                alt="white line"
              />
            </motion.div>
            <div className="my-5">
              <h1 className="text-2xl font-semibold">Get in Touch!</h1>
              <p className="text-xs font-normal">Do not hesitate to ask us:</p>
            </div>
            <div className="my-5">
              <h1 className="font-bold text-xs my-2">OUR OFFICE</h1>
              <p className="text-xs font-normal">
                The Boardroom Partnership <br />
                Simpruk Golf XII Kav 3A, <br />
                Jakarta Selatan, 12310 <br />
                Indonesia <br />
                <br />
                With Rep Offices in Singapore and Antwerp
              </p>
            </div>
            <div className="text-sm font-normal my-5">
              info@theboardroompartnership.com
            </div>

            <div className="">
              <h1 className="font-bold text-xs my-2">PERSONAL CONTACT</h1>
              <h1 className="font-bold text-sm ">Dr. Tanri Abeng, MBA</h1>
              <p className="text-xs font-normal">
                Co-Founder and Chairman of <br />
                The Boardroom Partnership
              </p>
              <ul className="flex max-w-sm my-4 pr-10 justify-between">
                <Link
                  href={
                    "https://www.linkedin.com/school/tanri-abeng-university/"
                  }
                  className="border-2 rounded-full p-2 brightness-75 hover:brightness-100"
                  target="_blank"
                >
                  <FaLinkedinIn size={20} />
                </Link>
                <Link
                  href={"mailto:tanriabeng42@gmail.com"}
                  className="border-2 rounded-full p-2 brightness-75 hover:brightness-100"
                  target="_blank"
                >
                  <FiMail size={20} />
                </Link>
                <div className="p-2 border-2 border-transparent">
                  <FaFacebookF size={20} className="fill-transparent" />
                </div>
                <div className="p-2 border-2 border-transparent">
                  <FaInstagram size={20} className="fill-transparent" />
                </div>
              </ul>
            </div>
            <div className="">
              <h1 className="font-bold text-xs my-2">PERSONAL CONTACT</h1>
              <h1 className="font-bold text-sm ">
                Dr. Peter Verhezen, MA, MBA
              </h1>
              <p className="text-xs font-normal">
                Co-Founder and Senior Partner <br />
                The Boardroom Partnership
              </p>
              <ul className="flex max-w-sm justify-between my-4 pr-10">
                <Link
                  href={"https://www.facebook.com/peter.verhezen.9"}
                  className="border-2 rounded-full p-2 brightness-75 hover:brightness-100"
                  target="_blank"
                >
                  <FaFacebookF size={20} />
                </Link>
                <Link
                  href={
                    "https://www.linkedin.com/in/peter-verhezen-a6b7a03/?originalSubdomain=be"
                  }
                  className="border-2 rounded-full p-2 brightness-75 hover:brightness-100"
                  target="_blank"
                >
                  <FaLinkedinIn size={20} />
                </Link>
                <Link
                  href={"https://www.instagram.com/verhezenp/"}
                  className="border-2 rounded-full p-2 brightness-75 hover:brightness-100"
                  target="_blank"
                >
                  <FaInstagram size={20} />
                </Link>
                <Link
                  href={"mailto:p.verhezen@gmail.com"}
                  className="border-2 rounded-full p-2 brightness-75 hover:brightness-100"
                  target="_blank"
                >
                  <FiMail size={20} />
                </Link>
              </ul>
            </div>
          </motion.div>
          {/* FORM */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col justify-center w-full p-6"
          >
            <form
              action="https://formsubmit.co/hologram171@gmail.com"
              method="POST"
            >
              {/* <input type="hidden" name="_captcha" value="false"></input>
              <input type="hidden" name="_next" value="/"></input> */}
              <div className="flex flex-col md:flex-row justify-around my-5 gap-10">
                <div className="md:w-1/2">
                  <label className="font-bold text-xs">NAME</label>
                  <br />
                  <input
                    name="Name"
                    type="text"
                    className="w-full rounded-none border-b-2 focus:outline-none bg-transparent my-4 brightness-75 focus:brightness-200"
                    required
                  />
                </div>
                <div className="md:w-1/2">
                  <label className="font-bold text-xs">EMAIL</label>
                  <br />
                  <input
                    name="Email"
                    type="email"
                    className="w-full rounded-none border-b-2 focus:outline-none bg-transparent my-4 brightness-75 focus:brightness-200"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:w-1/2">
                <label className="font-bold text-xs">MESSAGE</label>
                <br />
                <textarea
                  name="Message"
                  type="text"
                  rows="5"
                  maxLength="300"
                  className="w-full border-2 rounded focus:outline-none bg-transparent p-2 brightness-75 focus:brightness-200"
                  required
                />
                <button
                  type="submit"
                  className="self-center md:self-end cursor-pointer font-bold text-xs my-5 md:my-2 border rounded-full py-2 px-6 brightness-75 hover:brightness-200 "
                >
                  SEND
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
