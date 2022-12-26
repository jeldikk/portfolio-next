import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import LandingSection from "../components/landing-section/landing-section.component";
import IntroductionSection from "../components/intro-section/intro-section.component";
import SkillsSection from "../components/skills-section/skills-section.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          J Kamal Kumar Portfolio Website :: stay in touch in with jeldikk
        </title>
      </Head>
      <LandingSection />
      <IntroductionSection />
      <SkillsSection />
    </>
  );
}
