import Link from "next/link";
import React from "react";
import { demos } from "../lib/demos";
import NextLogo from "./NextLogo";

const GlobalNav = () => {
  return (
    <div className="fixed px-3 top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      {/* <Link href="/" className="text-gray-400  hover:text-white"> */}
      <div className="flex flex-row h-14 items-center px-4 py-4 lg:-auto ">
        <Link href='/' className="group flex w-full items-center gap-x-2.5">
          <div className="h-7 w-7 p-3 rounded-full border border-white/30 group-hover:border-white/50">
            {/* <NextLogo/> */}
          </div>
          <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">App Router</h3>
        </Link>
        
      </div>
      {/* </Link> */}
      <div className="space-y-10 ">
        {demos.map((section) => {
          return (
            <div key={section.name} className="">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 ">
                <p>{section.name}</p>
                {section.items.map((item)=>{
                    return(
                        <Link href='/' key={item.name} className="text-gray-300  group block bg-black hover:bg-gray-800  hover:text-white  lg:rounded-lg py-3 ">
                            {item.name}
                        </Link>
                    )
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>  
  );
};

export default GlobalNav;
