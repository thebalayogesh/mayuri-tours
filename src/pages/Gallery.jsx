import GalleryFilters from "../components/GalleryFilters";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <>
      <TopBar />
      <Header />
      <GalleryFilters />
      <Footer />
    </>
  );
}
