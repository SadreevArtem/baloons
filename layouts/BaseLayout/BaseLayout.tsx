import { Footer } from "@/shared/components/Footer/Footer";
import { Header } from "@/shared/components/Header/Header";
import React from "react";


export const BaseLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className='text-black'>{children}</main>
      <Footer />
    </div>
  );
};
