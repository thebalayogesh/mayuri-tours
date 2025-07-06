import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const slides = [
  {
    original: "https://picsum.photos/id/1005/1600/600",
    thumbnail: "https://picsum.photos/id/1005/300/150",
    description: "Explore Majestic Tamil Nadu",
  },
  {
    original: "https://picsum.photos/id/1011/1600/600",
    thumbnail: "https://picsum.photos/id/1011/300/150",
    description: "Feel the Backwaters of Kerala",
  },
  {
    original: "https://picsum.photos/id/1021/1600/600",
    thumbnail: "https://picsum.photos/id/1021/300/150",
    description: "Chase the Beaches and Beyond",
  },
];

export default function GallerySlideshow() {
  return (
    <div className="relative">
      <ImageGallery
        items={slides}
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        autoPlay={true}
        slideInterval={4000}
        showBullets={false}
        additionalClass="h-[60vh] md:h-[80vh]"
      />
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
    </div>
  );
}
