export default function Footer() {
  return (
    <footer className="w-full  bg-blueGray-200 pt-8 pb-6 bg-white backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              RALAY Nellie Laï
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              STAND UP FOR YOUR RIGHT
            </h5>
            
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Navigation
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Accueil
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#about"
                    >
                      A propos
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#skills"
                    >
                      Compétences
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#service"
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  NOUS CONTACTER
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className=" text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="tel:+2612220712"
                    >
                      22 207 12
                    </a>
                    <a
                      className=" text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="tel:+261342220712"
                    >
                      +261 34 22 207 12
                    </a>
                    <a
                      className=" text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="tel:+261340259638"
                    >
                      +261 34 02 596 38
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="mailto:ralaynellie@gmail.com"
                    >
                      ralaynellie@gmail.com
                    </a>
                    <a
                      className=" text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="mailto:samam@moov.mg"
                    >
                      samam@moov.mg
                    </a>
                  </li>
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      Immeuble MAMI- 9 Rue Soarano
                    </p>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
              >
                 {" "} par{" "}
              </a>
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className="text-blueGray-500 hover:text-blueGray-800"
              >
                RALAY Nellie Laï
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
