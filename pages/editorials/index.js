/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Image from "next/image";
import Logo from "../../images/logo/Logo.svg";
import EditorialContent from "@/components/editorial/EditorialContent";

const Editorials = () => {
  return (
    <main className="">
      <Navbar />
      <div className=" p-5">
        <section className=" max-w-5xl mx-auto p-5 text-center grid grid-cols-1 gap-20 mt-40">
          <div className=" mx-auto">
            <Image src={Logo} alt="Logo Daouda-Shabazz" />
          </div>
        </section>
        <section>
          <EditorialContent />
        </section>
      </div>
    </main>
  );
};

export default Editorials;
