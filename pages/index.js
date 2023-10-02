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
        <script defer data-domain="unipeer.exchange" src="https://plausible.8bitlabs.tech/js/script.js"></script>
      </Head>
      <div className=" overflow-hidden">
        <div className="w-full border-b">
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
