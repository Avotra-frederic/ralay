import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function TeamLeft({ nom, photo, role, description }) {
  const [pdp, setPdp] = useState(null);
  useEffect(() => {
    setPdp(photo);
  }, [photo]);
  return (
    <React.Fragment>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-16 mb-10 md:mb-3" data-aos="fade-up">
        <div className="h-72 bg-[#113839] relative md:col-span-1" data-aos="fade-up">
          <Box
            className={`h-80 w-full md:w-80 absolute -top-11 right-3 bg-slate-800  bg-cover bg-top bg-no-repeat object-fill`}
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
        <div className="md:col-span-2">
          <h1 className="text-2xl text-[#D8BB71] font-semibold">{nom}</h1>
          <span className="text-lg font-medium italic text-[#D8BB71]">
            {role}
          </span>
          <p className="text-lg text-justify font-thin">{description}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
