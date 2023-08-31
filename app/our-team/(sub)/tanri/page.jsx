"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const tanri = () => {
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
            <p className="text-xs font-bold">ABOUT US &gt; TANRI ABENG</p>
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
                src={"/profileTanri.jpg"}
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
                  Tanri Abeng
                </h1>
                <p className="max-w-2xl overflow-y-autox text-xs">
                  Dr. Tanri Abeng is the chairman of Biofarma, a pharmaceutical
                  State Owned Enterprise in Indonesia. Asa practitioner, he
                  always has been a strong proponent of entrepreneurial
                  leadership. To materialize that dream, he established an
                  educational center and became the Rector of the Tanri Abeng
                  University and chair of the well-recognized Executive Center
                  of Global Leadership in Jakarta. <br /> <br />
                  Prior to that, he was chairman of PT Pertamina and PT Telkom
                  which he successfully restructured. During the Asian crisis of
                  1998-2001, he was the first minister of State Owned
                  Enterprises of the Republic of Indonesia under President
                  Suharto and subsequently President Habibie. He started his
                  career as a manager in multinationals, reaching the position
                  of CEO at Heineken Indonesia (PT Bir Bintang). Dr. Tanri
                  studied in the USA on an exchange program after which he
                  returned to Hasanudin University in Makasar. He obtained his
                  MBA from Buffalo Business School in New York, and completed
                  his PhD in management at the Gaja Mada University in
                  Yogjakarta. He lives with his family in Jakarta.
                  <br />
                  <br />
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
                    href={"https://tau.ac.id/"}
                    className="border rounded-full p-2 brightness-75 hover:brightness-150"
                    target="_blank"
                  >
                    <BsGlobe2 size={20} />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/school/tanri-abeng-university/"
                    }
                    className="border rounded-full p-2 brightness-75 hover:brightness-150"
                    target="_blank"
                  >
                    <FaLinkedinIn size={20} />
                  </Link>
                  <Link
                    href={"mailto:tanriabeng42@gmail.com"}
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
                href={
                  "https://www.amazon.com/Indonesia-Inc-Tanri-Abeng/dp/9812101748"
                }
                className="relative w-64 h-[370px]"
                target="_blank"
              >
                <Image src={"/tanriA.jpg"} fill objectFit="cover" alt="book1" />
              </Link>
              <label className="text-white text-sm my-2">2010</label>
            </div>
            <div className=" flex flex-col items-center">
              <Link
                href={
                  "https://www.amazon.com/No-Regrets-Indonesian-Tanri-Abeng/dp/6020021270/ref=sr_1_6?qid=1692873093&refinements=p_27%3ATanri+Abeng&s=books&sr=1-6"
                }
                className="relative w-64 h-[370px]"
                target="_blank"
              >
                <Image src={"/tanriB.jpg"} fill objectFit="cover" alt="book2" />
              </Link>
              <label className="text-white text-sm my-2">2014</label>
            </div>
            <div className=" flex flex-col items-center">
              <Link
                href={
                  "https://www.amazon.com/Badan-Usaha-Milik-Rakyat-Indonesian/dp/6020267091/ref=sr_1_5?qid=1692873093&refinements=p_27%3ATanri+Abeng&s=books&sr=1-5"
                }
                className="relative w-64 h-[370px]"
                target="_blank"
              >
                <Image src={"/tanriC.jpg"} fill objectFit="cover" alt="book3" />
              </Link>
              <label className="text-white text-sm my-2">2015</label>
            </div>
            <div className=" flex flex-col items-center">
              <Link
                href={
                  "https://www.amazon.com/Bersama-Soeharto-Perspektif-Kepemimpinan-Indonesian/dp/6020280500/ref=sr_1_4?qid=1692873093&refinements=p_27%3ATanri+Abeng&s=books&sr=1-4"
                }
                className="relative w-64 h-[370px]"
                target="_blank"
              >
                <Image src={"/tanriD.jpg"} fill objectFit="cover" alt="book3" />
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default tanri;
