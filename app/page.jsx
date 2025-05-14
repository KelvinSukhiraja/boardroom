"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
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
  const fadeLeftDown = {
    initial: {
      opacity: 0,
      x: "-10vw",
      y: "10vh",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 3,
      },
    },
  };
  const fadeRightDown = {
    initial: {
      opacity: 0,
      x: "10vw",
    },
    animate: {
      opacity: 1,
      x: "-10vw",
      transition: {
        type: "spring",
        duration: 3,
      },
    },
  };
  // variants={fadeTop}
  //       initial="initial"
  //       whileInView="animate"
  //       viewport={{ once: true }}

  return (
    <div className="text-black overflow-hidden">
      <div
        id="1"
        className="bg-hero bg-fixed bg-cover bg-center h-screen flex flex-col justify-between md:px-28 md:pt-36"
      >
        {/* <img src={"/hero-bg.jpeg"} alt="bg" fill /> */}

        <motion.div
          variants={fadeLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="invisible md:visible flex justify-center pl-32 "
        >
          <img src={"/white-line.svg"} width={400} height={0} alt=" line" />
        </motion.div>
        <motion.div
          variants={fadeRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-primary text-white px-12 py-6 md:py-10 m-5 md:self-end "
        >
          <h1 className="text-lg md:text-2xl font-semibold">
            THE BOARDROOM <br />
            PARTNERSHIP THINK TANK
          </h1>
          <p className="text-xs md:text-sm my-4 max-w-md">
            We at the Boardroom Partnership would partner and closely
            collaborate with you and your organization to reflect and deliver on
            improved governance and risk practices. We also would function as a
            sounding board to strengthen your sustainability impact and
            responsible AI strategies, aiming to ultimately improve your service
            and product experience and perception that will most likely result
            in better financial and non-financial performance.{" "}
          </p>
          <Link href="/about-us">
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
            className="self-center border-2 border-white px-4 pt-4 pb-10 rounded-full duration-1000 ease-out delay-1000"
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
          <div className="font-bold text-white text-xs self-center mt-3">
            SCROLL DOWN
          </div>
        </motion.div>
      </div>

      {/* Founding Partners */}

      <div id="2" className="bg-primary">
        <div className="bg-founding bg-fixed h-full bg-left-top flex flex-col">
          <motion.div
            variants={fadeLeft}
            initial="initial"
            whileInView="animate"
            view
            viewport={{ once: true }}
            className="invisible md:visible flex ml-56 md:pt-32"
          >
            <img
              src={"/white-line.svg"}
              width={400}
              height={0}
              alt="white line"
            />
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col my-10 items-center px-5 md:px-36 "
          >
            <motion.div
              variants={fadeRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-white md:py-12 h-fit w-fit self-start"
            >
              <div className="font-semibold text-lg md:text-2xl max-w-xs">
                Founding Partners Team
              </div>
              {/* <div className="text-xs sm:text-sm font-normal max-w-md md:my-5">
                Though we may not be real ‘management wizards’, we come close to
                it as our reputation to make things happening is well-known in
                the industry.
              </div> */}
            </motion.div>
            <div className="grid grid-cols-3 gap-8 justify-between w-full text-white my-10 ">
              <div className=" max-w-sm flex flex-col">
                <h1 className="text-lg md:text-2xl font-medium text-third">
                  Luc Van Liedekerke
                </h1>
                <p className="text-xs md:text-sm overflow-y-hidden my-2">
                  Dr. Luc Van Liedekerke is professor ethics and sustainability
                  at the University of Antwerp and KULeuven (both in Belgium).
                </p>
              </div>
              <div className=" max-w-sm flex flex-col">
                <h1 className="text-lg md:text-2xl font-medium text-third">
                  Peter Verhezen
                </h1>
                <p className="text-xs md:text-sm overflow-y-hidden my-2">
                  Dr. Peter Verhezen is a Professor of strategy, sustainability
                  and corporate governance at the University of Antwerp and the
                  Antwerp Management School (Belgium). Peter is co-founder and
                  Senior Partner of The Boardroom Partnership.
                </p>
              </div>

              <div className=" max-w-sm flex flex-col">
                <h1 className="text-lg md:text-2xl font-medium text-third">
                  Danny Samson
                </h1>
                <p className="text-xs md:text-sm overflow-y-hidden my-2">
                  Dr. Danny Samson is a highly esteemed Professor of Management
                  at the University of Melbourne, where he has dedicated over
                  three decades to academia.
                </p>
              </div>
            </div>
            <button className="rounded-full border-2 py-2 px-4 text-base md:text-sm font-bold text-white hover:bg-primary hover:border-transparent ease-in-out duration-200">
              <Link href={"/our-team"}>READ MORE</Link>
            </button>
          </motion.div>
          <div className="translate-y-20">
            <motion.div
              variants={fadeRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-third md:max-w-xl text-white font-semibold text-lg md:text-2xl px-7 py-5 md:py-12 mx-5 md:ml-64"
            >
              Three main areas in which we partner with you and provide thought
              leadership to improve your organization’s overall performance and
              impact.
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col mt-20 md:px-36">
          <motion.div
            variants={fadeLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="invisible md:visible"
          >
            <img
              src={"/white-line.svg"}
              width={400}
              height={0}
              alt="white line"
            />
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:gap-10 justify-around mt-20"
          >
            <div className=" text-white p-5 max-w-sm">
              <div className="text-third font-medium text-lg md:text-2xl ">
                Good Corporate Governance Practices
              </div>
              {/* <p className="font-normal text-xs md:text-sm mt-5">
                Any business – both in the emerging markets and developed
                markets – will be hungry for capital to finance growth.
              </p> */}
            </div>
            <div className=" text-white p-5 max-w-sm">
              <div className="text-third font-medium text-lg md:text-2xl">
                Integrated Risk Management & Responsible Artificial Intelligence
              </div>
              {/* <p className="font-normal text-xs md:text-sm mt-5 ">
                Once the proper foundations of good corporate governance are in
                place, proper vision and strategy can be thought through that
                involves integrating all risk perspectives for the company.
              </p> */}
            </div>
            <div className=" text-white p-5 max-w-sm">
              <div className="text-third font-medium text-lg md:text-2xl">
                Sustainability impact and ESG-Investments
              </div>
              {/* <p className="font-normal text-xs md:text-sm mt-5">
                Successful organizations need to demonstrate a willingness to
                engage critical stakeholders in some of the decision-making.
              </p> */}
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center md:py-20 py-10">
          <button className="rounded-full border-2 py-2 px-4 text-base md:text-sm font-bold text-white hover:bg-third hover:border-transparent ease-in-out duration-200">
            <Link href={"/services"}>READ MORE</Link>
          </button>
        </div>
      </div>
      {/* Article */}
      <div className="flex h-[80vh] relative justify-center items-center">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className=" w-[50%] h-3/4 -translate-x-[30%]"
        >
          <img src={"/article-A.jpg"} fill objectFit="cover" alt="article A" />
        </motion.div>
        <motion.div
          variants={fadeRight}
          initial="initial"
          whileInView="animate"
          className="bg-third px-6 py-3 md:pl-10 md:pr-5 md:py-10 text-white absolute max-w-[50%] right-32"
        >
          <div className="font-semibold text-lg md:text-2xl">
            Probably, your organization may also need to reflect on an adapted
            digital AI strategy and a sustainability strategy to face fierce
            competition and to stay relevant in the industry. We could partner
            with you to think and conceptualize and subsequently materialize
            such investments or strategic adaptation.
          </div>
          <p className="font-normal text-xs md:text-base max-w-[270px] py-2">
            For more information please feel free to contact us.
          </p>
        </motion.div>
        <motion.div
          variants={fadeRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="hidden md:flex absolute bottom-32"
        >
          <img
            src={"/white-line.svg"}
            width={400}
            height={0}
            alt="white line"
          />
        </motion.div>
      </div>
      {/* Article 2 */}
      <div className="h-fit bg-article2 bg-cover bg-fixed">
        {/* <img
          src={"/article2-bg.jpg"}
          className="object-cover"
          fill
          alt="article 2 background"
        /> */}
        <div className="backdrop-blur backdrop-brightness-50 h-screen flex flex-col md:flex-row justify-evenly items-center p-5">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full md:w-96 h-96 md:h-[500px] relative"
          >
            <img
              src={"/product-a.jpeg"}
              fill
              objectFit="contain"
              alt="productA"
            />
          </motion.div>
          <div>
            <motion.div
              variants={fadeRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <img
                src={"/white-line.svg"}
                width={400}
                height={0}
                alt="white line"
                className="hidden md:flex my-10 translate-x-52"
              />
            </motion.div>
            <motion.div
              variants={fadeLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-white bg-primary px-9 py-6 md:py-9 md:pl-12 md:pr-20 w-fit"
            >
              <div className="font-semibold text-lg md:text-2xl max-w-sm">
                Our testimonial on our beliefs for an effective and futureproof
                boardroom
              </div>
              <p className="text-xs md:text-sm max-w-xs my-2">
                We could be your partner to enhance your position in a
                globalized competitive market.
              </p>
              <Link
                href={
                  "https://www.degruyter.com/document/doi/10.1515/9783110787634/html"
                }
                target="_blank"
                className="font-bold text-base md:text-sm hover:underline underline-offset-4"
              >
                BUY BOOK
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
