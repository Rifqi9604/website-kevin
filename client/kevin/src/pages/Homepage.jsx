import React from "react";
import photo from "../assets/kevin.jpg";
import { SiLinkedin } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import { GrProjects } from "react-icons/gr";
import Button from "../components/Button/Button";
import pameran from "../assets/pameran-ufofest.jpg";
import pameran10 from "../assets/pameran10.png";

function Homepage() {
  return (
    <div className="min-h-screen px-12 scroll-smooth md:px-32">
      {/* Hero Section */}
      <div className="pt-12 flex flex-col items-start h-screen md:pt-24">
        <div className="flex flex-col items-start gap-6 text-start md:flex-row md:items-center md:gap-16">
          <div className="flex justify-center items-center">
            <img
              src={photo}
              className="w-48 h-48 rounded-3xl md:h-72 md:w-[500px]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[24px] font-medium">Hello I'm</p>
            <span className="text-[36px] font-bold">M. Kevin Rasendriya</span>
            <p className="font-medium text-[16px]">
              A Video editor and Photographer rooted in Jakarta, Indonesia. I am
              fervently dedicated to the realms of Multimedia Design,
              Photography, and Videography.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/muhammad-kevin-rasendriya-727300240/">
                <SiLinkedin className="text-[28px]  rounded-sm hover:scale-125 hover:transition-all ease-in-out duration-300" />
              </a>
              <a href="https://www.instagram.com/kevinrasendriyaa/">
                <FaInstagram className="text-[28px] rounded-sm hover:scale-125 hover:transition-all ease-in-out duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="min-h-screen flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <GrProjects className="text-[16px]" />
          <p className="text-[16px] opacity-80">Latest Projects</p>
        </div>

        <div className="flex flex-col gap-6 pb-8 md:flex-row justify-between">
          <div className="flex gap-8 md:flex flex-col md:gap-16 justify-between">
            <div>
              <p className="text-[32px] font-bold">UFOFEST 2023: Ambang</p>
            </div>
            <div>
              <p>
                UFO “Veteran” Jakarta kembali mengadakan pameran akbar yang
                diselenggarakan di Perpustakaan Nasional Republik Indonesia.
                Pameran ini merupakan Pameran UFOFEST 2023 yang mengangkat tema
                “Ambang”.
              </p>
            </div>
            <div>
              <Button text={"Event"} />
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={pameran}
              className="w-96 h-72 rounded-3xl md:max-w-[500px] md:gap-24"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 pb-8 md:flex-row justify-between">
          <div className="flex gap-8 md:flex flex-col md:gap-16 justify-between">
            <div>
              <p className="text-[32px] font-bold">
                Pameran UFO Angkatan X : Artificial
              </p>
            </div>
            <div>
              <p>
                Pameran Angkatan X ini bertemakan “Artificial” yang biasa kita
                sebut AI. Tujuan dari tema kali ini sebagai penangkap isu
                terhadap canggih nya AI yang sudah melekat di masyarakat.
              </p>
            </div>
            <div>
              <Button text={"Event"} />
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={pameran10}
              className="w-72 h-72 rounded-3xl md:min-w-[390px] md:gap-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
