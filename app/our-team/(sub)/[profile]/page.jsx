"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { BsGlobe2 } from "react-icons/bs";

const page = () => {
  const segment = usePathname();
  const ian = "/our-team/ian" === segment;
  const luc = "/our-team/luc" === segment;
  const pri = "/our-team/pri" === segment;
  console.log(segment, luc, pri);

  var pName = "not available";
  var desc = "not available";
  var profilePic;
  var linkedin;
  var personalWeb;

  if (ian) {
    linkedin = "https://www.linkedin.com/in/ikbuchanan/";
    profilePic = "/profile-C.png";
    pName = "Ian Buchanan";
    desc = "Ian Buchanan is the Emeritus Chairman of PWC Strategy.";
    personalWeb = "http://www.aseandevelopment.com.au/ian-buchanan/";
  } else if (luc) {
    linkedin =
      "https://www.linkedin.com/in/luc-van-liedekerke-855b3158/?originalSubdomain=be";
    profilePic = "/partnerB.png";
    pName = "Prof. Dr. Luc Vanliedekerke";
    desc = "Field of expertise: ESG-Reporting & Sustainability";
    personalWeb =
      "https://www.uantwerpen.be/en/staff/luc-vanliedekerke/publications/";
  } else if (pri) {
    linkedin =
      "https://www.linkedin.com/in/pri3notowidigdo/?originalSubdomain=id";
    profilePic = "/partnerA.png";
    pName = "Pri Notowidigdo";
    desc =
      "Field of Expertise: HR, Communication and Transformation Management";
    personalWeb =
      "https://www.pri-for-people-matters.com/our-partners/pri-notowidigdo";
  }

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
    <div className="bg-primary min-h-screen">
      <div className="flex flex-col items-center md:px-28 px-5 py-6 w-fit overflow-x-hidden">
        <div className="">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="p-3"
          >
            <Link href={"/"}>
              <Image
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
            <p className="text-xs font-bold">ABOUT US &gt; {pName}</p>
          </motion.div>
          <div className="flex flex-col md:flex-row">
            <motion.div
              variants={fadeLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative w-72 h-96  md:w-96 md:h-[450px] self-center m-3 "
            >
              <Image
                src={profilePic}
                fill
                alt="profile"
                className="object-center object-cover"
              />
            </motion.div>
            <div className="text-white md:ml-28 flex flex-col justify-center">
              <motion.div
                variants={fadeRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Image
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
                <h1 className="text-2xl font-semibold mb-4 mt-8">{pName}</h1>
                <p className="max-w-2xl overflow-y-autox text-xs">
                  {desc}
                  <br />
                  <br />
                </p>
                <div className="flex items-center my-4 gap-8">
                  <Link
                    href={personalWeb}
                    className="border rounded-full p-2 brightness-75 hover:brightness-150"
                    target="_blank"
                  >
                    <BsGlobe2 size={20} />
                  </Link>
                  <Link
                    href={linkedin}
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

export default page;
