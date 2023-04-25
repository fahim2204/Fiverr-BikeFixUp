import Head from "next/head";
import HeroSection from "/components/HeroSection";
import HeroMobile from "/components/HeroMobile";
import HeroService from "/components/HeroService";
import HeroBenefit from "/components/HeroBenefit";
import HeroLocation from "/components/HeroLocation";
import HeroCustomer from "/components/HeroCustomer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Bike -FixUp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <>
          <HeroSection />
          <HeroMobile />
          <HeroService />
          <HeroBenefit />
          <HeroLocation />
          <HeroCustomer />
        </>
      </main>
    </>
  );
}
