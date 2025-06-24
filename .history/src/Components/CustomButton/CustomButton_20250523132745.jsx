// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const CustomButton = (props) => {
//     return (
//         <div className={`w-full flex  justify-${props.justifyPosition}`}>
//             <NavLink className="btn lg:btn-lg btn-sm bg-gradient-to-r from-[#57007B] to-[#6675F7] text-white font-semibold py-2 px-6 rounded shadow-md hover:opacity-90 transition duration-300">
//                 {props.btnText}
//             </NavLink>
//         </div>
//     );
// };

// export default CustomButton;


export default function CustomButton({ btnText, className = '' }) {
    return (
      <div className={`flex ${className}`}>
        <button className="lg:btn-lg btn-sm bg-gradient-to-r from-[#57007B] to-[#6675F7] text-white font-semibold py-2 px-6 rounded shadow-md hover:opacity-90 transition duration-300">
          {btnText}
        </button>
      </div>
    );
  }
  