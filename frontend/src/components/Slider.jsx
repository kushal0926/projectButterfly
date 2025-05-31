// import { useState, useEffect } from "react";

// const slides = [
//   {
//     id: 1,
//     title: "Summer Sale Collections",
//     description: "Sale! Up to 50% off!",
//     img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
//     url: "/",
//     bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
//   },
//   {
//     id: 2,
//     title: "Winter Sale Collections",
//     description: "Sale! Up to 50% off!",
//     img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
//     url: "/",
//     bg: "bg-gradient-to-r from-pink-50 to-blue-50",
//   },
//   {
//     id: 3,
//     title: "Spring Sale Collections",
//     description: "Sale! Up to 50% off!",
//     img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
//     url: "/",
//     bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
//   },
// ];

// const HeroSlider = () => {
//   const [current, setCurrent] = useState(0);

//   const prevSlide = () => {
//     setCurrent(current === 0 ? slides.length - 1 : current - 1);
//   };

//   const nextSlide = () => {
//     setCurrent(current === slides.length - 1 ? 0 : current + 1);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [current]);

//   return (
//     <div
//       className={`w-full h-screen relative overflow-hidden ${slides[current].bg} transition-all duration-700`}
//     >
//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
//         aria-label="Previous Slide"
//       >
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
//         aria-label="Next Slide"
//       >
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//         </svg>
//       </button>

//       {/* Slide Content */}
//       <div className="w-full h-full flex items-center justify-center px-4 md:px-20">
//         {/* Text */}
//         <div className="w-1/2 space-y-4 text-center md:text-left">
//           <h1 className="text-3xl md:text-5xl font-bold">{slides[current].title}</h1>
//           <p className="text-lg md:text-2xl">{slides[current].description}</p>
//           <a
//             href={slides[current].url}
//             className="inline-block mt-4 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
//           >
//             Shop Now
//           </a>
//         </div>

//         {/* Image */}
//         <div className="w-1/2">
//           <img
//             src={slides[current].img}
//             alt={slides[current].title}
//             className="w-full h-[300px] md:h-[500px] object-cover rounded-xl shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSlider;
