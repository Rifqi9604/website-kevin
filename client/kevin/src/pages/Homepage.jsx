import React from "react";
import photo from "../assets/kevin.jpg";
import photo2 from "../assets/kevin-smile.jpg";
import Cards from "../components/Cards/Cards";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import Footer from "../components/Footer/Footer";

function Homepage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center min-h-screen">
        <img src={photo2} className="rounded-full w-48 h-48" alt="Profile" />
        <div className="py-10 flex flex-col items-center gap-4">
          <p className="text-[24px] font-medium">Hello I'm</p>
          <span className="text-[36px] font-bold text-center">M. Kevin Rasendriya</span>
          <p className="font-semibold text-center">Videographer and Photographer</p>
        </div>
        <div className="flex">
          <button className="btn rounded-2xl">Contact Me</button>
        </div>
      </div>

      {/* About Me Section */}
      <div className="h-screen flex flex-col items-center justify-center py-8">
        <div className="py-8">
          <p className="text-[32px] font-bold ">About Me</p>
        </div>
        <div className="pb-8">
          <img src={photo} className="w-48 h-48 rounded-3xl" />
        </div>
        <div className="text-center px-6 font-normal text-slate-500">
          <p>
            I'm an undergraduate student at UPN "Veteran" Jakarta, currently
            majoring in Computer Science, who also passionate about Photography,
            Videography and Multimedia Arts.
          </p>
        </div>
        <div className="py-8 text-center">
          <p className="text-[24px] font-semibold">Familiar Tools</p>
        </div>
        <div className="flex gap-4 text-[48px] hover:cursor-pointer ">
          <SiAdobeaftereffects className="hover:text-blue-600 ease-in-out duration-300" />
          <SiAdobeillustrator className="hover:text-orange-600 ease-in-out duration-300" />
          <SiAdobepremierepro className="hover:text-blue-600 ease-in-out duration-300" />
          <SiCanva className="hover:text-purple-600 ease-in-out duration-300" />
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div className="min-h-screen flex flex-col items-center py-8">
        <div className="py-8">
          <p className="text-[32px] font-bold">My Projects</p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <Cards
            title={"Project 1"}
            desc={
              "lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,"
            }
          />
          <Cards
            title={"Project 2"}
            desc={
              "lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,"
            }
          />
          <Cards 
          title={"Project 3"}
          desc={'lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,'}/>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Homepage;
