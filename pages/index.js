import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Footer from "../components/footer";

//Styles
import { Body } from "../components/body/Body.style";
import { Main } from "../components/main/Main.style";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bjornsen Design</title>
        <meta name="description" content="Welcome to my portfolio!" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin
        />
      </Head>
      <Body>
        <Header />
        <Main>
          <Hero />
          <Projects />
          <About />
        </Main>
        <Footer />
      </Body>
    </>
  );
}
