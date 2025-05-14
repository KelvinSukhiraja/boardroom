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
  const pri = "/our-team/pri" === segment;
  const natalia = "/our-team/natalia" === segment;

  var pName = "not available";
  var desc = "not available";
  var profilePic;
  var linkedin;
  var personalWeb;

  if (ian) {
    linkedin = "https://www.linkedin.com/in/ian-buchanan-b7134817/";
    profilePic = "/profile-C.png";
    pName = "Ian Buchanan";
    desc = "Ian Buchanan is the Emeritus Chairman of PWC Strategy.";
    personalWeb = "http://www.aseandevelopment.com.au/ian-buchanan/";
  } else if (natalia) {
    linkedin =
      "https://transparencyschool.org/lecturer/natalia-soebagjo/";
    profilePic = "/partnerB_profile.jpg";
    pName = "Natalia Soebagjo";
    desc = "Natalia Soebagjo is a former board member of Transparency International (2013-2019) and is currently a member of its International Council.  She was also a  former Chair of the Executive Board of Transparency International Indonesia. She served as the Executive Director, Centre for the Study of Governance at the University of Indonesia, established with the support of the CSIS Hills Program on Governance; was Member and Secretary, Independent Team on Bureaucratic Reform, which provided policy advice to the Steering Committee for National Bureaucratic Reform, Indonesia chaired by then-Vice President Boediono.\n\nCurrently, she is an Independent Commissioner on a listed company in Indonesia and an advisor to the Indonesian Global Compact Network,  member of the expert panel of the Indonesian National Committee of Governance Policy and is active in KAKI (Coalition Against Corruption initiated by CIPE and Indonesian Institute of Corporate Governance).\n\nHer other interests are also reflected in her involvement as a board member of a number of CSOs, including  WWF Indonesia, Publish What You Pay Indonesia, TIFA Foundation and Prestasi Junior (member of Junior Achievement worldwide). Natalia’s academic interest is focused on Modern China and has published articles in this field. Natalia’s experience in the private sector and in civil society organisations has also nurtured a pursuit for a more equitable society, corporate governance and sustainable development. She studied Chinese Studies  at the University of Indonesia and holds a master’s degree in Asian Studies focussing on modern Chinese society from Berkeley University (California – USA).\n\nhttps://www.weforum.org/people/natalia-soebagjo/\nhttps://dfinusantara.co.id/corporate/commissioner/642";
    personalWeb =
      "https://www.weforum.org/people/natalia-soebagjo/";
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
              <img
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
                <h1 className="text-2xl font-semibold mb-4 mt-8">{pName}</h1>
                <p className="max-w-2xl overflow-y-autox text-xs whitespace-pre-wrap">
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
