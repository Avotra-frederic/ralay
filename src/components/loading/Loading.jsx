import React, { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <React.Fragment>
      <section className="h-screen fixed top-0 left-0 right-0 bottom-0 bg-white opacity-75 z-50">
        <div className="container mx-auto flex justify-center items-center h-full">
          <Bars
            height={80}
            width={80}
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </section>
    </React.Fragment>
  ) : null;
}
