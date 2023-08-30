"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const peter = () => {
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
            <p className="text-xs font-bold">ABOUT US &gt; PETER VERHEZEN</p>
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
                src={"/profile2.png"}
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
                <h1 className="text-2xl font-semibold mb-4 mt-8">
                  Peter Verhezen
                </h1>
                <p className="max-w-2xl overflow-y-autox text-xs">
                  Dr Peter Verhezen is a Professor of strategy, sustainability
                  and corporate governance at the University of Antwerp and the
                  Antwerp Management School (Belgium), and he used to lead a
                  consultancy firm in Southeast Asia that specializes in
                  Coaching & Advising Corporations and their Boards on Risk
                  Management and Corporate Governance – now merged with The
                  Boardroom Partnership. He was a former award-winning Associate
                  Professor for global corporate governance at the University of
                  Melbourne and Adjunct Professor at Melbourne Business School
                  (Australia), and a Research Fellow for Governance at the Ash
                  Institute of the Harvard Kennedy School (USA). <br /> <br />
                  Peter published in the field of responsible leadership,
                  governance and sustainability, and business in emerging
                  markets in academic journals, and wrote about these topics in
                  six books. He also trained and coached top executives and new
                  incoming board members on Governance &amp; Ethics in
                  Singapore, Hong Kong and Shanghai on behalf of the Australian
                  Institute of Company Directors. He has been a guest speaker or
                  visiting professor at a number of institutes like The European
                  Parliament, Fudan University in Shanghai, Insead Singapore,
                  Singapore Management University, Hong Kong University, IBS and
                  HSE in Moscow, Hanoi Banking Institute, the World Bank in
                  Washington, Stockholm University, Budapest Corvinus
                  University, Neoma Business School in France, and Institut
                  Teknologi Bandung, IPMI, UGM, Universitas Indonesia, ECGL and
                  UPH in Indonesia to name a few. <br /> <br />
                  Early in his career in the late 80s, he was briefly the MBA
                  director and acting dean at the IEU Business School in Jakarta
                  (Indonesia). He started his advisory career at SWIFT on behalf
                  of IBM consultancy in the early nineties. As a practitioner,
                  Peter worked as senior consultant in the field of corporate
                  governance for IFC–World Bank in Asia Pacific, and as a debt
                  negotiator-advisor for IBRA–IMF during the (1998–2001) “Asian
                  crisis”. In 1993, he co-founded and ran an IBM spin-off
                  software company, Cimad Pacific, for more than 15 years in
                  Southeast Asia and Australia till it was acquired by another
                  international consultancy. <br />
                  <br />
                  Peter studied Economics & International Relations (MA from
                  University of Antwerp), Management-Finance (MBA from Louvain
                  University in collaboration with Chicago Booth School), and
                  Philosophy (MA & PhD from the University of Louvain-KUL). He
                  lives with his family part-time in Bali, Indonesia, and
                  part-time in Antwerp, Belgium.
                  <br />
                  <br />
                </p>
                <div className="flex text-xs gap-5 italic ">
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
                </div>
                <div className="flex items-center my-4 gap-8">
                  {/* <Link
                    href={""}
                    className="border rounded-full p-2 brightness-75 hover:brightness-150"
                  >
                    <BsGlobe2 size={20} />
                  </Link> */}
                  <Link
                    href={
                      "https://www.linkedin.com/in/peter-verhezen-a6b7a03/?originalSubdomain=be"
                    }
                    className="border rounded-full p-2 brightness-75 hover:brightness-150"
                    target="_blank"
                  >
                    <FaLinkedinIn size={20} />
                  </Link>
                  <Link
                    href={"mailto:p.verhezen@gmail.com"}
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
        <div className="">
          <motion.div
            variants={fadeLeft}
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
          <motion.h1
            variants={fadeRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white my-8 pl-28"
          >
            Publications
          </motion.h1>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-16"
          >
            <div className=" flex flex-col items-center">
              <Link
                href={"https://www.peterlang.com/document/1105971"}
                className="relative w-64 h-[370px]"
                target="_blank"
              >
                <Image src={"/book1.jpeg"} fill objectFit="cover" alt="book1" />
              </Link>
              <label className="text-white text-sm my-2">2009</label>
            </div>
            <div className=" flex flex-col items-center">
              <div className="relative w-64 h-[370px]">
                <Image src={"/book2.jpg"} fill objectFit="cover" alt="book4" />
              </div>
              <label className="text-white text-sm my-2">2012</label>
            </div>
            <div className=" flex flex-col items-center">
              <Link
                href={"https://link.springer.com/book/10.1057/9781137547378"}
                className="relative w-64 h-[370px]"
                target="_blank"
              >
                <Image src={"/book3.jpeg"} fill objectFit="cover" alt="book2" />
              </Link>
              <label className="text-white text-sm my-2">2015</label>
            </div>
            <div className=" flex flex-col items-center">
              <Link
                href={
                  "https://link.springer.com/book/10.1007/978-3-319-41790-5"
                }
                className="relative w-64 h-[370px]"
                target="_blank"
              >
                <Image src={"/book4.jpeg"} fill objectFit="cover" alt="book3" />
              </Link>
              <label className="text-white text-sm my-2">2016</label>
            </div>
            <div className=" flex flex-col items-center">
              <Link
                href={
                  "https://www.degruyter.com/document/doi/10.1515/9783110787634/html?lang=en"
                }
                className="relative w-64 h-[370px]"
                target="_blank"
              >
                <Image
                  src={"/product-a.jpeg"}
                  fill
                  objectFit="cover"
                  alt="bookA"
                />
              </Link>
              <label className="text-white text-sm my-2">2022</label>
            </div>
            <div className=" flex flex-col items-center">
              <Link
                href={"https://www.worldscientific.com/doi/epdf/10.1142/13192"}
                className="relative w-64 h-[370px]"
                target="_blank"
              >
                <Image src={"/book5.jpg"} fill objectFit="cover" alt="book4" />
              </Link>
              <label className="text-white text-sm my-2">2023</label>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default peter;
