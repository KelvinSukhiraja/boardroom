"use client";
import { Navbar } from "@/components";
import Image from "next/image";
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
        {/* <Image src={"/hero-bg.jpeg"} alt="bg" fill /> */}

        <motion.div
          variants={fadeLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="invisible md:visible flex justify-center pl-32 mt-10"
        >
          <Image src={"/white-line.svg"} width={400} height={0} alt=" line" />
        </motion.div>
        <motion.div
          variants={fadeRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-primary text-white px-12 py-6 md:py-10 m-5 md:self-end"
        >
          <h1 className="text-lg md:text-2xl font-semibold">
            THE BOARDROOM <br />
            PARTNERSHIP
          </h1>
          <p className="text-xs md:text-sm my-4 max-w-md">
            We - The Boardroom Partnership - partner and closely collaborate
            with you and your organization to deliver on improved governance and
            risk practices, and strategies resulting in better financial and
            non-financial performance.
          </p>
          <Link href="/about-us">
            <p className="font-bold text-lg md:text-sm hover:underline underline-offset-4">
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
            <Image
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
              <div className="font-semibold text-2xl">
                Founding <br /> Partners Team
              </div>
              <div className="text-xs sm:text-sm font-normal max-w-md md:my-5">
                Though we may not be real ‘management wizards’, we come close to
                it as our reputation to make things happening is well-known in
                the industry.
              </div>
            </motion.div>
            <div className="flex flex-wrap justify-between w-full text-white my-10 ">
              <div className=" max-w-sm flex flex-col">
                <h1 className="text-2xl font-semibold text-third">
                  Tanri Abeng
                </h1>
                <p className="text-xs md:text-sm overflow-y-hidden my-2">
                  Dr. Tanri Abeng is the chairman of Biofarma, a pharmaceutical
                  State Owned Enterprise in Indonesia. Dr Tanri is co-founder
                  and Chair of The Boardroom Partnership
                </p>
              </div>
              <div className=" max-w-sm flex flex-col">
                <h1 className="text-2xl font-semibold text-third">
                  Peter Verhezen
                </h1>
                <p className="text-xs md:text-sm overflow-y-hidden my-2">
                  Dr Peter Verhezen is a Professor of strategy, sustainability
                  and corporate governance at the University of Antwerp and the
                  Antwerp Management School (Belgium). Peter is co-founder and
                  Senior Partner of The Boardroom Partnership
                </p>
              </div>

              <div className=" max-w-sm flex flex-col">
                <h1 className="text-2xl font-semibold text-third">
                  Ian Buchanan
                </h1>
                <p className="text-xs md:text-sm overflow-y-hidden my-2">
                  Ian Buchanan is the Emeritus Chairman of PWC Strategy. Ian is
                  Associated Senior Partner at The Boardroom Partnership.
                </p>
              </div>
            </div>
            <Link
              href={"/our-team"}
              className="rounded-full outline outline-2 py-2 px-4 text-base md:text-sm font-bold text-white hover:bg-primary hover:outline-none ease-in-out duration-200"
            >
              READ MORE
            </Link>
          </motion.div>
          {/* <div className="flex flex-col md:flex-row justify-center mt-14 md:-translate-x-10 gap-8">
              <motion.div
                variants={fadeLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative w-64 h-64 md:w-96 md:h-[450px] self-center"
              >
                <Image
                  src={"/profile.png"}
                  fill
                  objectFit="cover"
                  alt="profile A"
                />
                <div className="absolute text-transparent hover:text-white hover:backdrop-brightness-50 w-full h-full flex flex-col justify-end px-4">
                  <h1 className="text-xl font-semibold">Peter Verhezen</h1>
                  <p className="text-xs md:text-sm overflow-y-hidden my-2">
                    Dr Peter Verhezen is a Professor of strategy, sustainability
                    and corporate governance at the University of Antwerp and
                    the Antwerp Management School (Belgium).
                  </p>
                </div>
              </motion.div>
              <div className="flex flex-col items-center gap-8">
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
                  <div className="absolute cursor-pointer text-transparent hover:text-white hover:backdrop-brightness-50 w-full h-full flex flex-col justify-end px-4">
                    <h1 className="text-xl font-semibold">Tanri Abeng</h1>
                    <p className="text-sm overflow-y-hidden my-2">
                      Dr. Tanri Abeng is the chairman of Biofarma, a
                      pharmaceutical State Owned Enterprise in Indonesia.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative w-64 h-64 md:w-96 md:h-[450px] md:my-8"
                >
                  <Image
                    src={"/profile-C.png"}
                    fill
                    objectFit="cover"
                    alt="profile C"
                  />
                  <div className="absolute cursor-pointer text-transparent hover:text-white hover:backdrop-brightness-50 w-full h-full flex flex-col justify-end px-4">
                    <h1 className="text-xl font-semibold">Ian Buchanan</h1>
                    <p className="text-sm overflow-y-hidden my-2">
                      Ian Buchanan is the Emeritus Chairman of PWC Strategy.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div> */}

          {/* <div className="relative flex h-full px-44">
            <div className="absolute w-1/2 mt-20 flex">
              <motion.div
                variants={fadeRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-white px-8 py-12 bg-primary"
              >
                <div className="font-semibold text-2xl ">
                  Founding Partners Team
                </div>
                <div className="text-sm font-normal  max-w-md my-5">
                  Though we may not be real ‘management wizards’, we come close
                  to it as our reputation to make things happening is well-known
                  in the industry.
                </div>
                <Link
                  href={"/our-team"}
                  className="font-bold text-sm hover:underline underline-offset-4"
                >
                  READ MORE
                </Link>
              </motion.div>
            </div>
            <div className="flex justify-end w-full gap-12 mt-5">
              <div className="flex items-center h-full">
                <motion.div
                  variants={fadeLeft}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative w-96 h-[450px]"
                >
                  <Image
                    src={"/profile.png"}
                    fill
                    objectFit="cover"
                    alt="profile A"
                  />
                  <div className="absolute text-transparent hover:text-white hover:backdrop-brightness-50 w-full h-full flex flex-col justify-end px-4">
                    <h1 className="text-xl font-semibold">Peter Verhezen</h1>
                    <p className="text-sm overflow-y-hidden my-2">
                      Dr Peter Verhezen is a Professor of strategy,
                      sustainability and corporate governance at the University
                      of Antwerp and the Antwerp Management School (Belgium).
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col">
                <motion.div
                  variants={fadeRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative w-96 h-[450px]"
                >
                  <Image
                    src={"/profile-B.png"}
                    fill
                    objectFit="cover"
                    alt="profile B"
                  />
                  <div className="absolute cursor-pointer text-transparent hover:text-white hover:backdrop-brightness-50 w-full h-full flex flex-col justify-end px-4">
                    <h1 className="text-xl font-semibold">Tanri Abeng</h1>
                    <p className="text-sm overflow-y-hidden my-2">
                      Dr. Tanri Abeng is the chairman of Biofarma, a
                      pharmaceutical State Owned Enterprise in Indonesia.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative w-96 h-[450px] my-8"
                >
                  <Image
                    src={"/profile-C.png"}
                    fill
                    objectFit="cover"
                    alt="profile C"
                  />
                  <div className="absolute cursor-pointer text-transparent hover:text-white hover:backdrop-brightness-50 w-full h-full flex flex-col justify-end px-4">
                    <h1 className="text-xl font-semibold">Ian Buchanan</h1>
                    <p className="text-sm overflow-y-hidden my-2">
                      Ian Buchanan is the Emeritus Chairman of PWC Strategy.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div> */}
          <div className="translate-y-20">
            <motion.div
              variants={fadeRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-third md:max-w-xl text-white font-semibold text-2xl px-7 py-5 md:py-12 mx-5 md:ml-64"
            >
              Three main areas in which we partner with you to improve your
              firm’s overall performance:
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
            <Image
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
            className="flex flex-col md:flex-row md:gap-10 gap-3 justify-around mt-20"
          >
            <div className=" text-white p-5 max-w-sm">
              <div className="text-third font-medium text-2xl ">
                Good corporate governance practices
              </div>
              {/* <p className="font-normal text-xs md:text-sm mt-5">
                Any business – both in the emerging markets and developed
                markets – will be hungry for capital to finance growth.
              </p> */}
            </div>
            <div className=" text-white p-5 max-w-sm">
              <div className="text-third font-medium text-2xl">
                Strategy & Integrated Risk Management
              </div>
              {/* <p className="font-normal text-xs md:text-sm mt-5 ">
                Once the proper foundations of good corporate governance are in
                place, proper vision and strategy can be thought through that
                involves integrating all risk perspectives for the company.
              </p> */}
            </div>
            <div className=" text-white p-5 max-w-sm">
              <div className="text-third font-medium text-2xl">
                Sustainability and ESG-Investments
              </div>
              {/* <p className="font-normal text-xs md:text-sm mt-5">
                Successful organizations need to demonstrate a willingness to
                engage critical stakeholders in some of the decision-making.
              </p> */}
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center md:py-20 py-10">
          <Link
            href={"/services"}
            className="rounded-full outline outline-2 py-2 px-4 text-base md:text-sm font-bold text-white hover:bg-third hover:outline-none ease-in-out duration-200"
          >
            READ MORE
          </Link>
        </div>
      </div>
      {/* Article */}
      <div className="flex">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full h-60 m-10 md:w-[1700px] md:h-[500px] relative md:my-20 md:ml-36"
        >
          <Image
            src={"/article-A.jpg"}
            fill
            objectFit="cover"
            alt="article A"
          />
        </motion.div>
        <div className="h-fit self-center absolute md:relative md:-translate-x-32 overflow-hidden">
          <motion.div
            variants={fadeRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-third m-5 px-6 py-3 md:pl-10 md:pr-5 md:py-10 text-white max-w-6xl "
          >
            <div className="font-semibold text-lg md:text-2xl">
              Probably, your company may need a real digital strategy and
              digital operating system to face fierce competition.
            </div>
            <p className="font-normal text-xs md:text-sm max-w-[270px] py-2">
              For more information please fill free to contact us.
            </p>
            {/* <Link
              href={"/contact-us"}
              className="font-bold text-base md:text-sm hover:underline underline-offset-4"
            >
              GET IN TOUCH
            </Link> */}
          </motion.div>
          <div className="-translate-x-2/4">
            <motion.div
              variants={fadeRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="hidden md:flex justify-center mt-14"
            >
              <Image
                src={"/white-line.svg"}
                width={400}
                height={0}
                alt="white line"
              />
            </motion.div>
          </div>
        </div>

        {/* <div className="absolute h-full w-full flex justify-center">
          <Image src={"/white-line.svg"} width={400} height={0} />
        </div> */}
      </div>
      {/* Article 2 */}
      <div className="h-fit bg-article2 bg-cover bg-fixed">
        {/* <Image
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
            <Image
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
              <Image
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
                Boardroom
              </div>
              <p className="text-xs md:text-sm max-w-xs my-2">
                We are not your consultant or advisor, we will be your partner
                to enhance your position in a globalized competitive market.
              </p>
              <Link
                href={
                  "https://www.degruyter.com/document/doi/10.1515/9783110787634/html"
                }
                target="_blank"
                className="font-bold text-base md:text-xs hover:underline underline-offset-4"
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
