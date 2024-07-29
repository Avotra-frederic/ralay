import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function TeamRight({ nom, photo, role, description }) {
  const [pdp, setPdp] = useState(null);
  useEffect(() => {
    setPdp(photo);
  }, [photo]);
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-10 md:mb-3" data-aos="fade-up" >
        <div className="md:col-span-2" data-aos="fade-up">
          <h1 className="text-2xl text-[#D8BB71] font-semibold">{nom}</h1>
          <span className="text-lg font-medium italic text-[#D8BB71]">
            {role}
          </span>
          <p className="text-lg text-justify font-thin">{description}</p>
          <div>
            <h2 className="mt-5 font-semibold px-2 mb-2 ">Secteurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <p className="flex justify-center items-center py-2 shadow rounded-full bg-gray-400/5 text-sm">
              Institution financière
              </p>
              <p className="flex justify-center items-center py-2 shadow rounded-full bg-gray-400/5 text-sm">
              Commerce et Distribution
              </p>
              <p className="flex justify-center items-center py-2 shadow rounded-full bg-gray-400/5 text-sm">
              Clientèle privée
              </p>
              <p className="flex justify-center items-center py-2 shadow rounded-full bg-gray-400/5 text-sm">
              Immobilier
              </p>
              <p className="flex justify-center items-center py-2 shadow rounded-full bg-gray-400/5 text-sm">
              Industries
              </p>
              <p className="flex justify-center items-center py-2 shadow rounded-full bg-gray-400/5 text-sm">
              Média et Télécommunications
              </p>
              
              
            </div>
          </div>
        </div>
        <div className="h-72 bg-[#D8BB71] relative md:col-span-1">
          <Box
            className={
              pdp &&
              `h-80 w-full md:w-80 absolute -top-11 left-3 bg-slate-800 bg-[url('/Equipe/${pdp}')] bg-cover bg-top bg-no-repeat object-fill`
            }

          >
            <Image
              src={`/Equipe/${pdp}`}
              alt={nom}
              className="object-cover w-full h-full"
              loading="lazy"
              objectFit={"cover"}
              objectPosition={"center"}
            />
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
}
