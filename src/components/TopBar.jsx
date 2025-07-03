import React from "react";

export default function TopBar() {
  return (
    <div className=" text-sm py-2 px-4 flex items-center border-b-2 bg-blue-400 text-white font-bold">
      <div className="max-w-screen-xl text-l mx-auto flex flex-wrap justify-center md:justify-between items-center gap-2 md:gap-4 text-center md:text-left">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            📞{" "}
            <a href="tel:+919876543210" className="hover:underline">
              +91 98765 43210
            </a>
          </span>

          <span>|</span>
          {/* Divider */}
          {/* <span className="hidden sm:inline-block border-l border-white h-4"></span> */}

          <span className="flex items-center gap-1 pl-1">
            📞{" "}
            <a href="tel:+919812345678" className="hover:underline">
              +91 98123 45678
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

// import React from "react";

// export default function TopBar() {
//   return (
//     <div className=" bg-blue-400 text-white font-bold text-m py-2 px-4 flex justify-center md:justify-center  items-center border-b-2">
//       <div className="hidden md:block"></div>{" "}
//       {/* for spacing on wide screens */}
//       <div className="flex flex-col md:flex-row items-center gap-4">
//         <span className="flex items-center gap-2">Enquiry: </span>
//         <span className="flex items-center gap-1">
//           📞{" "}
//           <a href="tel:+919876543210" className="hover:underline">
//             +91 98765 43210
//           </a>
//         </span>
//         <span className="flex items-center gap-1">
//           📞{" "}
//           <a href="tel:+919812345678" className="hover:underline">
//             +91 98123 45678
//           </a>
//         </span>
//       </div>
//     </div>
//   );
// }
