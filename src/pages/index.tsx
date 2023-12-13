import { type NextPage } from "next";
import Head from "next/head";
import Carousel from "~/components/ui/Carousel";
import Features from "~/components/ui/Features";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sierra Western Store </title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <Features />
    </>
  );
};

export default Home;
