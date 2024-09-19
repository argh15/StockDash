import React from "react";
import Navbar from "@/app/(components)/navbar";
import Sidebar from "@/app/(components)/sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    //flex is to divide the screen into coloumns
    //colors are to define, bg and text colors
    //w-full -> full width of the parent
    //min-h-screen -> min height of the screen
    //py-7 -> padding in y direction (top and bottom)
    //px-9 -> padding in x direction (left and right)
    //md:pl-24 -> it essentially says that for screens above medium size, there will be extra padding from left
    <div className={`light flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
