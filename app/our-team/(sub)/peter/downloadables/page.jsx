"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { motion } from "framer-motion";

const Downloadable = () => {
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
              ABOUT US &gt; PETER VERHEZEN &gt; DOWNLOADABLE PAPERS
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
              Downloadable Papers
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
                    Verhezen, P.; Mandt, T.; Albers, A. & W. Dewulf, 2025,
                    “Corporate governance of state-owned airlines in Southeast
                    Asia: a gloomy case of Garuda Indonesia”, Chapter 8 in
                    Handbook Aviation and Governance, London, Edwar Elgar
                    Publishing
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/Full-chapter-from-book---9781803926988-chapter8.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen 2024 A Corp Governance Perspective on Org Integrity
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/Verhezen 2024 A Corp Governance Perspective on Org Integrity.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2000), “Gift and vertrouwen” in Vandevelde,
                    Toon (Ed), Over vertrouwen en bedrijf, Leuven, Acco,
                    pp.133-142
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/ArtikelGiftofOmkoping.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2007), Reassessing Bamboo Network among
                    Chinese Family Business
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/ControlBambooCapitalismV0201.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2005), “De Barmhartige Samaritaan: een
                    filosofische reflectie over het ‘geven’”, Filosofie en
                    Praktijk, September
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/DeterugkeervandeBarmhartigeSamaritaanFV.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2013), “Do as the Romans do in Rome? A
                    “pragmatic” corporate governance perspective beyond ethical
                    relativism in Asian Emerging Markets”, in Rothlin &amp;
                    Haghirian, Business Ethics in Asia, Heidelberg; new York;
                    London, Springer, p.91-107
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/DoastheRomansdoinRomev0200.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    {/* Verhezen, P., (2014), Dual Versus Single-tier boards,
                    working paper ECGL &amp; MBS */}
                    Verhezen, P. &amp; G. Martin (2016), Corporate Governance
                    and Ethics at listed Indonesian companies (2011-2014),
                    IFC-MBS Research
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/Corp Governance & Ethics in Listed Indonesian Firms (2011-2014).pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P. &amp; N. Soebadjo, (2013), “Is there hope for
                    corporate governance in Indonesia?”, Strategic Review,
                    July-Sept, Vol. 3(3): 67-74
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/Edition9_PeterVerhezen-NataliaSoebagjo.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P. &amp; P. Morse, (2010), “Fear, Regret and
                    Transparency. Corporate Governance embracing disclosure and
                    integrity”, WorldBank-NACC (Thailand), Public Affairs
                    Publishing, pp.27-54
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/FearRegretTransparencyFinalVersion.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P. &amp; P. Morse, (2009), “Consensus on Global
                    Governance Principles?”, Journal of International Business
                    Ethics, March, 2 (1): 84-101
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/GovPracticesJIBEpublication.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2015), “Fear, Regret or Trust? Transparency
                    to control or transparency to empower”, International
                    Finance Corporation World Bank Paper, No 38, Washington
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/IFCPSO38PVE2015.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                {/* <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2012), “A Multipolar World and Global
                    Governance”, Working Paper:
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/MultipolarSocietyandglobalgovernance0201.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr> */}
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P. (2012), “The prevalence of guanxi in Asian
                    [family] business”, Working Paper:
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/NetworkinginChinFamBusinV01.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2012), Networking or guanxi in Indonesian
                    Family Business
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/NetworkingorguanxiinIndonesianFamBus2012.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2013), “Managerial Wisdom in Corporate
                    Governance”, in Thompson, M. &amp; D. Bevan (eds), Wisdom
                    and Complexity in Organizations, London, CEIBS &amp;
                    Palgrave
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/PeterVerhezenWisdominCorpGovFV.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2002), “A culture of gift exchanges”, Ethical
                    Perspectives, Leuven, September, pp.56-65
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/PVEtextGiftandBriberyinEthicalPerspectives2002.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2008), “The (ir)relevance of integrity in
                    organizations”, Public Integrity, Vol. 10(2): 133-149
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/ReputationalRiskandIntegrityFV.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (1998), “Respect and Trust: a cross-cultural
                    interpretation of corruption beyond the notions of Shame and
                    Guilt”, Working Paper Universitas Indonesia, Jakarta,
                    January y
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/SHAMEGUILTandinterpretationofCorruption.doc"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2009), “Crisis makes Transparency an urgent
                    task”, Shanghai Daily, 13 November, Opinion page 6
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/ShanghaiDaily13Novermber2008A6.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                {/* <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (1995), “Xenophobic Antagonism and ‘le sourire
                    compassionant’’”, a political-philosophical article on
                    Solidarity and human dignity, Working Paper, University of
                    Antwerp, August
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/SOURIRE2.DOC"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr> */}
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P, (2010), “Giving Voice to a Culture of Silence:
                    from a culture of compliance to a culture of integrity”,
                    Journal of Business Ethics; Vol. 96 (2): 187-206
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/VERHEZENPGivingVoiceinCultureofSilenceJBE2010.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Wise Management in Organisational Complexity FLYER 50%
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/WiseManagementinOrganisationalComplexityFLYER50.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P,(2011), “An offer you can’t refuse”,
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="http://theconversation.edu.au/articles/an-offer-you-cant-refuse-the-difficult-distinction-between-gifts-and-bribes-1878"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      link
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2011), “Geopolitical Changes and Corporate
                    Accountability”, in Roosens, P., Claessens &amp; V.
                    Stavrevska (Eds), Wereldwijd Bekeken: Essays in
                    International Management, Diplomacy &amp; Development
                    Studies. Liber Amicorum, University of Antwerp Press -
                    Universitas
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/3EArticlefortheAge20071102.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2006), “Reputation in good and bad times”,
                    The Age, Melbourne, 16 November
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/3EArticlefortheAge20071102.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2003), “From a culture of gift exchange to a
                    culture of exchanging gifts”, Jurnal Antropologi, University
                    of Indonesia (Jakarta), November, pp.101-115
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/Peterverhezentekstgiftandbribery4.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2008), “Guanxi: Networks or Nepotism?”, in
                    Zsolnai, Laszlo (Ed), Europe-Asia Dialogue on Business
                    Spirituality, Antwerp; Apeldoorn, Garant, pp.89-106
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/GuanxiNetworks5.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    &quot;Verhezen, P. (2017), &quot;&quot;Wising
                    Up&quot;&quot;, Brussels, Working Paper for Amrop Global (in
                    collaboration with University of Antwerp/AMS)&quot;
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/170224_Wising_Up_Amrop.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    &quot;Verhezen, P. (2017), &quot;&quot;From smart to wise
                    decision-making&quot;&quot;-presentation, Amrop Global&quot;
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/170224_Wising_Up_Amrop_deck.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2018), Reducing business risks in ASEAN
                    markets: “Living less dangerously in Indonesia”
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/VERHEZEN_et_al_2018_Living_less_dangerously_in_Indonesia.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P. in collaboration with S. Gande, et al at Amrop,
                    (2017), Survey on Wise Leadership
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/Amrop_Wise_Decision_Making-FULL_REPORT_180202.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P. &amp; S. Gande, (2018), Cash or Continuity.
                    When the investors come knocking. Brussels, Amrop
                    Publication
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/180420_AMROP_WDM_Cash_or_Continuity.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P. et al, (2018), “Cyberthreats. Facing the
                    Faceless”, Strategic Review, October-December
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/VERHEZEN_et_al_2018_Cyberthreats_Facing_the_Invisible_Strategic_Review_Oct.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2018), “Is Indonesian serious about corporate
                    governance?”, Strategic Review, July-September
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/Verhezen_2018_CG_in_Indonesian_firms_SR_29.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2018), “Wise Leadership and Artificial
                    Intelligence”
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/VERHEZEN_2018_Amrop_AI_and_Wise_Leadership_181010.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P. et al, (2019), “Hacking and the darker side of
                    social media”, Strategic Review, Jan-March
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/Verhezen-Chamb-SR-20190115.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P. et al, (2018), “Returns, Reputation, or both?
                    What happens when the regulator calls?”, Amrop Australia
                    paper
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/VERHEZEN_2018_Returns_or_Reputation_Australia_1.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2019), “Wise Leadership and AI: can we trust
                    Artificial Intelligence to tame complexity?” (2nd AI paper),
                    Amrop papers
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/VERHEZEN_2019_Wise_Decision_Making_and_AI_2nd_Paper.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2019), “The dark side of Artificial
                    Intelligence: Biases and a new geopolitical battle”,
                    Strategic Review, July-September
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/VERHEZEN_2019_SR_Artificial_Intelligence_Biases_and_Geopolitics.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    &quot;Verhezen, P., (2019), &quot;&quot;AI and WDM: the road
                    to AGI - Behind the scenes of the Machines&quot;&quot;,
                    Amrop AI Paper no3&quot;
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/VERHEZEN 2019_AI_Wisdom_the_Road_to_AGI_Paper_3.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P. (2019), “AI and Wise Decision Making: making
                    friends with the machines”, Amrop AI paper no4
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/191119_AI_and_Wisdom_4_Making_Friends_with_the_Machines.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    &quot;De Vos, VanderPoorten, Verhezen et al, (2019),
                    &quot;&quot;The future of Data in 2050&quot;&quot;,
                    TomorrowLab - Brussels&quot;
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/ReportRoundTable_FutureOfData112019V1.1.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2020), “Steering toward Strategic
                    Sustainability”, Strategic Review, Jan-March: 94-108
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/Verhezen-2020-Steering-toward-Strategic-Sustainability.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P. (2020), “How Wise Board Members can and should
                    facilitate Human-AI Collaboration”, in Kuznetsov &amp;
                    Nikishova (Eds), Challenges and Opportunities of Corporate
                    Governance Transformation in the Digital Era, IGI, pp 61-90
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/VERHEZEN_2019_hat-to-Expect-From-Artificial-Intelligence-in-Business_-How-Wise-Board-Members-Can-and-Should-Facilitate-Human-AI-Collaboration.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P. &amp; T. Abeng, (2020), Boards that govern and
                    lead, Strategic Review, Vol 10(2): 42-57
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/SR_36_Verhezen_Abeng_Web_20200405.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    &quot;Verhezen, P., (2020), &quot;&quot;Inside the Wise
                    CEO&#39;s Brain. The Neuroscience of Leadership&quot;&quot;,
                    Amrop AI essay no 7&quot;
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/AG0421_IT-studie_3_Alleen-lezen_.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P. (2020), "From Tension to Transformation. How
                    Wise Decision Makers transcend Paradoxes and Ambiguities",
                    Amrop AI Series.
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/VERHEZEN_2020_WDM-Managing_Paradoxes_(Paper_no6).pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P. (2020), "China and the US: the AI race", Amrop
                    AI Series.
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/VERHEZEN_2020_the_AI_Race_in_Geopolitics_(Paper no5).pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2021), Het Amorele van AI met (soms) immorele
                    gevolgen, AG Connect
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/AG0421_IT-studie_3 [Alleen-lezen].pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P., (2021), Inside the Wise Leader's Brain (Paper
                    no7)
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="/papers/VERHEZEN_Inside_the_Wise_Leaders_Brain_Paper_no7.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-5 pr-5 text-xs">
                    Verhezen, P. (2023), "Aligning Corporate Governance with
                    Organizational Integrity", Chapter 18 in Kaptein, M.,
                    Research Handbook on Organisational Integrity, Cheltenham,
                    Edward Elgar Publications.
                  </td>
                  <td className="border-b text-xs ">
                    <Link
                      href="\papers\Organizational_Integrity_and_Corporate_Governance_V07.01_FV.pdf"
                      target="_blank"
                      className=" hover:underline italic"
                    >
                      download
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

export default Downloadable;
