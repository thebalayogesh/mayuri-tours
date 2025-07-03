import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2"
      style={{ ...style }}
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <ChevronLeft size={28} className="text-white" />
    </button>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2"
      style={{ ...style }}
      onClick={onClick}
      aria-label="Next Slide"
    >
      <ChevronRight size={28} className="text-white" />
    </button>
  );
}

const slides = [
  {
    image: "https://source.unsplash.com/1600x800/?travel,nature",
    title: "Explore Nature with Mayuri",
    sub: "Custom packages for hills, rivers, and forests.",
    ctaText: "Book a Nature Tour",
    ctaLink:
      "https://wa.me/919876543210?text=I'm%20interested%20in%20nature%20tour",
  },
  {
    image: "https://source.unsplash.com/1600x800/?adventure,jeep",
    title: "Adventure Awaits",
    sub: "Jeep safaris, trekking, and thrill rides.",
    ctaText: "Plan Your Adventure",
    ctaLink:
      "https://wa.me/919876543210?text=I'm%20interested%20in%20adventure%20tour",
  },
  {
    image: "https://source.unsplash.com/1600x800/?beach,vacation",
    title: "Relax at the Beaches",
    sub: "Sun, sand and seaside stays.",
    ctaText: "Get Beach Packages",
    ctaLink:
      "https://wa.me/919876543210?text=I'm%20interested%20in%20beach%20tour",
  },
];

export default function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div className="absolute bottom-4 w-full flex justify-center">
        <ul className="flex gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2.5 h-2.5 bg-white opacity-50 hover:opacity-100 rounded-full transition-all duration-300"></div>
    ),
  };

  return (
    <section className="relative w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="h-[65vh] md:h-[90vh] bg-cover bg-center flex items-center justify-center text-white px-6"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/50 p-8 rounded-xl text-center max-w-xl">
                <h1 className="text-3xl md:text-5xl font-elegant mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6">{slide.sub}</p>
                <a
                  href={slide.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-lg text-white text-sm font-semibold"
                >
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <button
//       type="button"
//       className={`${className} absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2`}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//       aria-label="Previous Slide"
//     >
//       <ChevronLeft size={28} className="text-white" />
//     </button>
//   );
// }

// function NextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <button
//       type="button"
//       className={`${className} absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2`}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//       aria-label="Next Slide"
//     >
//       <ChevronRight size={28} className="text-black" />
//     </button>
//   );
// }

// const slides = [
//   {
//     image: "https://source.unsplash.com/1600x800/?travel,nature",
//     title: "Explore Nature with Mayuri",
//     sub: "Custom packages for hills, rivers, and forests.",
//     ctaText: "Book a Nature Tour",
//     ctaLink:
//       "https://wa.me/919876543210?text=I'm%20interested%20in%20nature%20tour",
//   },
//   {
//     image: "https://source.unsplash.com/1600x800/?adventure,jeep",
//     title: "Adventure Awaits",
//     sub: "Jeep safaris, trekking, and thrill rides.",
//     ctaText: "Plan Your Adventure",
//     ctaLink:
//       "https://wa.me/919876543210?text=I'm%20interested%20in%20adventure%20tour",
//   },
//   {
//     image: "https://source.unsplash.com/1600x800/?beach,vacation",
//     title: "Relax at the Beaches",
//     sub: "Sun, sand and seaside stays.",
//     ctaText: "Get Beach Packages",
//     ctaLink:
//       "https://wa.me/919876543210?text=I'm%20interested%20in%20beach%20tour",
//   },
// ];

// export default function HeroCarousel() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };

//   return (
//     <section className="relative w-full">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index}>
//             <div
//               className="h-[90vh] bg-cover bg-center flex items-center justify-center text-white px-6"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               <div className="bg-black/50 p-8 rounded-xl text-center max-w-xl">
//                 <h1 className="text-3xl md:text-5xl font-elegant mb-4">
//                   {slide.title}
//                 </h1>
//                 <p className="text-lg md:text-xl mb-6">{slide.sub}</p>
//                 <a
//                   href={slide.ctaLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-lg text-white text-sm font-semibold"
//                 >
//                   {slide.ctaText}
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }
