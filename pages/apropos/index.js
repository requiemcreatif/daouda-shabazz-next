/* eslint-disable react/no-unescaped-entities */
import Navbar from "../../components/navbar/Navbar";
import Image from "next/image";
import Logo from "../../images/logo/Logo.svg";

const Apropos = () => {
  return (
    <main className="">
      <Navbar />
      <div className=" p-5">
        <section className=" max-w-5xl mx-auto p-5 grid grid-cols-1 gap-20 mt-40">
          <div className=" mx-auto">
            <Image src={Logo} alt="Logo Daouda-Shabazz" />
          </div>
          <p>
            <span className=" text-red-700">
              <em> Daouda Shabazz</em>
            </span>
            , photographe autodidacte, est un témoin de son monde. Il y a
            longtemps déjà que l'image et lui sont complices. Fasciné, captivé
            par les séquences, il a su capter très tôt les défilés d'images...
            Celles des films, des courts métrages, des clips, des animations de
            tous genres. Représentant de l'instant, il perçoit ce que certains
            n'ont plus le temps de voir. Résidant à Paris, il est disponible
            pour des projets dans le monde entier.
          </p>
          <p className=" mb-40 text-center">
            <em>
              "Photographier un portrait me fait voyager sans connaitre la
              trajectoire,
              <br /> Découvrir l'inconnu dans un regard,
              <br /> Et autant d'êtres humains que de passerelles,
              <br /> Me font voler sans aile." <br />
              <span>Daouda Shabazz</span>
            </em>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Apropos;
