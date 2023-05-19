import React from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import Navbar from "../../components/navbar/Navbar";
import Image from "next/image";
import Logo from "../../images/logo/Logo.svg";

const Contact = () => {
  return (
    <main className="">
      <Navbar />
      <div className=" p-5">
        <section className="mx-auto p-5 grid grid-cols-1 gap-20 mt-40">
          <div className=" mx-auto">
            <Image src={Logo} alt="Logo Daouda-Shabazz" />
          </div>

          <ContactForm />
        </section>
      </div>
    </main>
  );
};

export default Contact;
