import MainLayout from "../layouts/MainLayout";
import AboutBrand from "/components/AboutBrand";
import AboutHeroSection from "/components/AboutHeroSection";

export default () => {
  return (
    <>
      <MainLayout>
        <AboutHeroSection />
        <AboutBrand />
      </MainLayout>
    </>
  );
};
