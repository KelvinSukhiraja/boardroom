"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const Services = () => {
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
      x: "5vw",
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
        delay: 0.3,
        duration: 3,
      },
    },
  };
  const modalIn = {
    initial: {
      opacity: 0,
      y: "-30vh",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.3,
        duration: 0.5,
      },
    },
  };
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="bg-service bg-cover bg-center bg-fixed overflow-x-hidden">
        <div className="backdrop-brightness-50">
          <div
            id="1"
            className="min-h-screen flex flex-col justify-between md:px-28 md:pt-36  "
          >
            <motion.div
              variants={fadeLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="invisible md:visible flex justify-center pl-32 mt-10"
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
              className="bg-third text-white px-12 py-6 md:py-10 m-5 md:self-end max-w-xl"
            >
              <h1 className="text-lg md:text-2xl font-semibold">
                How to sustain or improve your ‘competitive position’ in the
                market?
              </h1>
              <p className="text-xs md:text-sm my-4 max-w-md">
                Success in organizations is almost always{" "}
                <button
                  onClick={() => setModalOpen(true)}
                  className="underline italic font-bold"
                >
                  temporary
                </button>
                . And it will requires risk-taking and significant efforts to
                maintain or sustain past success. The major distinguishing
                factor to sustain economic performance is relentless strategic
                innovation.
              </p>
              {/* <Link href="#2" className="font-bold text-xs md:text-sm">
                READ MORE
              </Link> */}
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mx-auto flex flex-col mb-10"
            >
              <Link
                href={"#2"}
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
            <div
              className={`w-screen h-screen top-0 left-0 absolute flex justify-center items-center ${
                modalOpen ? "flex" : "hidden"
              }`}
            >
              <motion.div
                variants={modalIn}
                initial="initial"
                whileInView="animate"
                className="relative bg-white bg-opacity-75 rounded-xl w-full h-3/5 md:w-3/5 md:h-3/4 flex flex-col justify-center items-center px-2"
              >
                <button
                  onClick={() => setModalOpen(!modalOpen)}
                  // className="w-full justify-end flex"
                >
                  <AiOutlineClose
                    size={35}
                    className={`m-5 absolute top-0 right-0 z-50 text-white ${
                      modalOpen ? "flex" : "hidden"
                    }`}
                  />
                </button>
                <div className="w-full h-full  relative ">
                  <Image src={"/graph.svg"} fill />
                </div>
              </motion.div>
            </div>
          </div>
          {/* SECOND */}
          <div
            id="2"
            className="min-h-screen flex flex-col justify-around md:px-28 md:pt-36"
          >
            <motion.div
              variants={fadeLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="hidden md:flex"
            >
              <Image
                src={"/white-line.svg"}
                width={400}
                height={0}
                alt="white line"
              />
            </motion.div>
            <motion.div
              variants={fadeLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-primary text-white m-5 px-5 md:px-12 py-10 md:self-center md:mr-44 md:mb-44 max-w-xl"
            >
              <h1 className="text-lg md:text-2xl font-semibold">
                Nudging to Adapt or to Transform Your Firm and its
                Competitiveness
              </h1>
              <p className="text-xs md:text-sm my-4 max-w-lg">
                A clear strategy may become a necessity to remain relevant in
                the market and sustain your competitive advantage. Competition
                is relentless and only focus on performance will allow the
                organization to continue to strategically grow. We’ll partner
                with you to transform where necessary.
                <br /> <br /> Both the organization as well as the individuals
                within the organization will need to continuously adapt and
                learn to remain competitive. New competencies may be needed –
                especially in an era of digital transformation and global
                competition. We can partner to have a joint stake to make that
                transformation happening.
              </p>
            </motion.div>
            {/* <div className="translate-y-32 w-full bg-red-200">
              <motion.div
                variants={fadeRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-third max-w-md p-9 m-3 text-lg md:text-2xl font-semibold text-white"
              >
                Three main areas to partner with you to improve your firm’s
                overall performance
              </motion.div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div
        id="3"
        className="flex flex-col justify-center items-center text-white"
      >
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-4/5 h-4/5 relative my-20 "
        >
          <Image src={"/graph.svg"} fill />
        </motion.div>
        <div className="translate-y-12 z-30">
          <motion.div
            variants={fadeLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-third z-10 max-w-md p-9 text-2xl font-semibold mr-24"
          >
            Three main areas to partner with you to improve your firm’s overall
            performance
          </motion.div>
        </div>
      </div> */}
      <div className="text-white">
        <div className="flex justify-center absolute w-full -translate-y-36 md:-translate-x-36">
          <motion.div
            variants={fadeRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-third max-w-md p-9 m-3 text-lg md:text-2xl font-semibold text-white"
          >
            Three main areas to partner with you to improve your firm’s overall
            performance
          </motion.div>
        </div>
        <div className="h-fit flex flex-col-reverse md:flex-row z-10">
          <div className="h-fit md:w-1/2 bg-primary pt-12 flex flex-col items-center">
            <motion.div
              variants={fadeLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Image
                src={"/white-line.svg"}
                width={400}
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
              className="p-10 md:p-20"
            >
              <h className="text-lg md:text-2xl text-third">
                Good corporate <br />
                governance practices
              </h>
              <p className="text-sm my-4">
                Any business – both in the emerging markets and developed
                markets – will be hungry for capital to finance growth. In
                emerging markets, the local capital markets are still in their
                infancy, and local supplies of capital can be limited.
                Attracting foreign global capital could be one venue, or private
                local equity or favorable corporate loans or bank loans. Either
                way, implementing good corporate governance practices will help
                to reduce risk and assure proper procedures and processes. At
                the end of the day, it is all about creating trust in the board
                and its management. The Boardroom Partnership will partner with
                you and collaborate to improve the governance practices,
                creating the necessary trust. Once that trust has been
                established, it will be easier to attract local and or foreign
                partners and or capital.
              </p>
            </motion.div>
          </div>
          <div className="md:w-1/2 w-full h-96 md:h-auto relative -z-20 bg-slate-600">
            <Image
              src={"/article-B.jpg"}
              fill
              objectFit="cover"
              alt="article B"
            />
          </div>
        </div>
        <div className="h-fit flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full h-96 md:h-auto relative z-0 bg-slate-600">
            <Image
              src={"/article-c.jpg"}
              fill
              objectFit="cover"
              alt="article C"
            />
          </div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="h-fit md:w-1/2 md:pt-12 flex flex-col items-center"
          >
            <div className="md:p-20 p-10">
              <h className="text-lg md:text-2xl text-third">
                Strategy & Integrated <br />
                Risk Management
              </h>
              <p className="text-sm text-black my-4">
                Once the proper foundations of good corporate governance are in
                place, proper vision and strategy can be thought through that
                involves Integrating all risk perspectives for the company.
                Boards with a good strategy should enable and empower directors
                and managers to implement those approved strategies. In a fierce
                global competitive environment, boards and management have a
                fiduciary duty to prepare a futureproof organization that
                provide a decent risk-adjusted return on the investment, and
                creates products, services and experiences for its customers,
                and empower its employees to thrive in a meaningful
                organization. <br /> <br />
                Strategy and its related risks is about envisioning a meaningful
                future where customers pay for the service, product or
                experience offered by the firm. Hence why different time
                horizons need to be established, where finetuning may help
                current assets to be optimized and fully exploited, while also
                explore new insights that will lead to innovative products or
                services through entrepreneurial trial and error processes.
                Likely this includes the digitization of some of the firm’s core
                processes.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="h-fit flex flex-col-reverse md:flex-row">
          <div className="h-fit md:w-1/2 bg-primary md:pt-12 flex flex-col items-center">
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="md:p-20 p-10"
            >
              <h className="text-lg md:text-2xl text-third">
                Sustainability and <br />
                ESG-Investments
              </h>
              <p className="text-sm my-4">
                Successful organizations need to demonstrate a willingness to
                engage critical stakeholders in some of the decision-making, to
                embrace a culture of openness, accountability and transparency,
                to be fair and consistent in relations with those key
                stakeholders, and to have an organizational infrastructure that
                safeguard and ensure corporate trust and reputation. Although
                best corporate governance practices at firm level may not
                consistently guarantee superior return on investments, it can
                provide a safety net and prescribe certain behaviour within the
                organizational culture to adhere to high standards of
                transparency, fairness, proper equity rights, accountability and
                responsibility. <br /> <br />
                Reputation of a firm takes years to develop but can be lost in
                minutes. Especially when companies cause negative externalities
                that harm environment and community, a crisis can easily erupt.
                Hence why boards and their companies should prevent such
                self-inflicted crises and prepare if an unintentional one would
                emerge. In additional of having established proper governance
                foundations for the company, a board should focus on the
                ecological and social-ethical aspects of these new ESG-criteria.
                At the end of the day, any company should aim to have a net
                positive impact on its surrounding, subtracting the negative
                impact of the positive impact of a firm. <br /> <br />
                We actively partner with you and your firm to ensure an above
                average risk- adjusted return on the invested capital while
                engaging with those who have a real stake in the organization
                and to commit to non-financial ESG objectives, in line with the
                latest agreed IFRS principles and IASB & ISSB standards.
              </p>
            </motion.div>
          </div>
          <div className="md:w-1/2 w-full h-96 md:h-auto relative z-0 bg-slate-600">
            <Image src={"/article-d.jpg"} fill objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
