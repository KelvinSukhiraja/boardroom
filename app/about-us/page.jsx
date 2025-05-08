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
            PARTNERSHIP THINK TANK
          </a>
          <p className="text-xs md:text-sm my-4 max-w-md">
            We are not your consultant or traditional advisor. We will be a
            thought leader and or coach partnering with you to remain relevant
            and competitive in your industry while enhancing your position in a
            globalized changing competitive world, focusing on some
            interconnected societal and business challenges around global risks,
            sustainability and artificial intelligence.{" "}
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
                As your partner in Thought Leadership around sustainability and
                governance, we can help to improve your risk and governance
                approach in a market that is fueled by new [digital] innovation.
                We will collaborate and work with you to make your organization
                more successful for and with you by creating a more “sustainable
                and responsible” experience for your products and services.
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
              We have the experience to partner with boards <br /> and top
              management
            </p>
            <ul className="list-disc my-4 max-w-xl list-inside text-xs md:text-base">
              <li>
                To review or enhance the purpose of an organization, to
                fine-tune the generic direction of sustainability the
                organization wants to move on to.
              </li>
              <li>
                To think and reflect about embracing new technology like (Gen)
                Artificial Intelligence while installing proper AI governance
                guardrails.
              </li>
              <li>
                To critically reflect and improve the associated risks and
                opportunities with respect to more reasonable and responsible
                business decisions.
              </li>
              <li>
                To strengthen the appropriate and adapted structures to put the
                right risk and sustainability management in place.
              </li>
              <li>
                To help develop people and talent at the organization to execute
                such a sustainability strategy.
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
            sustainably grow or to review its direction, using innovative
            technology and the right people to execute the strategy, and to
            remain competitive in an era of digitalization through artificial
            intelligence and interdependent eco-systems.
            <br />
            <br />
            As your partners, our own network and expertise aims to strengthen
            the push for improved or sustained performance at your organization.
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
              We are looking to help you and your organization to enhance its
              competitive relevance by looking at the organization in a slightly
              different way.
            </p>
          </div>
          <div className="flex flex-col text-xs md:text-sm font-normal mb-8 ">
            <p className="max-w-md text-base">
              We believe that any organization can go through some
              transformations to keep its competitiveness and relevance.
            </p>
            <ul className="list-decimal mt-4 max-w-xl list-inside">
              <li>
                From accomplished to smart decision-making where responsible
                artificial intelligence and improved resilience can make a
                difference in the market;
              </li>
              <li>
                From smart to wise decision-making where stakeholders’
                engagement and a more sustainable &amp; governance risk approach
                may pay off;
              </li>
              <li>
                From wise leadership to a thriving organizational team effort
                where the inner core aspirations of the individual team members
                can be aligned with the organizational purpose and outer
                financial success of the organization.
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
          We would be your sparring partner in improving your organizational
          purpose into a more meaningful objective and make you a more
          performing sustainable company, both from an economic as well as from
          a socio-ecological perspective.
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
