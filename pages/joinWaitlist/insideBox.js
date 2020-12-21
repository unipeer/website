import React, { Component } from 'react';

const InsideBox = (props) => {
    return ( <>
         <div className="flex items-center w-full bg-teal-lighter">
         <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          {props.children}
         </div>
         </div>
    </> );
}
 
export default InsideBox;