"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const OurTeam = () => {
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
    <div className="overflow-x-hidden">
      <div className="bg-founding bg-cover bg-fixed">
        {/* <div
          id="1"
          className="h-screen flex flex-col justify-around px-28 pt-36"
        >
          <div className="flex justify-center pl-32">
            <Image
              src={"/white-line.svg"}
              width={400}
              height={0}
              alt="white line"
            />
          </div>

          <div className="bg-primary text-white px-12 py-8 self-center mr-72">
            <a className="text-2xl font-semibold">
              Founding <br />
              Partners Team
            </a>
            <p className="text-sm mt-4 max-w-lg">
              Though we may not be real ‘management wizards’, we come close to
              it as our joint reputation to make things happening is well-known
              in the industry. Coming from different backgrounds, the three
              founding partners – Tanri Abeng, Peter Verhezen, Ian Buchanan -
              have all the necessary strategic and risk business experience and
              C-suite expertise – positioning us well to really form a strong
              partnership with your board and your top management. <br /> <br />
              The founding partners’ experience and expertise is well
              established and vast - allowing you to enhance the chances to get
              more competitive. We also work with associates around the globe
              for particular specialized industries, making sure that our
              partnership results in real performance.
            </p>
          </div>
          <div className="mx-auto flex flex-col">
            <Link
              href="#2"
              className="self-center border-2 border-white px-4 pt-4 pb-10 rounded-full "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className="animate-bounce fill-white"
              >
                <circle
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  cx="6"
                  cy="6"
                  r="6"
                />
              </svg>
            </Link>
            <div className="font-bold text-xs text-white self-center mt-3">
              SCROLL DOWN
            </div>
          </div>
        </div> */}
        <div
          id="1"
          className="h-screen flex flex-col justify-between md:px-28 md:pt-36"
        >
          <motion.div
            variants={fadeLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="invisible md:visible mt-10 pr-32"
          >
            <Image
              src={"/white-line.svg"}
              width={400}
              height={0}
              alt="white line"
            />
          </motion.div>
          <motion.div
            variants={fadeRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-primary text-white p-6 md:px-12 md:py-8 m-5 self-center md:mr-72"
          >
            <h1 className="text-xl md:text-2xl font-semibold">
              Founding <br />
              Partners Team
            </h1>
            <p className="text-xs my-4 max-w-md">
              Though we may not be real ‘management wizards’, we come close to
              it as our joint reputation to make things happening is well-known
              in the industry. Coming from different backgrounds, the three
              founding partners – Tanri Abeng, Peter Verhezen, Ian Buchanan -
              have all the necessary strategic and risk business experience and
              C-suite expertise – positioning us well to really form a strong
              partnership with your board and your top management. <br />
              <br />
              The founding partners’ experience and expertise is well
              established and vast - allowing you to enhance the chances to get
              more competitive. We also work with associates around the globe
              for particular specialized industries, making sure that our
              partnership results in real performance.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mx-auto flex flex-col mb-10"
          >
            <Link
              href="#2"
              className="self-center border-2 border-white px-4 pt-4 pb-10 rounded-full "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className="animate-bounce fill-white"
              >
                <circle
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  cx="6"
                  cy="6"
                  r="6"
                />
              </svg>
            </Link>
            <div className="font-bold text-xs text-white self-center mt-3">
              SCROLL DOWN
            </div>
          </motion.div>
        </div>
        {/* FOUNDING PARTNERS */}
        <div id="2" className="flex flex-col">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-2xl font-semibold my-8 md:w-1/2 flex md:justify-center text-white"
          >
            The Founding Partners
          </motion.div>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="flex flex-col mx-8">
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
                  className="invisible md:visible"
                />
              </motion.div>

              <div className="flex items-center h-full justify-center">
                <motion.div
                  variants={fadeLeft}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative w-64 h-64 md:w-96 md:h-[450px]"
                >
                  <Image
                    src={"/profile.png"}
                    fill
                    objectFit="cover"
                    alt="profile A"
                  />
                  <Link href="our-team/peter">
                    <div className="absolute text-transparent hover:text-white hover:backdrop-brightness-50 w-full h-full flex flex-col justify-end px-4">
                      <h1 className="text-xl font-semibold">Peter Verhezen</h1>
                      <p className="text-sm overflow-y-hidden my-2">
                        Dr Peter Verhezen is a Professor of strategy,
                        sustainability and corporate governance at the
                        University of Antwerp and the Antwerp Management School
                        (Belgium).
                      </p>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-8">
              <motion.div
                variants={fadeRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative w-64 h-64 md:w-96 md:h-[450px]"
              >
                <Image
                  src={"/profile-B.png"}
                  fill
                  objectFit="cover"
                  alt="profile B"
                />
                <Link href="our-team/tanri">
                  <div className="absolute cursor-pointer text-transparent hover:text-white hover:backdrop-brightness-50 w-full h-full flex flex-col justify-end px-4">
                    <h1 className="text-xl font-semibold">Tanri Abeng</h1>
                    <p className="text-sm overflow-y-hidden my-2">
                      Dr. Tanri Abeng is the chairman of Biofarma, a
                      pharmaceutical State Owned Enterprise in Indonesia.
                    </p>
                  </div>
                </Link>
              </motion.div>
              <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative w-64 h-64 md:w-96 md:h-[450px] my-8 mb-28"
              >
                <Image
                  src={"/profile-C.png"}
                  fill
                  objectFit="cover"
                  alt="profile C"
                />
                <Link
                  href={"our-team/ian"}
                  className="absolute cursor-pointer text-transparent hover:text-white hover:backdrop-brightness-50 w-full h-full flex flex-col justify-end px-4"
                >
                  <h1 className="text-xl font-semibold">Ian Buchanan</h1>
                  <p className="text-sm overflow-y-hidden my-2">
                    Ian Buchanan is the Emeritus Chairman of PWC Strategy.
                  </p>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:p-20">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-black text-2xl font-semibold my-8 md:mx-16"
        >
          Our Associates & <br />
          Associated Partners
        </motion.div>
        <motion.div
          variants={fadeLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Image
            src={"/line.svg"}
            width={300}
            height={0}
            alt="black line"
            className="invisible md:visible md:my-12 mx-44"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex gap-4 overflow-x-auto"
        >
          <Link href="our-team/pri" className="flex relative w-96 h-[450px]">
            <Image
              src={"/partnerA.png"}
              fill
              objectFit="cover"
              alt="partnerA"
            />
            <h1 className="text-white relative self-end p-5 text-2xl font-semibold">
              Pri Notowidigdo
            </h1>
          </Link>
          <Link href="our-team/luc" className="flex relative w-96 h-[450px]">
            <Image
              src={"/partnerB.png"}
              fill
              objectFit="cover"
              alt="partnerB"
            />
            <h1 className="text-white relative self-end p-5 text-2xl font-semibold">
              Prof. Luc Vanliedekerke
            </h1>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OurTeam;
