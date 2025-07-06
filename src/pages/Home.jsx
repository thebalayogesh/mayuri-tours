import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import TopBar from "../components/TopBar";
import StatesOverview from "../components/StatesOverview";
import GoogleReviewsSection from "../components/GoogleReviewsSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <TopBar />
      <Header />
      <HeroCarousel />
      <StatesOverview />
      <GoogleReviewsSection />
      <Footer />
    </>
  );
};

export default Home;
