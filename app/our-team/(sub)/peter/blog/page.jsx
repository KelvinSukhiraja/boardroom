"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { motion } from "framer-motion";

const Blog = () => {
  const fadeLeft = {
    initial: {
      opacity: 0,
      x: -100,
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
      x: 500,
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
    <div className="bg-primary h-fit text-white">
      <div className="flex-col items-center px-5 md:px-28 py-6">
        <div className="min-h-screen">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-10"
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
            <Link href={"/our-team/peter"}>
              <AiOutlineArrowLeft />
            </Link>
            <p className="text-xs font-bold">
              ABOUT US &gt; PETER VERHEZEN &gt; Blogs-Speaking Engagements
            </p>
          </motion.div>
          <div className="flex flex-col">
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
                className="my-5"
              />
            </motion.div>
            <motion.h1
              variants={fadeLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-2xl font-semibold my-4 md:m-8 pl-10"
            >
              Blogs-Speaking Engagements
            </motion.h1>
            <motion.table
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <tbody className="table md:w-3/4 ">
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Risk Management, Governance and Ethics in Business (2008
                    Australia)
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href={"https://player.vimeo.com/video/8715859"}
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      link
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Good versus Bad Reputation (Australia 2012)
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href={
                        "https://www.abc.net.au/news/2012-08-30/indonesian-businesses-shake-bad-reputation/4234126"
                      }
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      link
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Indonesia, corruption and corporate governance (Australia
                    2012)
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href={
                        "https://www.abc.net.au/news/2012-08-30/an-indonesia-cleans-up-corporate-governance/4234248"
                      }
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      link
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Gifts, corruption and Philanthropy (UniMelb)-(2015)
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href={"https://player.vimeo.com/video/48782759 "}
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      link
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    From smart to wise decision making (Antwerp 2017)
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href={"https://vimeo.com/240796408/a638abca9b"}
                      target="_blank"
                      className=" hover:underline italic flex"
                    >
                      link (intro)
                    </Link>
                    <br />
                    <Link
                      href={"https://vimeo.com/241155387/7deed1a245"}
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      link (full)
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Limitations of AI and the Creativity of Executives
                    (Bogor-Antwerp, 2020)
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href={
                        "https://twitter.com/SGPPIndonesia/status/1259061911280332802?s=08"
                      }
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      link
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Inside the Executive’s Brain (Antwerp 2020)
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href={"https://www.youtube.com/watch?v=tPJEqIT345c"}
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      link
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Leadership Challenges in the Era of Personalized Service and
                    Artificial Intelligence (Jakarta-Antwerp 2021)
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href={"https://www.youtube.com/watch?v=PzteXgZtc3k&t=4s"}
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      link
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    On Governance and AI (Antwerp, 2021)
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href={"https://youtu.be/GKJxC9gt3OE"}
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      link
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, (2021, 21 June), “Beyond a SWOT-Analysis in
                    Strategy” (the University of Antwerp)
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href={
                        "https://msweb.uantwerpen.be/Mediasite/Play/05c84406b4b749c59e0da86365edef271d"
                      }
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      link
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Why AI can make us smarter, but not wiser? (Antwerp 2023)
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href={"https://dropmefiles.com/LzBJL"}
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      link
                    </Link>
                  </td>
                </tr>
              </tbody>
            </motion.table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
