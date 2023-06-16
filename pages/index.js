import Nav from "../components/nav";
import HeroSection from "../components/HeroSection";
import Footer from "./../components/Footer";
import CTAOne from "../components/CTAOne";
import CTATwo from "../components/CTATwo";
import Subscribe from "../components/Subscribe";
import Head from "next/head";
import FeaturesNew from "../components/FeaturesNew";
import HeroSectionNew from "../components/HeroSectionNew";
import FAQ from "../components/FAQ";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Unipeer</title>
      </Head>
      <div className=" overflow-hidden">
        <div className="relative max-w-screen-xl mx-auto">
          <Nav />
        </div>
        <HeroSectionNew />
        <CTAOne />
        <CTATwo />
        <FeaturesNew />
        <FAQ />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}
