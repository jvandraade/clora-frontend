import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import VideoSection from "../components/VideoSection";
import Newsletter from "../components/Newsletter";
import Blog from "../pages/Blog";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <VideoSection />
      <Newsletter />
      <Blog />
    </>
  );
}