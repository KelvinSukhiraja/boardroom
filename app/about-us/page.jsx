"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
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
    <div>
      <div
        id="1"
        className="bg-aboutus bg-fixed bg-cover h-screen flex flex-col justify-between md:px-28 md:pt-36 overflow-hidden"
      >
        <motion.div
          variants={fadeLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="invisible md:visible flex justify-center pl-32 mt-10"
        >
          <Image src={"/line.svg"} width={400} height={0} alt="line" />
        </motion.div>
        <motion.div
          variants={fadeRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-primary text-white px-12 py-6 m-5 md:px-12 md:py-10 md:self-end"
        >
          <a className="text-lg md:text-2xl font-semibold">
            THE BOARDROOM <br />
            PARTNERSHIP
          </a>
          <p className="text-xs md:text-sm my-4 max-w-md">
            We are not your consultant or advisor, we will be your partner to
            enhance your position in a globalized competitive market.
          </p>
          <Link href="#2">
            <p className="font-bold text-base md:text-sm hover:underline underline-offset-4">
              READ MORE
            </p>
          </Link>
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
            className="self-center border-2 border-black px-4 pt-4 pb-10 rounded-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              className="animate-bounce fill-black"
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
          <div className="font-bold text-xs text-black self-center mt-3">
            SCROLL DOWN
          </div>
        </motion.div>
      </div>
      {/* Why Us */}
      <div
        id="2"
        className="bg-primary flex flex-col p-10 md:px-14 pt-20 text-white"
      >
        <div className="flex flex-col md:flex-row justify-between md:px-24">
          <div className="">
            <motion.div
              variants={fadeLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="invisible md:visible "
            >
              <Image src={"/white-line.svg"} width={400} height={0} />
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="md:py-8 text-lg md:text-2xl font-semibold"
            >
              Why us?
              <p className="max-w-md text-xs md:text-sm font-normal my-4">
                As your partner – not just an advisor-consultant we have our
                skin in the game to help to improve your competitiveness in the
                market. We will work with you to make your organization more
                successful for and with you.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col text-sm font-normal md:py-8 "
          >
            <p className="max-w-md font-semibold">
              We have the experience to partner with boards <br /> and
              C-executives
            </p>
            <ul className="list-disc my-4 max-w-xl list-inside text-xs md:text-base">
              <li>
                To review or strengthen the mission, vision and purpose of an
                organization, to fine tune the generic direction the
                organization wants to move to
              </li>
              <li>
                To reflect and improve the strategy and the associated risks to
                be executed to sustain the performance of the organization
              </li>
              <li>
                To strengthen the right structures and secure the ‘right’
                management system in place
              </li>

              <li> To help develop people or talent to execute the strategy</li>
              <li>
                To ensure that the growth of the organization is maintained and
                to deliver the expected or desired performance or results
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="translate-y-24">
          <motion.div
            variants={fadeLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-third max-w-xl p-6 md:p-9 text-xs md:text-sm md:ml-24"
          >
            We partner with you to make sure that within this globalized
            competitive market, your organization is prepared to continue to
            grow or to review its direction, using innovative technology and the
            right people to execute the strategy, and to remain competitive in
            an era of digitalization and eco-systems. <br />
            <br />
            As your partners, our own network and expertise will strengthen the
            push for improved or sustained performance at your organization.
          </motion.div>
        </div>
      </div>

      {/* What we do differently? */}
      <div className="bg-white text-black flex flex-col px-5 md:px-14 pt-14 ">
        <motion.div
          variants={fadeLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="invisible md:visible "
        >
          <Image
            src={"/line.svg"}
            width={400}
            height={0}
            className="md:my-16"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between md:px-24"
        >
          <div className="py-8 text-lg md:text-2xl font-semibold">
            What we do differently?
            <p className="max-w-md text-xs md:text-sm font-normal my-4">
              We are looking for concrete results to enhance your
              competitiveness in the market. Hence why we need to work together
              with you.
            </p>
          </div>
          <div className="flex flex-col text-xs md:text-sm font-normal mb-8 ">
            <p className="max-w-md text-base">
              The Boardroom Partnership works with you
            </p>
            <ul className="list-disc mt-4 max-w-xl list-inside">
              <li>
                To take your (Asian-based or Indonesian) company from a local
                player to a global competitive firm, including to assist you in
                negotiating with international investors and to implement
                ESG-criteria and policies to remain relevant in a global
                economy.
              </li>
              <li>
                To also help [foreign] companies to become local participants,
                including M&A strategic advice, and local-global partnership.
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          variants={fadeLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-primary text-white max-w-xl p-9 text-xs md:text-sm md:ml-24 mb-24"
        >
          We would be your partner in improving your positioning in the industry
          and your overall competitiveness and make you a more performing
          sustainable company, both from an economic as well as from a
          socio-ecological perspective.
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
