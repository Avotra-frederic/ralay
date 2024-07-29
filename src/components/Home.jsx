import { Card, CardBody } from "@chakra-ui/react";
import data from "./../data/data.json";
import services from "./../data/services.json";
import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { LiaBalanceScaleSolid, LiaBookOpenSolid } from "react-icons/lia";
import TeamRight from "./Team/TeamRight";
import WorldMap from "./UI/WorldMap";
import Footer from "../partials/Footer";
import React from "react";
import Loading from "./loading/Loading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./../assets/images/2.jpg";
import img2 from "./../assets/images/3.jpg";
import img3 from "./../assets/images/4.jpg";
import { FaCog, FaChartLine, FaSuitcase } from "react-icons/fa";
export default function Home() {
  const [jsonData, setJsonData] = useState(null);
  const [jsonService, setJsonService] = useState(null);
  const navbarRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  useEffect(() => {
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });

    document.addEventListener("keydown", (event) => {
      if (
        event.keyCode === 123 ||
        (event.ctrlKey && event.shiftKey && event.keyCode === 73)
      ) {
        event.preventDefault();
      }
    });
    setJsonData(data);
    setJsonService(services);
  }, []);
  return (
    <React.Suspense fallback={<Loading />}>
      <main>
        {/* home */}
        <section id="home" className="h-screen overflow-hidden relative">
          <Slider {...settings}>
            <div>
              <img
                src={img1}
                alt="image 1"
                className="w-full h-screen object-cover"
              />
            </div>
            <div>
              <img
                src={img2}
                alt="image 1"
                className="w-full h-screen object-cover"
              />
            </div>
            <div>
              <img
                src={img3}
                alt="image 1"
                className="w-full h-screen object-cover"
              />
            </div>
          </Slider>
          <div className="px-7 h-full absolute top-0 left-0 bg-black/55 w-full z-10 text-white">
            <div className="container mx-auto px-7 grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="flex flex-col justify-center gap-3">
                <h1 className="text-7xl">
                  RALAY <span className="text-[#D8BB71]">Nellie Laï</span>
                </h1>
                <h2 className="text-xl">
                  <Typewriter
                    options={{
                      loop: true,
                      strings: "STAND UP FOR YOUR RIGHT",
                      autoStart: true,
                    }}
                  />
                </h2>
                <p>
                  Incarne l&apos;excellence et la compétence avec plus de 20 ans
                  d&apos;expérience dans le métier. Dynamique et passionnée,
                  distingué par la capacité à relever les défis avec énergie et
                  détermination.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* end Home */}

        {/* skills */}
        <section
          id="about"
          style={{
            paddingTop: navbarRef.current ? navbarRef.current.clientHeight : 0,
          }}
        >
          <div className="container mx-auto px-7 py-10">
            <h1 className="text-4xl font-semibold text-start mb-5 uppercase">
              A propos
            </h1>
            <TeamRight
              description={
                "Ma  longue carrière m'a permis de développer une expertise pointue dans plusieurs domaines du droit, une référence incontournable pour ses clients."
              }
              nom={"RALAY Nellie Laï"}
              role={
                "Avocate au Barreau de Madagascar- Collaboratrice de Maître Louis SAGOT, Doyen des avocats de Madagascar."
              }
              photo={"new.jpg"}
            />
          </div>
        </section>

        <section
          id="skills"
          data-aos="fade-up"
          style={{
            paddingTop: navbarRef.current ? navbarRef.current.clientHeight : 0,
          }}
          className=" bg-gray-300/5 "
        >
          <div className="container mx-auto px-7 py-10">
            <h1 className="text-4xl font-semibold text-start mb-4 uppercase">
              Nos compétences
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-5">
              {jsonData &&
                jsonData.map((item, index) => (
                  <div
                    className="grid grid-cols-1 md:grid-cols-6"
                    key={index + 1}
                    data-aos="fade-up"
                  >
                    <div style={{ width: 150 }} className="col-span-1 ">
                      <LiaBalanceScaleSolid
                        size={50}
                        className="text-[#D8BB71]"
                      />
                    </div>
                    <div className="col-span-5">
                      <h1 className="text-2xl font-semibold text-start">
                        {item.titre}
                      </h1>
                      <p className=" text-sm text-justify">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section
          id="service"
          data-aos="fade-up"
          style={{
            paddingTop: navbarRef.current ? navbarRef.current.clientHeight : 0,
          }}
        >
          <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-semibold text-start mb-5 uppercase">
              Nos Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-1">
              {jsonService &&
                jsonService.map((item, index) => (
                  <div
                    className="h-56 bg-[#113839]/70 text-gray-100 rounded-sm p-5 border border-transparent border-solid cursor-pointer hover:bg-white hover:border-solid hover:border hover:text-[#113839] hover:shadow-2xl transition-all duration-700 hover:shadow-[#113839]"
                    key={index + 1}
                    data-aos={"flip-left"}
                    data-aos-duration="500"
                    data-aos-delay={index * 500}
                  >
                    <LiaBookOpenSolid size={50} className="text-[#D8BB71]" />
                    <h1 className="text-lg font-semibold text-[#D8BB71]">
                      {item.titre}
                    </h1>
                    <p className="text-sm font-thin">{item.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section data-aos="fade-up" className=" bg-gray-300/5 mb-10">
          <div className="container mx-auto px-7 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <p className="flex items-center justify-center font-bold">
                <FaChartLine size={30} style={{ marginRight: "10px" }} />
                <span>Levier</span>
              </p>
              <p className="flex items-center justify-center font-bold">
                {" "}
                <FaCog size={30} style={{ marginRight: "10px" }} />
                <span>Efficacité</span>
              </p>

              <p className="flex items-center justify-center font-bold">
                <FaSuitcase size={30} style={{ marginRight: "10px" }} />
                <span>Professionnalisme</span>
              </p>
            </div>
          </div>
        </section>
        <section
          className="bg-[#113839]  relative"
          data-aos="fade-up"
          style={{
            paddingTop: navbarRef.current ? navbarRef.current.clientHeight : 0,
          }}
        >
          <Card
            className="w-72 md:w-96 px-5 inset-y-9 md:inset-y-20 left-9 md:left-11 md:backdrop-blur h-fit md:py-24 shadow-2xl shadow-[#386e86] transition-all"
            variant="outline"
            background={"#1138399a"}
            color={"white"}
            position={"absolute"}
          >
            <CardBody>
              <p className="text-sm md:text-xl text-justify">
                Distinction par le réseau internationnal avec des partenariats
                de juridiction étrangères.
              </p>
            </CardBody>
          </Card>
          <WorldMap />
          <div className="bottom-0 md:absolute w-full">
            <Footer />
          </div>
        </section>
      </main>
    </React.Suspense>
  );
}
