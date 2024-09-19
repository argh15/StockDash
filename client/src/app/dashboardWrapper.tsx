"use client";

import React, { useEffect } from "react";
import Navbar from "@/app/(components)/navbar";
import Sidebar from "@/app/(components)/sidebar";
import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  //the reason we are doing it like this is because it has to be passed on the HTML element in layout.tsx
  //if we add dark/light mode to the layout directly -> then it becomes a client component
  //allows us to control the HTML body elements through dark/light mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  });

  return (
    //flex is to divide the screen into coloumns
    //colors are to define, bg and text colors
    //w-full -> full width of the parent
    //min-h-screen -> min height of the screen
    //py-7 -> padding in y direction (top and bottom)
    //px-9 -> padding in x direction (left and right)
    //md:pl-24 -> it essentially says that for screens above medium size, there will be extra padding from left
    <div
      className={`${
        isDarkMode ? "dark" : "light"
      } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    //necessary to wrap about the child, if use only with layout, won't work
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
